import {
  Text,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { theme } from "@/theme";
import { PlantlyButton } from "@/components/PlantlyButton";
import { useState } from "react";
import PlantlyImage from "@/components/PlantlyImage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { usePlantStore } from "@/store/plantStore";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import * as ImagePicker from "expo-image-picker";

export default function NewScreen() {
  const [name, setName] = useState<string>();
  const [days, setDays] = useState<string>();
  const addPlant = usePlantStore((state) => state.addPlant);
  const router = useRouter();
  const [imageUri, setImageUri] = useState<string>();

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert("Validation Error", "Give your plant a name");
    }

    if (!days) {
      return Alert.alert(
        "Validation Error",
        `How often does ${name} need to be watered?`,
      );
    }

    if (Number.isNaN(Number(days))) {
      return Alert.alert(
        "Validation Error",
        "Watering frequency must be a be a number",
      );
    }

    console.log("Adding plant", name, days);
    addPlant(name, parseInt(days, 10));
    setTimeout(() => router.navigate("/"), 100);
    Toast.show({
      type: "success",
      text1: `${name} 🪴 has been added Successfully!`,
      position: "top",
      visibilityTime: 2000,
    });
  };

  const handlePickedImage = async () => {
    if (Platform.OS === "web") {
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      allowsMultipleSelection: false,
      aspect: [1, 1], // for android only
      quality: 1,
    });
    if (!result.canceled) {
      const asset = result.assets[0];
      const uri = asset?.uri;
      // console.log(uri);
      setImageUri(uri);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity
        style={styles.centered}
        activeOpacity={0.8}
        onPress={handlePickedImage}
      >
        <PlantlyImage uri={imageUri} />
      </TouchableOpacity>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="E.g. Casper the Cactus"
        autoCapitalize="words"
      />
      <Text style={styles.label}>Watering Frequency (every x days)</Text>
      <TextInput
        value={days}
        onChangeText={setDays}
        style={styles.input}
        placeholder="E.g. 6"
        keyboardType="number-pad"
      />
      <PlantlyButton title="Add plant" onPress={handleSubmit} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  input: {
    borderWidth: 2,
    borderColor: theme.colorLightGrey,
    padding: 12,
    borderRadius: 6,
    marginBottom: 24,
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  centered: {
    alignItems: "center",
    marginBottom: 24,
  },
});
