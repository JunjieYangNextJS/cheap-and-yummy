import { create } from 'zustand'

interface MilesStore {
  // radius: 40000 | 32187 | 24140 | 16093 | 8047;
  radius: number;
  changeRadius: (newRadius: milesType) => void;

}

export const useMilesStore = create<MilesStore>((set) => ({
  radius: 24140,
  changeRadius: (newRadius) => set({ radius: radiusInCM[newRadius] }),
}))