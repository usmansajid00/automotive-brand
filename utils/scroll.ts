export function calculateScrollProgress(current: number, max: number): number {
  if (max <= 0) return 0;
  return Math.min(1, Math.max(0, current / max));
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
