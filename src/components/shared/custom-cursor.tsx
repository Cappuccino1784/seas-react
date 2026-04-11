"use client";

import { useEffect, useRef } from "react";

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return false;
  }

  return Boolean(
    target.closest(
      'a, button, [role="button"], input, textarea, select, summary, label',
    ),
  );
}

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const sparkleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const root = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const sparkle = sparkleRef.current;

    if (!root || !dot || !ring || !sparkle) {
      return;
    }

    document.body.classList.add("custom-cursor-enabled");

    let rafId = 0;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let visible = false;
    let pressed = false;
    let interactive = false;

    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      root.dataset.visible = String(visible);
      root.dataset.interactive = String(interactive);
      root.dataset.pressed = String(pressed);

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${pressed ? 0.9 : interactive ? 1.08 : 1})`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${pressed ? 0.92 : interactive ? 1.24 : 1})`;
      sparkle.style.transform = `translate3d(${ringX + 14}px, ${ringY - 16}px, 0) translate(-50%, -50%) scale(${visible ? 1 : 0.6}) rotate(${interactive ? "18deg" : "0deg"})`;

      rafId = window.requestAnimationFrame(render);
    };

    const handleMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      visible = true;
      interactive = isInteractiveTarget(event.target);
    };

    const handleOver = (event: MouseEvent) => {
      interactive = isInteractiveTarget(event.target);
    };

    const handleLeaveWindow = () => {
      visible = false;
      interactive = false;
      pressed = false;
    };

    const handleDown = () => {
      pressed = true;
    };

    const handleUp = () => {
      pressed = false;
    };

    rafId = window.requestAnimationFrame(render);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleLeaveWindow);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleLeaveWindow);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, []);

  return (
    <div ref={rootRef} className="seas-cursor" aria-hidden="true">
      <div ref={ringRef} className="seas-cursor-ring" />
      <div ref={dotRef} className="seas-cursor-dot" />
      <div ref={sparkleRef} className="seas-cursor-sparkle">
        *
      </div>
    </div>
  );
}
