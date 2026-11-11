/** Hand-drawn, labelled illustrations for each encyclopedia article. */
export function TopicIllustration({ topicId, emoji }: { topicId: string; emoji: string }) {
  switch (topicId) {
    case "nervous-system":
      return <Neuron />;
    case "photosynthesis":
      return <Leaf />;
    case "fractions":
      return <Pizza />;
    case "water-cycle":
      return <WaterCycle />;
    default:
      return (
        <div className="center" style={{ fontSize: "5rem" }} aria-hidden>
          {emoji}
        </div>
      );
  }
}

const label = { fontSize: 13, fontWeight: 800, fill: "currentColor" } as const;

function Neuron() {
  return (
    <svg className="illustration" viewBox="0 0 400 200" role="img" aria-labelledby="neuron-title">
      <title id="neuron-title">Neurona con dendritas, cuerpo celular, axón con mielina y terminales sinápticas</title>
      <g stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M70 100 L30 60 M70 100 L25 105 M70 100 L35 150 M45 70 L20 50 M40 140 L15 160" />
        <path d="M110 100 H330" />
        <path d="M330 100 L365 70 M330 100 L370 100 M330 100 L365 130" />
      </g>
      <circle cx="85" cy="100" r="32" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="4" />
      <circle cx="85" cy="100" r="11" fill="#7c3aed" />
      {[135, 180, 225, 270].map((x) => (
        <rect key={x} x={x} y="89" width="34" height="22" rx="11" fill="#fde68a" stroke="#d97706" strokeWidth="2" />
      ))}
      {[70, 100, 130].map((y) => (
        <circle key={y} cx={y === 100 ? 372 : 367} cy={y} r="6" fill="#f472b6" />
      ))}
      <circle r="6" fill="#facc15">
        <animateMotion dur="2.2s" repeatCount="indefinite" path="M85 100 H330" />
      </circle>
      <text x="20" y="35" style={label}>Dendritas</text>
      <text x="55" y="160" style={label}>Cuerpo celular</text>
      <text x="175" y="70" style={label}>Axón + mielina</text>
      <text x="300" y="170" style={label}>Sinapsis</text>
    </svg>
  );
}

function Leaf() {
  return (
    <svg className="illustration" viewBox="0 0 400 220" role="img" aria-labelledby="leaf-title">
      <title id="leaf-title">Una hoja recibe luz solar, agua y dióxido de carbono, y produce glucosa y oxígeno</title>
      <circle cx="60" cy="50" r="28" fill="#facc15">
        <animate attributeName="r" values="26;30;26" dur="3s" repeatCount="indefinite" />
      </circle>
      <g stroke="#facc15" strokeWidth="4" strokeDasharray="8 8">
        <path d="M90 70 L160 105">
          <animate attributeName="stroke-dashoffset" from="32" to="0" dur="1s" repeatCount="indefinite" />
        </path>
      </g>
      <path d="M150 140 C150 70 260 50 320 70 C300 140 220 180 150 140 Z" fill="#4ade80" stroke="#15803d" strokeWidth="4" />
      <path d="M150 140 C200 120 260 95 320 70" stroke="#15803d" strokeWidth="3" fill="none" />
      <path d="M150 140 L120 200" stroke="#15803d" strokeWidth="5" />
      <text x="20" y="100" style={label}>Luz ☀️</text>
      <text x="30" y="200" style={label}>Agua 💧 (raíces)</text>
      <text x="240" y="30" style={label}>CO₂ entra →</text>
      <text x="250" y="170" style={label}>→ O₂ sale</text>
      <text x="250" y="195" style={label}>→ Glucosa 🍬</text>
    </svg>
  );
}

function Pizza() {
  const slices = 4;
  const eaten = 3;
  const r = 80;
  const cx = 120;
  const cy = 110;
  const paths = Array.from({ length: slices }, (_, i) => {
    const a0 = (i / slices) * 2 * Math.PI - Math.PI / 2;
    const a1 = ((i + 1) / slices) * 2 * Math.PI - Math.PI / 2;
    const x0 = cx + r * Math.cos(a0);
    const y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1);
    const y1 = cy + r * Math.sin(a1);
    return `M${cx} ${cy} L${x0.toFixed(1)} ${y0.toFixed(1)} A${r} ${r} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)} Z`;
  });
  return (
    <svg className="illustration" viewBox="0 0 400 220" role="img" aria-labelledby="pizza-title">
      <title id="pizza-title">Pizza dividida en 4 partes iguales con 3 partes coloreadas: tres cuartos</title>
      {paths.map((d, i) => (
        <path key={i} d={d} fill={i < eaten ? "#fb923c" : "#fde7c7"} stroke="#9a3412" strokeWidth="3" />
      ))}
      <text x="250" y="80" style={{ ...label, fontSize: 44 }}>3</text>
      <line x1="240" y1="95" x2="290" y2="95" stroke="currentColor" strokeWidth="4" />
      <text x="250" y="140" style={{ ...label, fontSize: 44 }}>4</text>
      <text x="300" y="75" style={label}>← partes que tomo</text>
      <text x="300" y="130" style={label}>← partes iguales</text>
    </svg>
  );
}

function WaterCycle() {
  return (
    <svg className="illustration" viewBox="0 0 400 220" role="img" aria-labelledby="water-title">
      <title id="water-title">Ciclo del agua: evaporación del mar, condensación en nubes, precipitación sobre la montaña y escorrentía de regreso al mar</title>
      <rect x="0" y="170" width="400" height="50" fill="#38bdf8" />
      <path d="M220 170 L300 70 L380 170 Z" fill="#a3a3a3" />
      <path d="M280 95 L300 70 L320 95 Z" fill="#fff" />
      <circle cx="50" cy="40" r="22" fill="#facc15" />
      <g fill="#e5e7eb" stroke="#94a3b8" strokeWidth="2">
        <ellipse cx="200" cy="45" rx="50" ry="20" />
        <ellipse cx="235" cy="35" rx="30" ry="18" />
      </g>
      <g stroke="#0284c7" strokeWidth="3" strokeLinecap="round">
        {[260, 280, 300].map((x) => (
          <line key={x} x1={x} y1="62" x2={x - 6} y2="78">
            <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" begin={`${(x - 260) / 50}s`} repeatCount="indefinite" />
          </line>
        ))}
      </g>
      <path d="M90 160 C90 120 120 90 150 70" stroke="#0ea5e9" strokeWidth="3" fill="none" strokeDasharray="6 6" markerEnd="url(#arrow)">
        <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
      </path>
      <path d="M240 168 C200 175 160 175 130 170" stroke="#0369a1" strokeWidth="3" fill="none" markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#0369a1" />
        </marker>
      </defs>
      <text x="20" y="130" style={label}>Evaporación</text>
      <text x="160" y="15" style={label}>Condensación</text>
      <text x="300" y="60" style={label}>Precipitación</text>
      <text x="130" y="200" style={{ ...label, fill: "#0c4a6e" }}>Escorrentía</text>
    </svg>
  );
}
