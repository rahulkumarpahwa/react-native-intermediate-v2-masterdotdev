import { Text, View, StyleSheet, Platform } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import PlantlyImage from "@/components/PlantlyImage";

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
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagline}>
          Keep your plants healthy and hydrated.
        </Text>
      </View>

      <PlantlyImage></PlantlyImage>
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
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
    gap: 8,
  },
  heading: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
    color: theme.colorGreen,
    shadowColor: theme.colorWhite,
    textShadowColor: theme.colorWhite,
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 2,
  },
  tagline: {
    fontSize: 28,
    textAlign: "center",
    color: theme.colorWhite,
    textShadowColor: theme.colorGreen,
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 2,
    fontFamily: Platform.select({
      ios: "Caveat-Regular",
      android: "Caveat_400Regular",
    }),
  },
});
