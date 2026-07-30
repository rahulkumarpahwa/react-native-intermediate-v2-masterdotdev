import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";

type UserStore = {
  hasFinishedOnboarding: boolean;
  toggleHadOnboarded: () => void;
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      hasFinishedOnboarding: false,
      toggleHadOnboarded: () => {
        set((state) => {
          return {
            ...state,
            hasFinishedOnboarding: !state.hasFinishedOnboarding,
          };
        });
      },
    }),
    {
      name: "plantly-user-store", // key for the store in localstorage
      storage: createJSONStorage(() => AsyncStorage), // storage where storage is done and the createJSONStorage does the stringify and parsing of the json data to and from to the localStorage as store only strings. also the AsyncStorage is called in the function because:
      // The function is called lazily. Only when Zustand actually needs the storage does it execute.
    },
  ),
);
