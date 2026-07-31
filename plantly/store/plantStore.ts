import AsyncStorage from "@react-native-async-storage/async-storage";
import { stateToAction } from "expo-router/build/ui/common";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type PlantType = {
  id: string;
  name: string;
  wateringFrequencyDays: number;
  lastWateredAtTimestamp?: number;
};

export type PlantsState = {
  nextId: number;
  plants: PlantType[];
  addPlant: (name: string, wateringFrequencyDays: number) => void;
  removePlant: (plantId: string) => void;
  waterPlant: (plantId: string) => void;
};

export const usePlantStore = create(
  persist<PlantsState>(
    (set) => ({
      nextId: 1,
      plants: [],
      addPlant: (name, wateringFrequencyDays) => {
        return set((state) => {
          return {
            ...state,
            nextId: state.nextId + 1,
            plants: [
              {
                name,
                wateringFrequencyDays,
                id: String(state.nextId),
              },
              ...state.plants,
            ],
          };
        });
      },
      removePlant: (plantId) => {
        return set((state) => {
          return {
            ...state,
            plants: state.plants.filter((plant) => plant.id !== plantId),
          };
        });
      },
      waterPlant: (plantId) => {
        return set((state) => {
          return {
            ...state, 
            plants : state.plants.map(plant => {
              if (plant.id === plantId) {
                return {
                  ...plant,
                  lastWateredAtTimestamp: Date.now(),
                };
              }
              return plant;
            })
          }
        })
      },
    }),
    {
      name: "plantly-plants-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
