"use client";

import { useEffect, useRef, useState } from "react";

export function useRevealOnView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    // Check if already in view immediately (helpful for back navigation)
    const rect = element.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom >= 0;
    
    if (inView) {
      // Small timeout to ensure transition triggers if it was already in view
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 50);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
