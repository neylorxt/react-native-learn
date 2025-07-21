import { FontAwesome } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GameProps } from "@/Data/Data";

type gameType = {
    game: GameProps;
}

const NewGameCard: React.FC<gameType> = ({ game }) => {
    return (
        <View style={{
            flexDirection: "row", alignItems: "center", height: 180,
            borderWidth: 1, borderColor: "white",
            marginBottom: 10, backgroundColor: "aliceblue", borderRadius: 20,
            elevation: 5, shadowColor: "black", shadowOffset: { width: 0, height: 2 }, 
            shadowOpacity: 0.3, shadowRadius: 4
        }}>


            <Image
                source={{ uri: game.imageUrl ?? '' }} // Replace with actual image URL
                style={styles.newGamesImg}
            />



            <View style={styles.newGamesItem}>

                <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.text, { marginBottom: 1 }]}>{game.title}</Text>
                <Text style={[styles.text, styles.newGamesItem_Text]}>{game.category}</Text>

                <View style={styles.newGamesItem_Footer}>

                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name={'star'} size={20} color="orangered" />
                        <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.text, styles.newGamesItem_Text, { paddingLeft: 3 }]}>{game.rating}</Text>
                    </View>

                    {
                        game.canInstall && (
                            <Pressable style={styles.newGamesItem_FooterBtn}>
                                <Text
                                    style={[styles.text, styles.newGamesItem_FooterBtn_Text, {
                                        fontSize: 15,
                                        textAlign: "center",
                                    }]}>Install</Text>
                            </Pressable>
                        )
                    }

                </View>



            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    newGamesImg: {
        height: "100%",
        width: "50%",
        borderRadius: 20,
    },
    newGamesItem: {
        height: "100%",
        width: "50%",
        borderColor: "whitesmoke",
        paddingLeft: 10,
        justifyContent: "center",
    },
    newGamesItem_Text: {
        fontSize: 15,
    },
    newGamesItem_Footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    newGamesItem_FooterBtn: {
        backgroundColor: "rgba(229, 42, 73, 1)",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20
    },
    newGamesItem_FooterBtn_Text: {
        color: "white",
    },
})


export default NewGameCard;