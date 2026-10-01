export const luxuryEase = [0.16, 1, 0.3, 1] as const;
export const mechanicalEase = [0.43, 0.195, 0.02, 1] as const;

export const defaultTransition = {
  duration: 0.8,
  ease: luxuryEase,
};

export const snappyTransition = {
  duration: 0.4,
  ease: mechanicalEase,
};
