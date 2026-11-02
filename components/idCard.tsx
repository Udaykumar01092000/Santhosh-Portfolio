
"use client";

import { useEffect, useRef } from "react";

type LanyardCardProps = {
  name?: string;
  role?: string;
  status?: string;
  photo?: string;
  ropeLength?: number;
  className?: string;
};

const CARD_W = 190;
const CARD_H = 260;
const HANG_GAP = 12;

const GRAVITY_K = 20;
const DAMPING = 1.1;
const MAX_ANGLE = (75 * Math.PI) / 180;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function LanyardCard({
  name = "Santhosh",
  role = "Data Analyst",
  status = "Available for projects",
  photo = "/profile.png",
  ropeLength = 110,
  className = "",
}: LanyardCardProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const swingRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const swing = swingRef.current;
    const card = cardRef.current;

    if (!root || !swing || !card) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let theta = reduceMotion ? 0 : 0.12;
    let omega = 0;

    let dragging = false;
    let grabOffset = 0;
    let lastAngle = 0;
    let lastTime = 0;
    let dragOmega = 0;

    let raf = 0;
    let running = false;
    let lastFrame = 0;

    const apply = () => {
      swing.style.transform = `rotate(${theta}rad)`;
    };

    const pointerAngle = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();

      const pivotX = rect.left + rect.width / 2;
      const pivotY = rect.top;

      return Math.atan2(
        -(event.clientX - pivotX),
        event.clientY - pivotY
      );
    };

    const tick = (now: number) => {
      const dt = Math.min((now - lastFrame) / 1000, 1 / 30);
      lastFrame = now;

      if (!dragging) {
        const steps = 3;
        const h = dt / steps;

        for (let i = 0; i < steps; i++) {
          omega +=
            (-GRAVITY_K * Math.sin(theta) - DAMPING * omega) * h;

          theta += omega * h;
        }

        if (
          Math.abs(theta) < 0.0004 &&
          Math.abs(omega) < 0.002
        ) {
          theta = 0;
          omega = 0;
          apply();
          running = false;
          return;
        }
      }

      apply();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;

      running = true;
      lastFrame = performance.now();
      raf = requestAnimationFrame(tick);
    };

    const onDown = (event: PointerEvent) => {
      event.preventDefault();

      card.setPointerCapture(event.pointerId);

      dragging = true;
      grabOffset = theta - pointerAngle(event);

      lastAngle = theta;
      lastTime = performance.now();
      dragOmega = 0;
      omega = 0;

      start();
    };

    const onMove = (event: PointerEvent) => {
      if (!dragging) return;

      const next = clamp(
        pointerAngle(event) + grabOffset,
        -MAX_ANGLE,
        MAX_ANGLE
      );

      const now = performance.now();
      const dt = (now - lastTime) / 1000;

      if (dt > 0) {
        dragOmega =
          dragOmega * 0.6 +
          ((next - lastAngle) / dt) * 0.4;
      }

      lastAngle = next;
      lastTime = now;
      theta = next;
    };

    const onUp = () => {
      if (!dragging) return;

      dragging = false;

      omega =
        performance.now() - lastTime > 80
          ? 0
          : clamp(dragOmega, -14, 14);

      start();
    };

    apply();

    if (!reduceMotion) start();

    card.addEventListener("pointerdown", onDown);
    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerup", onUp);
    card.addEventListener("pointercancel", onUp);

    return () => {
      cancelAnimationFrame(raf);

      card.removeEventListener("pointerdown", onDown);
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerup", onUp);
      card.removeEventListener("pointercancel", onUp);
    };
  }, []);

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      ref={rootRef}
      className={`select-none ${className}`}
      style={{
        width: CARD_W,
        height: ropeLength + HANG_GAP + CARD_H + 10,
      }}
    >
      <div
        ref={swingRef}
        className="absolute left-1/2 top-0 h-0 w-0"
        style={{
          transformOrigin: "0 0",
          willChange: "transform",
        }}
      >
        {/* Purple strap */}
        <div
          className="pointer-events-none absolute"
          style={{
            left: -11,
            top: 0,
            width: 22,
            height: ropeLength,
            background:
              "linear-gradient(90deg, #6d3be0 0%, #a16aff 50%, #6d3be0 100%)",
            borderRadius: "0 0 5px 5px",
            boxShadow: "0 0 14px rgba(135,80,247,0.35)",
          }}
        >
          <div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-white/25" />
        </div>

        {/* Top anchor */}
        <div className="pointer-events-none absolute -left-[8px] -top-[8px] h-4 w-4 rounded-full bg-[#2a1454] ring-2 ring-[#8750f7]" />

        {/* ID Card */}
        <div
          ref={cardRef}
          className="absolute cursor-grab touch-none active:cursor-grabbing"
          style={{
            left: -CARD_W / 2,
            top: ropeLength + HANG_GAP,
            width: CARD_W,
            height: CARD_H,
            filter: "drop-shadow(0 18px 25px rgba(42,20,84,0.45))",
          }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-white ring-1 ring-white/20">

            {/* Purple header */}
            <div className="absolute inset-x-0 top-0 h-[34%] bg-gradient-to-br from-[#963cff] via-[#8750f7] to-[#2a1454]" />

            {/* Card slot */}
            <div className="absolute left-1/2 top-3 h-2 w-12 -translate-x-1/2 rounded-full bg-black/30" />

            {/* Card content */}
            <div className="relative flex h-full flex-col items-center pt-12">

              {/* Profile image */}
              <div className="flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#b79bff] to-[#8750f7] text-2xl font-black text-white ring-4 ring-white">
                {photo ? (
                  <img
                    src={photo}
                    alt={name}
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  initials
                )}
              </div>

              {/* Name */}
              <p className="mt-3 px-2 text-center text-lg font-black text-[#2a1454]">
                {name}
              </p>

              {/* Role */}
              <p className="mt-1 px-4 text-center text-[11px] font-bold uppercase tracking-wide text-[#8750f7]">
                {role}
              </p>

              {/* Availability */}
              <div className="mb-5 mt-auto flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {status}
              </div>
            </div>
          </div>
        </div>

        {/* Metallic clip */}
        <div
          className="pointer-events-none absolute rounded-md"
          style={{
            left: -13,
            top: ropeLength - 8,
            width: 26,
            height: 38,
            background:
              "linear-gradient(90deg, #9ca3af 0%, #f3f4f6 45%, #9ca3af 100%)",
            boxShadow: "0 2px 5px rgba(0,0,0,0.35)",
          }}
        >
          <div className="absolute inset-x-[7px] bottom-2 top-3 rounded-sm bg-black/15" />
        </div>
      </div>
    </div>
  );
}
