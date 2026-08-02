import { Text, View, StyleSheet, Pressable } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { PlantlyButton } from "@/components/PlantlyButton";

export default function ProfileScreen() {
  const toggleHadOnboarded = useUserStore((state) => state.toggleHadOnboarded);
  return (
    <View style={styles.container}>
      <PlantlyButton
        title={"Back to onBoarding"}
        onPress={toggleHadOnboarded}
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
    fontSize: 24,
  },
});
