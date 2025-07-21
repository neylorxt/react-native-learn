import { View , Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notification() {
    return (
        <SafeAreaView>
            <View>
                <Text>Notification</Text>
                <Text>Explore games, discover new titles, and enjoy your gaming experience.</Text>
            </View>
        </SafeAreaView>
    )
}