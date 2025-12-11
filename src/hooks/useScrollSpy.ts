import { useEffect, useState } from 'react';

export const useScrollSpy = (ids: string[], offset = 0): string => {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    if (!window || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `${offset}px 0px -60% 0px`,
        threshold: 0.25,
      },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
};
