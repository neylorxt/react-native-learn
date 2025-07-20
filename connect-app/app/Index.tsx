import {
    Text, View, StyleSheet,
    Image,
} from "react-native";

import {SafeAreaView} from "react-native-safe-area-context";
import {Link} from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={{
        backgroundColor: "darkslateblue"
    }}>


        <View style={{
            height: "100%",
        }}>


            <View style={{
                flex: 1,
                justifyContent: "center"
            }} >
                <Image
                    style={{
                        height: 350,
                        width: 350,
                        marginHorizontal: "auto"
                    }}
                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/10559/10559743.png" }}
                />
            </View>

            <View style={{
                flex: 1/3,
                justifyContent: "space-evenly"
            }} >

                <View>
                    <Text style={[styles.textStyle, {
                        fontSize: 30
                    }]}>
                        Join Us Today
                    </Text>
                    <Text style={[styles.textStyle, {
                        fontSize: 10,
                        marginTop: 10
                    }]}>
                        Create your account and unclock exclusive features
                    </Text>
                </View>


                <View style={{
                    width: "80%",
                    marginHorizontal: "auto",
                    padding: 10,
                    borderRadius: 30,
                    backgroundColor: "whitesmoke",
                }}>

                    <Link href={"/Login"} style={[styles.textStyle, {
                        color: "darkslateblue"
                    }]}>
                        Sign Up for Free
                    </Link>
                </View>

            </View>

        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})