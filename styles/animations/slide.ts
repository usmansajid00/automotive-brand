export const slideInFromTop = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] },
  },
};

export const slideInFromRight = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.5, ease: [0.7, 0, 0.84, 0] },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};
