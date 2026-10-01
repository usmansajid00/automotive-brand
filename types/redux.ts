export interface NavState {
  isMenuOpen: boolean;
  activeSection: string;
}

export interface ProjectState {
  selectedServiceId: string | null;
  selectedPillarIndex: number;
}
