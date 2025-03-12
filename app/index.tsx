import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/Navigation";
import "../global.css"

export default function Index() {
  return (
    <>
      <SafeAreaProvider>
          <Navigation />
      </SafeAreaProvider>
      <StatusBar style="light" />
    </>
  );
}
