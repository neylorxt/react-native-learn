import { categories, games } from "@/Data/Data";
import Categories from "@/components/Categories";
import Header from "@/components/Header";
import NewGameCard from "@/components/NewGameCard";
import TrendingGamesCard from "@/components/TrendingGamesCard";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
    // This is the main component for the game store app
    // It contains the header, body, and categories section



    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}

            <Header />

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


                {/* Games Try */}
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
                {/* Games Try END */}



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

