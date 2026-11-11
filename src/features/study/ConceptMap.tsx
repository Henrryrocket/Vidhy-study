import { useState } from "react";
import type { DiagramNode } from "../../domain/lesson";

/** Interactive concept map: tap a node to reveal its explanation. */
export function ConceptMap({ root }: { root: DiagramNode }) {
  const [open, setOpen] = useState<Set<string>>(() => new Set([root.id]));
  const toggle = (id: string) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const render = (node: DiagramNode, isRoot = false) => (
    <div className={isRoot ? "cmap" : "cmap__branch"} key={node.id}>
      <button
        type="button"
        className={`cmap__node${isRoot ? " cmap__node--root" : ""}`}
        aria-expanded={open.has(node.id)}
        onClick={() => toggle(node.id)}
      >
        {node.label}
        {open.has(node.id) && <span className="cmap__detail">{node.detail}</span>}
      </button>
      {node.children && node.children.length > 0 && <div className="cmap__children">{node.children.map((child) => render(child))}</div>}
    </div>
  );

  return (
    <div>
      <p className="muted small">Toca cada recuadro para ver qué significa.</p>
      {render(root, true)}
    </div>
  );
}
