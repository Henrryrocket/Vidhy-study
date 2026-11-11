import { useState } from "react";
import { href } from "../../app/router";
import { useServices } from "../../app/services";
import type { Lesson } from "../../domain/lesson";
import type { StudentProfile } from "../../domain/profile";
import { masteryFor, scoreQuiz, type Answers } from "../../domain/quiz";
import { localIsoDate as toIsoDate } from "../../domain/dates";
import { reviewSchedule } from "../../domain/review";
import { useAsync } from "../../ui/useAsync";
import { ExplainItBack } from "./ExplainItBack";
import { LessonView } from "./LessonView";
import { Quiz } from "./Quiz";
import { Results } from "./Results";
import { StudySetup, type StudyPlan } from "./StudySetup";

type Step = "setup" | "learn" | "explain" | "quiz" | "results";
const STEPS: Step[] = ["setup", "learn", "explain", "quiz", "results"];


export function StudyFlow({ topicId, profile }: { topicId: string; profile: StudentProfile }) {
  const services = useServices();
  const { data, loading } = useAsync(async () => {
    const lesson = (await services.content.getLesson(topicId, profile)) ?? services.generatedLessons.get(topicId) ?? null;
    const topics = await services.content.listTopics();
    return { lesson, related: topics.filter((t) => lesson?.relatedTopicIds.includes(t.id)) };
  }, [topicId]);

  const [step, setStep] = useState<Step>("setup");
  const [plan, setPlan] = useState<StudyPlan | null>(null);
  const [answers, setAnswers] = useState<Answers>({});
  const [attempt, setAttempt] = useState(0);
  const [reviewDates, setReviewDates] = useState<Date[]>([]);

  if (loading) return <p className="muted">Preparando tu lección…</p>;
  const lesson: Lesson | null = data?.lesson ?? null;
  if (!lesson) {
    return (
      <div className="card">
        <h1>No encontramos ese tema</h1>
        <a className="btn" href={href({ name: "home" })}>
          Volver al inicio
        </a>
      </div>
    );
  }

  const go = (next: Step) => {
    setStep(next);
    window.scrollTo({ top: 0 });
  };

  const finishQuiz = (given: Answers) => {
    const result = scoreQuiz(lesson.quiz, given);
    const today = new Date();
    const exam = plan?.examDate ? new Date(`${plan.examDate}T23:59:59`) : undefined;
    const dates = reviewSchedule(masteryFor(result.percent), today, exam);
    services.progress.record({ topicId: lesson.id, percent: result.percent, completedAt: toIsoDate(today), nextReviews: dates.map(toIsoDate) });
    setAnswers(given);
    setReviewDates(dates);
    go("results");
  };

  const result = scoreQuiz(lesson.quiz, answers);
  const mastery = masteryFor(result.percent);

  return (
    <div>
      <nav aria-label="Progreso de estudio" className="progress-steps">
        {STEPS.map((s, i) => (
          <span key={s} className={i <= STEPS.indexOf(step) ? "is-done" : ""} />
        ))}
      </nav>

      {step === "setup" && (
        <StudySetup
          lesson={lesson}
          onStart={(p) => {
            setPlan(p);
            go("learn");
          }}
        />
      )}
      {step === "learn" && plan && <LessonView lesson={lesson} profile={profile} plan={plan} onContinue={() => go("explain")} />}
      {step === "explain" && <ExplainItBack lesson={lesson} onContinue={() => go("quiz")} />}
      {step === "quiz" && <Quiz key={attempt} questions={lesson.quiz} onFinish={finishQuiz} />}
      {step === "results" && (
        <Results
          lesson={lesson}
          result={result}
          mastery={mastery}
          reviewDates={reviewDates}
          related={data?.related ?? []}
          onRetryQuiz={() => {
            setAttempt((a) => a + 1);
            go("quiz");
          }}
          onBackToLesson={() => go("learn")}
        />
      )}
    </div>
  );
}
