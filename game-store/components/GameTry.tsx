import { GameProps } from "@/Data/Data";
import { FontAwesome } from "@expo/vector-icons";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

type gameType = {
    game: GameProps;
}

const GamesTry: React.FC<gameType> = ({ game }) => {
    return (
        <ImageBackground
            source={{ uri: game.imageUrl ?? '' }} // Replace with actual image URL
            style={styles.GamesTryBg}
            imageStyle={{ borderRadius: 20 }}>

            <View style={{
                padding: 5, borderRadius: 20,
                backgroundColor: "rgba(228, 228, 228, 1)",
                position: "absolute", top: 10, right: 10
            }} >
                <FontAwesome name={game.like ? 'heart' : 'heart-o'} size={20} color="red" />
            </View>

            <View style={styles.GamesTryItem}>

                <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.text, styles.GamesTryItem_Text, { marginBottom: 1 }]}>{game.title}</Text>
                <Text style={[styles.text, styles.GamesTryItem_Text]}>{game.category}</Text>

                <View style={styles.GamesTryItem_Footer}>

                    <View style={{ flexDirection: "row", alignItems: "center", borderWidth: 1, backgroundColor: "rgba(255, 255, 255, 0.2)", padding: 4, borderRadius: 20 }}>
                        <FontAwesome name={'star'} size={20} color="yellow" />
                        <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.text, styles.GamesTryItem_Text]}>{game.rating}</Text>
                    </View>

                    {
                        game.canInstall && (
                            <Pressable style={styles.GamesTryItem_FooterBtn}>
                                <Text
                                    style={[styles.text, styles.GamesTryItem_FooterBtn_Text, {
                                        fontSize: 15,
                                        textAlign: "center",
                                    }]}>Install</Text>
                            </Pressable>
                        )
                    }

                </View>



            </View>


        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    GamesTryBg: {
        height: 220,
        width: 320,
        marginRight: 10,
        justifyContent: "flex-end",
    },
    GamesTryItem: {
        height: 95,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        marginRight: 10,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, .8)",
        paddingVertical: 5,
        elevation: 5,
        shadowColor: "black",
    },
    GamesTryItem_Text: {
        color: "white",
        fontSize: 15,
        marginHorizontal: 7
    },
    GamesTryItem_Footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    GamesTryItem_FooterBtn: {
        backgroundColor: "whitesmoke",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20
    },
    GamesTryItem_FooterBtn_Text: {
        color: "rgb(229, 42, 73)",
    },
})


export default GamesTry;