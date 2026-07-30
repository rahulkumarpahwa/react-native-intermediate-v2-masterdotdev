import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHadOnboarded = useUserStore((state) => state.toggleHadOnboarded);

  const handleButtonPress = () => {
    toggleHadOnboarded();
    router.replace("/"); // we don't use the navigate here because we don't want the user to go back to the login / onboarding page after it has login. This will replace top stack screen with index in the /(tabs)
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
      style={styles.container}
    >
      <Text style={styles.text}>Welcome onboard!</Text>
      <PlantlyButton
        title="Let me in!"
        onPress={handleButtonPress}
      ></PlantlyButton>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
    color: theme.colorGreen,
    shadowColor: theme.colorWhite,
    textShadowColor: theme.colorWhite,
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 2,
  },
});
