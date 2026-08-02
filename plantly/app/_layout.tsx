import { SplashScreen, Stack } from "expo-router";
import Toast from "react-native-toast-message";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
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
