import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Ziberba",
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "rgb(134 239 172)",
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
