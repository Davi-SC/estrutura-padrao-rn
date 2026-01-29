import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen
        name="profile/profile"
        options={{ headerShown: false, title: "Profile" }}
      />
    </Tabs>
  );
}
