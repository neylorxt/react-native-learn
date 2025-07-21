import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        title: 'Game Store',
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="Index" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
    </Stack>
  );
}
