import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#000" },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
