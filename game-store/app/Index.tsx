import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

        <View style={{
          height: "55%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}>

          <Image
            source={{
              uri: "https://www.nintendo.com/eu/media/images/08_content_images/others_2/characterhubs/supermariohub/mariocharacters/MarioHub_Characters_Intro_Mario.png" // Replace with your image URL
            }}
            style={{ width: 300, height: 300, resizeMode: "contain" }}
          />

        </View>

        <View style={{
          height: "45%",
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-around",
          paddingVertical: 20,
        }}>

          <Text style={styles.h1} >Explore our collection of games.</Text>
          <Text style={styles.text} >
            The best games, personalized for you. Discover new adventures,
          </Text>

          <Pressable style={styles.button} onPress={() => {
            router.replace("/(tabs)/Index");
          }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={styles.buttonText}>Get Started</Text>

              <FontAwesome name="arrow-circle-right" size={38} color="white" />

            </View>
          </Pressable>

        </View>

      </View>




    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  h1: {
    width: "85%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    fontSize: 17,
    width: "85%",
    textAlign: "center",
  },
  button: {
    width: "85%",
    padding: 10,
    backgroundColor: "rgb(229, 42, 73)",
    borderRadius: 30,
    elevation: 1,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    paddingLeft: 10,
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
})