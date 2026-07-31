import { Image, useWindowDimensions } from "react-native";

type Props = { size?: number; uri?: string };

export default function PlantlyImage({ size, uri }: Props) {
  const { width } = useWindowDimensions();

  const imageSize = size || Math.min(width / 1.5, 400);
  return (
    <Image
      source={
        uri
          ? {
              uri: uri,
            }
          : require("@/assets/plantly.png")
      } // require() tells React Native to bundle the local image at build time. Without require(), React Native won't know to include that local image in your app bundle.
      style={{ width: imageSize, height: imageSize, borderRadius : 8 }}
    ></Image>
  );
}
