"use client";

import { useEffect } from "react";

export function SiteMotion() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".section > *, .case-card, .service-row, .tech-row"));
    elements.forEach((element) => element.classList.add("motion-ready"));

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("motion-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    const counters = Array.from(document.querySelectorAll<HTMLElement>(".hero-metrics strong, .chart-copy strong, .preview-kpis strong"));
    const counterObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        const original = element.textContent?.trim() ?? "";
        const match = original.match(/^(\d[\d.]*)/);
        if (!match || element.dataset.counted) return;
        element.dataset.counted = "true";
        const target = Number(match[1].replaceAll(".", ""));
        const suffix = original.slice(match[1].length);
        const duration = 760;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(target * eased);
          element.textContent = `${value.toLocaleString("pt-BR")}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        counterObserver.unobserve(element);
      }),
      { threshold: 0.55 },
    );
    counters.forEach((element) => counterObserver.observe(element));

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return null;
}
