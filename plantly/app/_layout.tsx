import { SplashScreen, Stack } from "expo-router";
import Toast from "react-native-toast-message";
import { useEffect } from "react";
import * as QuickActions from "expo-quick-actions";
import { Platform } from "react-native";
import { useQuickActionRouting } from "expo-quick-actions/router";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  useQuickActionRouting();

  useEffect(() => {
    QuickActions.setItems([
      {
        title: "Add a plant",
        icon: Platform.OS === "ios" ? "symbol:leaf" : "leaf",
        id: "0",
        params: { href: "/new" },
      },
      {
        title: "Profile",
        id: "1",
        params: { href: "/profile" },
      },
    ]);
  }, []);
  return (
    <>
      <Stack
        screenOptions={{
          headerLargeTitle: false,
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, animation: "flip" }}
        />
        <Stack.Screen
          name="onboarding"
          options={{
            presentation: "modal",
            headerShown: false,
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="new"
          options={{
            presentation: "modal",
            headerShown: true,
            title: "New Plant",
            // animation: "slide_from_bottom",
            headerTitleAlign: "center",
          }}
        />
      </Stack>
      <Toast></Toast>
    </>
  );
}
