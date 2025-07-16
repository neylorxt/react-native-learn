import {Tabs} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <Tabs screenOptions={{
                headerShown: false, animation: "shift", tabBarStyle: {backgroundColor: "whitesmoke"}
            }}>

                <Tabs.Screen
                    name="Index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({color}) => <FontAwesome size={28} name={"home"} color={color} />
                    }}
                />

                <Tabs.Screen
                    name="AddTask"
                    options={{
                        title: 'Add Task',
                        tabBarIcon: ({color}) => <FontAwesome size={28} name={"plus"} color={color} />
                    }}
                />

            </Tabs>
        </SafeAreaProvider>
    )
}
