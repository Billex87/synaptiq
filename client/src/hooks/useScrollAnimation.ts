import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger children with fade-up class
            const children = entry.target.querySelectorAll(".fade-up, .fade-in");
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.add("visible");
              }, i * 120);
            });
            // Also animate the element itself if it has the class
            if (
              entry.target.classList.contains("fade-up") ||
              entry.target.classList.contains("fade-in")
            ) {
              entry.target.classList.add("visible");
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
      // Also observe all children with animation classes
      const animatables = ref.current.querySelectorAll(".fade-up, .fade-in");
      animatables.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
