"use client";

import { useEffect, useState } from "react";

type TextProps = { texts: string[]; align?: "left" | "center" | "right" };

export default function RotatingText({ texts, align = "left" }: TextProps) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    const update = () => {
      clearInterval(timer);
      if (!motion.matches && texts.length > 1) timer = setInterval(() => setIndex(previous => (previous + 1) % texts.length), 3500);
    };
    update();
    motion.addEventListener("change", update);
    return () => { clearInterval(timer); motion.removeEventListener("change", update); };
  }, [texts.length]);

  return (
    <div className="grid text2 font-medium" style={{ textAlign: align }}>
      <span className="sr-only">{texts.join(" · ")}</span>
      {texts.map((text, position) => (
        <span key={text} aria-hidden="true" className="col-start-1 row-start-1 self-center transition-opacity duration-500" style={{ opacity: position === index ? 1 : 0 }}>{text}</span>
      ))}
    </div>
  );
}
