import { create } from 'zustand'

export function findKeyByValue(obj: Record<string, number>, value: number): string | null {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return null; // Return null if the value is not found
}

export const radiusInCM = {
  '5': 8047,
  '10': 16093,
  '15': 24140,
  '20': 32187,
  '25': 40000
}

export type milesType = 
  "5" | "10" | "15" | "20" | "25";

interface MilesStore {
  // radius: 40000 | 32187 | 24140 | 16093 | 8047;
  radius: number;
  changeRadius: (newRadius: milesType) => void;

}

export const useMilesStore = create<MilesStore>((set) => ({
  radius: 24140,
  changeRadius: (newRadius) => set({ radius: radiusInCM[newRadius] }),
}))