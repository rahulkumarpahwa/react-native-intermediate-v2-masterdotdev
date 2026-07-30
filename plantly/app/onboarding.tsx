import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHadOnboarded = useUserStore((state) => state.toggleHadOnboarded);

  const handleButtonPress = () => {
    toggleHadOnboarded();
    router.replace("/"); // we don't use the navigate here because we don't want the user to go back to the login / onboarding page after it has login. This will replace top stack screen with index in the /(tabs)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome onboard!</Text>
      <PlantlyButton
        title="Let me in!"
        onPress={handleButtonPress}
      ></PlantlyButton>
    </View>
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
  },
});
