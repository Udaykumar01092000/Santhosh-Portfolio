"use client";

import { useEffect, useState } from "react";

type TypingRolesProps = {
  /** Add as many roles as you like – they rotate forever */
  roles: string[];
  /** ms per typed character */
  typingSpeed?: number;
  /** ms per deleted character */
  deletingSpeed?: number;
  /** ms to keep the finished word on screen before deleting */
  holdDelay?: number;
  /** ms pause on the empty line before the next role starts */
  gapDelay?: number;
};

/**
 * Types a role, holds it, deletes it, then types the next one – in the SAME
 * spot, forever, with a blinking cursor. Put the constant text ("I'm a")
 * outside this component.
 */
export function TypingRoles({
  roles,
  typingSpeed = 90,
  deletingSpeed = 45,
  holdDelay = 1600,
  gapDelay = 350,
}: TypingRolesProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Respect "reduce motion": show the first role, no typing
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);
    const onChange = () => setReduceMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion || roles.length === 0) return;

    const current = roles[index % roles.length];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < current.length) {
        timer = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typingSpeed,
        );
      } else {
        timer = setTimeout(() => setDeleting(true), holdDelay);
      }
    } else if (text.length > 0) {
      timer = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        deletingSpeed,
      );
    } else {
      timer = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      }, gapDelay);
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index, roles, reduceMotion, typingSpeed, deletingSpeed, holdDelay, gapDelay]);

  const visible = reduceMotion ? roles[0] ?? "" : text;

  return (
    <span className="typing-roles inline-block whitespace-nowrap align-baseline">
      {/* Screen readers get the full list once instead of every keystroke */}
      <span className="sr-only">{roles.join(", ")}</span>

      <span aria-hidden="true">
        <span className="bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-transparent">
          {visible}
        </span>
        {/* Cursor is a separate solid element (gradient-clipped text can't show a border) */}
        <span className="typing-roles-cursor ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] rounded-sm bg-[#8750f7]" />
      </span>

      <style>{`
        @keyframes typing-roles-blink {
          0%, 49%   { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .typing-roles-cursor {
          animation: typing-roles-blink 1s step-end infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .typing-roles-cursor { animation: none; }
        }
      `}</style>
    </span>
  );
}