import { stateToAction } from "expo-router/build/ui/common";
import { create } from "zustand";

type UserStore = {
  hasFinishedOnboarding: boolean;
  toggleHadOnboarded: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  hasFinishedOnboarding: false,
  toggleHadOnboarded: () => {
    set((state) => {
      return { ...state, hasFinishedOnboarding: !state.hasFinishedOnboarding };
    });
  },
}));
