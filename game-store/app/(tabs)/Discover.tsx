import Categories from "@/components/Categories";
import GamesTry from "@/components/GameTry";
import Header from "@/components/Header";
import NewGameCard from "@/components/NewGameCard";
import TrendingGamesCard from "@/components/TrendingGamesCard";
import { categories, games } from "@/Data/Data";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Discover() {
    return (
        <SafeAreaView style={styles.container}>

            <Header />

            {/* Header END*/}

            {/* Body */}
            <ScrollView style={styles.body}>


                {/* Categories */}

                <View style={styles.categories}>
                    <Text style={[styles.text, styles.categoriesTitle]}>Categories</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.categories}
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
                    <Text style={[styles.text, styles.trendingGamesTitle]}>Games you must try</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.trendingGamesList}
                    >

                        {games.map((game, index) => (
                            <GamesTry
                                key={index}
                                game={game}
                            />
                        ))}

                    </ScrollView>
                </View>
                {/* Games Try END */}


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
                        <Text style={[styles.text, styles.newGamesTitle]}>Top Rated</Text>
                        <Text style={[styles.text, {
                            fontSize: 15,
                            color: "gray",
                            marginRight: 10
                        }]}>See All</Text>
                    </View>

                    <View style={styles.newGamesList}>
                        {games.slice(1).map((game, index) => (
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
    },

    // Categories styles
    categories: {
        marginTop: 20,
    },
    categoriesTitle: {
        color: "black",
        marginBottom: 10,
    },
    categoriesItem: {
        color: "black",
        marginBottom: 10,
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



});