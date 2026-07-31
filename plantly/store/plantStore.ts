import AsyncStorage from "@react-native-async-storage/async-storage";
import { File, Paths } from "expo-file-system";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type PlantType = {
  id: string;
  name: string;
  imageUri?: string;
  wateringFrequencyDays: number;
  lastWateredAtTimestamp?: number;
};

export type PlantsState = {
  nextId: number;
  plants: PlantType[];
  addPlant: (
    name: string,
    wateringFrequencyDays: number,
    imageUri?: string,
  ) => void;
  removePlant: (plantId: string) => void;
  waterPlant: (plantId: string) => void;
};

export const usePlantStore = create(
  persist<PlantsState>(
    (set) => ({
      nextId: 1,
      plants: [],
      addPlant: async (name, wateringFrequencyDays, imageUri) => {
        // Create a unique destination path for the image and save a copy in the app's local storage
        const fileName = `${new Date().getTime()}-${imageUri?.split("/").slice(-1)[0]}`;
        const destinationFile = new File(Paths.document, fileName);
        const savedImageUri = destinationFile.uri;
        console.log(savedImageUri);

        // save a copy in the app's local storage
        if (imageUri) {
          const sourceFile = new File(imageUri);
          await sourceFile.copy(destinationFile);
        }

        return set((state) => {
          return {
            ...state,
            nextId: state.nextId + 1,
            plants: [
              {
                id: String(state.nextId),
                name,
                wateringFrequencyDays,
                imageUri: imageUri ? savedImageUri : undefined,
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
            plants: state.plants.map((plant) => {
              if (plant.id === plantId) {
                return {
                  ...plant,
                  lastWateredAtTimestamp: Date.now(),
                };
              }
              return plant;
            }),
          };
        });
      },
    }),
    {
      name: "plantly-plants-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
