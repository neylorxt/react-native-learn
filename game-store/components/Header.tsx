import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const Header: React.FC = () => {
    return (

        <View style={styles.header}>
            <View style={styles.headerV1}>
                <Image
                    source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/9203/9203764.png",
                        width: 50,
                        height: 50
                    }}
                />

                <View style={styles.headerV1_Right}>
                    <View style={styles.headerV1_Score}>
                        <FontAwesome name="trophy" size={17} color="black" style={styles.headerV1_ScoreTrophy} />
                        <Text style={[styles.text, styles.headerV1_ScoreText]}>2,342</Text>
                    </View>

                    <FontAwesome name="bell-o" size={25} color="black" style={styles.headerV1_Notif} />
                </View>


            </View>

            <View style={styles.headerV2}>

                <FontAwesome name="search" size={24} style={styles.headerV2_Icon} />

                <TextInput
                    placeholder="Search"
                    style={styles.headerV2_SearchInput}
                />

                <FontAwesome name="sliders" size={24} color="black" style={[
                    styles.headerV2_Icon, {
                        borderLeftWidth: 1,
                        paddingLeft: 10,
                    }]} />


            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },

    container: {
        flex: 1,
        backgroundColor: "whitesmoke"
    },
    header: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },

    // Header V1 styles
    headerV1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerV1_Right: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerV1_Score: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 20,
        height: 45,
        backgroundColor: "rgb(254, 129, 57)",
    },
    headerV1_ScoreTrophy: {
        borderRadius: 50,
        padding: 8,
        marginLeft: 6,
        backgroundColor: "whitesmoke",
        color: "rgb(254, 129, 57)",
    },
    headerV1_ScoreText: {
        marginHorizontal: 10,
        fontSize: 15,
        fontWeight: "bold",
    },
    headerV1_Notif: {
        borderRadius: 50,
        padding: 8,
        marginLeft: 6,
        color: "red",
    },

    // Header V2 styles
    headerV2: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        borderRadius: 30,
        paddingHorizontal: 10,
        backgroundColor: "rgba(191, 191, 191, .5)",

    },
    headerV2_SearchInput: {
        flex: 1,
        height: 50,
        paddingHorizontal: 10,
        marginLeft: 5,
    },
    headerV2_Icon: {
        color: "rgba(140, 140, 140, 1)",
        borderColor: "rgba(140, 140, 140, .5)",
        padding: 5,
    },


});


export default Header;