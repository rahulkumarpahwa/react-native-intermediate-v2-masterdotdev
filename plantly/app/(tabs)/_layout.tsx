import { Link, Redirect, Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "@/theme";
import { Pressable, Text } from "react-native";
import { useUserStore } from "@/store/userStore";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding,
  );

  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding"></Redirect>;
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitleAlign: "center",
          // tabBarShowLabel: false,
          tabBarLabel({ focused, color }) {
            return focused ? (
              <Text style={{ color, fontSize: 10 }}>Home</Text>
            ) : (
              <></>
            );
          },
          tabBarIcon: ({ size, color }) => {
            return <Entypo name="leaf" size={size} color={color} />;
          },
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
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerTitleAlign: "center",
          // tabBarShowLabel: false,
          tabBarLabel({ focused, color }) {
            return focused ? (
              <Text style={{ color, fontSize: 10 }}>Profile</Text>
            ) : (
              <></>
            );
          },
          tabBarIcon: ({ size, color }) => {
            return <Feather name="user" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
