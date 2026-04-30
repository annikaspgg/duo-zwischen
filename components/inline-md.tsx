import { Fragment } from "react";

/**
 * Tiny inline-Markdown renderer for **bold** and *italic*.
 * The data files use these markers; we don't want a full Markdown engine.
 */
export function InlineMd({ children }: { children: string }) {
  const tokens = tokenize(children);
  return (
    <>
      {tokens.map((t, i) => {
        if (t.type === "bold") return <strong key={i}>{t.value}</strong>;
        if (t.type === "italic") return <em key={i}>{t.value}</em>;
        return <Fragment key={i}>{t.value}</Fragment>;
      })}
    </>
  );
}

type Token = { type: "text" | "bold" | "italic"; value: string };

function tokenize(input: string): Token[] {
  const out: Token[] = [];
  const re = /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(input)) !== null) {
    if (m.index > last) out.push({ type: "text", value: input.slice(last, m.index) });
    if (m[2] !== undefined) out.push({ type: "bold", value: m[2] });
    else if (m[4] !== undefined) out.push({ type: "italic", value: m[4] });
    last = re.lastIndex;
  }
  if (last < input.length) out.push({ type: "text", value: input.slice(last) });
  return out;
}
