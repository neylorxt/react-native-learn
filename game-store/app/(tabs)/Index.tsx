import Categories from "@/components/Categories";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoriesProps, GameProps } from "@/Data/Data";
import TrendingGamesCard from "@/components/TrendingGamesCard";
import NewGameCard from "@/components/NewGameCard";


export default function Index() {
    // This is the main component for the game store app
    // It contains the header, body, and categories section

    const categories: CategoriesProps[] = [
        { iconName: "gamepad", name: "Games", isActive: true },
        { iconName: "music", name: "Music", isActive: false },
        { iconName: "film", name: "Movies", isActive: false },
        { iconName: "book", name: "Books", isActive: false },
    ];

    const games: GameProps[] = [
        {
            id: "1",
            imageUrl: "https://aaagameartstudio.com/wp-content/uploads/2023/04/far-cry-3-featuerd.jpg-1000x563.webp",
            title: "Far Cry 3",
            description: "An action-adventure game set in an open world environment.",
            category: "Action",
            developer: "Ubisoft",
            price: 29.99,
            rating: 4.6,
            releaseDate: "2012-12-04",
            canInstall: true,
            isTrending: true,
            isNew: false,
            isFree: false,
        },
        // Add more games as needed
        {
            id: "2",
            imageUrl: "https://img1.wallspic.com/crops/2/1/6/8/4/148612/148612-ciel-jeu_pc-epic_games-composition_numerique-jeu_daventure-3840x2160.jpg",
            title: "Fortnite",
            description: "Description for Game 2.",
            category: "Action",
            developer: "Epic Games",
            price: 19.99,
            rating: 4.0,
            releaseDate: "2021-05-15",
            canInstall: true,
            isTrending: false,
            isNew: true,
            isFree: false,
        },
        {
            id: "3",
            imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1697055600",
            title: "Counter-Strike: Global Offensive",
            description: "Description for Game 3.",
            category: "Action",
            developer: "Valve Corporation",
            price: 14.99,
            rating: 4.8,
            releaseDate: "2012-08-21",
            canInstall: true,
            isTrending: true,
            isNew: false,
            isFree: false,
        },
    ];

    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerV1}>
                    <FontAwesome name="user-circle" size={50} color="red" />

                    <View style={styles.headerV1_Score}>
                        <FontAwesome name="trophy" size={17} color="black" style={styles.headerV1_ScoreTrophy} />
                        <Text style={[styles.text, styles.headerV1_ScoreText]}>2,342</Text>
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

            {/* Header END*/}

            {/* Body */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.body}
            >




                {/* Categories */}

                <View style={styles.categories}>
                    <Text style={[styles.text, styles.categoriesTitle]}>Categories</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.categoriesList}
                    >

                        {categories.map((category, index) => (
                            <Categories
                                key={index}
                                iconName={category.iconName}
                                name={category.name}
                                isActive={category.isActive}
                            />
                        ))}


                    </ScrollView>
                </View>

                {/* Categories END */}


                {/* Trending Games */}
                <View style={styles.trendingGames}>
                    <Text style={[styles.text, styles.trendingGamesTitle]}>Trending Games</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.trendingGamesList}
                    >

                        {games.map((game, index) => (
                            <TrendingGamesCard
                                key={index}
                                game={game}
                            />
                        ))}

                    </ScrollView>
                </View>
                {/* Trending Games END */}



                {/* New Games */}
                <View style={styles.newGames}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10 }}>
                        <Text style={[styles.text, styles.newGamesTitle]}>New Games</Text>
                        <Text style={[styles.text, {
                            fontSize: 15,
                            color: "gray",
                            marginRight: 10
                        }]}>See All</Text>
                    </View>

                    <View style={styles.newGamesList}>
                        {games.map((game, index) => (
                            <NewGameCard
                                key={index}
                                game={game}
                            />
                        ))}
                    </View>

                </View>
                {/* New Games END */}










            </ScrollView>
            {/* Body END */}


        </SafeAreaView>
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
    headerV1_Score: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 20,
        width: "30%",
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
        marginRight: 20,
        fontSize: 15,
        fontWeight: "bold",
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




    //Body styles
    body: {
        paddingHorizontal: 5,
    },



    // Categories styles
    categories: {
        marginTop: 20,
    },
    categoriesTitle: {
        color: "black",
        marginBottom: 10,
    },
    categoriesList: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 5,
    },



    // Trending Games styles
    trendingGames: {
        marginTop: 20,
    },
    trendingGamesTitle: {
        color: "black",
        marginBottom: 10,
    },
    trendingGamesList: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 5,
    },

    // New Games styles
    newGames: {
        marginTop: 20,
    },
    newGamesTitle: {
        color: "black",
        marginBottom: 10,
    },
    newGamesList: {
        paddingVertical: 10,
        paddingHorizontal: 5
    }



})

//l image du projet
// https://cdn.dribbble.com/userupload/37287902/file/original-fba3b24bf66b7b7879f6e0c2e2efebfe.jpg?resize=1905x1429&vertical=center