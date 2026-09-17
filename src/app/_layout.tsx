import Navbar from "@/components/layout/Navbar";
import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: "#0F172A" }}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="#0F172A" />

      {/* Status Bar Area */}
      <View
        style={{
          height: insets.top,
          backgroundColor: "#0F172A",
        }}
      />

      <Navbar />

      <View style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
}