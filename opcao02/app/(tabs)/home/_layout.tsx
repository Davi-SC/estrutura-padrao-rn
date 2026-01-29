import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen
        name="details"
        options={{ headerShown: false, title: "Details" }}
      />
    </Stack>
  );
}
