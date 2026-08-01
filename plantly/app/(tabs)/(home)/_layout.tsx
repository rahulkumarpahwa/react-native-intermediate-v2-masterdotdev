import { theme } from "@/theme";
import { AntDesign } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: true,
          headerTitleAlign: "center",
          headerRight: () => {
            return (
              <Link href="/new" asChild>
                {/* asChild so that the Link work as the child Pressable otherwiwse it will not work. asChild tells Link to use its child (Pressable) as the actual clickable element instead of rendering its own wrapper. */}
                <Pressable hitSlop={20} style={{ marginRight: 18 }}>
                  <AntDesign
                    name="plus-circle"
                    size={24}
                    color={theme.colorGreen}
                  />
                </Pressable>
              </Link>
            );
          },
        }}
      ></Stack.Screen>

      <Stack.Screen
        name="plants/[plantId]"
        options={{
          title: "",
          headerTitleAlign: "center"
        }}
      ></Stack.Screen>
    </Stack>
  );
}
