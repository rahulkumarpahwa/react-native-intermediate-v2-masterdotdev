import { theme } from "@/theme";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  message: string;
  style?: {
    borderColor: string;
    textColor: string;
  };
};

export default function Banner({ message, style }: Props) {
  return (
    <View style={styles.bannerContainer}>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    width: 10,
    height: 10,
    backgroundColor: theme.colorWhite,
  },
});
