import { Stack } from "expo-router";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function RootLayout() {
  return (
      <SafeAreaProvider>

        <Stack screenOptions={{ headerShown: false, animation: "flip", statusBarStyle: "dark" }}>
            <Stack.Screen name="Index" options={{ statusBarStyle: "light" }} />
            <Stack.Screen name="Login" options={{ statusBarStyle: "dark" }} />
            <Stack.Screen name="Register" options={{ statusBarStyle: "dark" }} />
            <Stack.Screen name="+not-found"/>
        </Stack>

      </SafeAreaProvider>
  )
}




// export default function RootLayout() {
//     const isAuthenticated = false
//     return (
//         <SafeAreaProvider>
//             { isAuthenticated ? <PrivateLayout /> : <PublicLayout /> }
//         </SafeAreaProvider>
//     )
// }
//
// function PrivateLayout() {
//     return (
//         <Stack screenOptions={{ headerShown: false, animation: "flip", statusBarStyle: "dark" }}>
//             <Stack.Screen name="Index" options={{ statusBarStyle: "light" }} />
//             <Stack.Screen name="Login" options={{ statusBarStyle: "dark" }} />
//             <Stack.Screen name="Register" options={{ statusBarStyle: "dark" }} />
//             <Stack.Screen name="+not-found" />
//         </Stack>
//     )
// }
//
//
// function PublicLayout() {
//     return (
//         <Stack screenOptions={{ headerShown: false, animation: "flip", statusBarStyle: "dark" }}>
//             <Stack.Screen name="Index" options={{ statusBarStyle: "light" }} />
//             <Stack.Screen name="+not-found" />
//         </Stack>
//     )
// }
