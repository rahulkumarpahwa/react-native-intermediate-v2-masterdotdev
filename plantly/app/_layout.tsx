import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "../theme";
import { Text } from "react-native";

export default function Layout() {
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
