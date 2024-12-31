import { create } from 'zustand';

interface RulerState {
  leftMargin: number;
  rightMargin: number;
  setLeftMargin: (position: number) => void;
  setRightMargin: (position: number) => void;
}

const LEFT_MARGIN_DEFAULT = 20;
const RIGHT_MARGIN_DEFAULT = 20;

export const useRulerStore = create<RulerState>((set) => ({
  leftMargin: LEFT_MARGIN_DEFAULT,
  rightMargin: RIGHT_MARGIN_DEFAULT,
  setLeftMargin: (position) => set({ leftMargin: position }),
  setRightMargin: (position) => set({ rightMargin: position }),
}));
