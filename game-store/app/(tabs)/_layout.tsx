import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaProvider >
      <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'rgba(229, 42, 73, 1)',
        tabBarInactiveTintColor: 'gray'

      }} >
        <Tabs.Screen
          name="Index"
          options={{ title: 'Home', tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} /> }}
        />
        <Tabs.Screen
          name="Discover"
          options={{ title: 'Discover', tabBarIcon: ({ color }) => <FontAwesome name="gamepad" size={24} color={color} /> }}
        />
        <Tabs.Screen
          name="Account"
          options={{ title: 'Account', tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} /> }}
        />

      </Tabs>
    </SafeAreaProvider>
  );
}
