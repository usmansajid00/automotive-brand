import { useState, useEffect, useRef } from "react";

export function useHeaderScroll(isLocked = false) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isLocked) {
        setIsVisible(true);
        return;
      }

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current && isVisible) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current && !isVisible) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, isLocked]);

  return isVisible;
}
