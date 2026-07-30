import { Image, useWindowDimensions } from "react-native";

export default function PlantlyImage() {
  const { width } = useWindowDimensions();

  const imageSize = Math.min(width / 1.5, 400);
  return (
    <Image
      source={require("@/assets/plantly.png")} // require() tells React Native to bundle the local image at build time. Without require(), React Native won't know to include that local image in your app bundle.
      style={{ width: imageSize, height: imageSize }}
    ></Image>
  );
}
