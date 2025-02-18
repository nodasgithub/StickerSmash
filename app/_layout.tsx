import { Stack } from "expo-router";
import { StatusBar} from "expo-status-bar"
import { LogBox } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler"


LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen 
          name="(tabs)" 
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen name="not-found" options={{}} />
      </Stack>
    </GestureHandlerRootView>
  )
}
