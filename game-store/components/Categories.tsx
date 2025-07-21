import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { CategoriesProps } from "@/Data/Data";



const Categories: React.FC<CategoriesProps> = ({ iconName, name, isActive }) => {
    return (
        <View style={isActive ? styles.categoriesItemActive : styles.categoriesItem}>
            <FontAwesome name={iconName} size={24} style={isActive ? styles.categoriesItem_IconActive : styles.categoriesItem_Icon} />
            <Text style={[styles.text, isActive ? styles.categoriesItem_TextActive : styles.categoriesItem_Text]}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    categoriesItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        alignItems: "center",
        borderRadius: 30,
        marginRight: 10,
        height: 50,
        backgroundColor: "rgba(191, 191, 191, .5)",
    },
    categoriesItemActive: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        alignItems: "center",
        borderRadius: 30,
        marginRight: 10,
        height: 50,
        backgroundColor: "rgba(255, 0, 0, .24)",
    },
    categoriesItem_Icon: {
        borderRadius: 20,
        padding: 6,
        backgroundColor: "rgba(191, 191, 191, 1)",
        color: "black",
    },
    categoriesItem_IconActive: {
        borderRadius: 20,
        padding: 6,
        backgroundColor: "whitesmoke",
        color: "red",
    },
    categoriesItem_Text: {
        color: "black",
        fontSize: 15,
        marginLeft: 7,
    },
    categoriesItem_TextActive: {
        color: "red",
        fontSize: 15,
        marginLeft: 7,
    }
})


export default Categories;