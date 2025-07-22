import { FontAwesome } from "@expo/vector-icons";

type FontAwesomeIconName = React.ComponentProps<typeof FontAwesome>["name"];
type gameCategories = "Action" | "Adventure" | "Puzzle" | "Strategy" | "Simulation" | "Sports" | "Racing";

export type CategoriesProps = {
    iconName: FontAwesomeIconName;
    name: gameCategories;
    isActive?: boolean;
}

export type TrendingGamesProps = {
    image: string | null;
    title: string;
}

export type GameProps = {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    category: gameCategories;
    developer: string;
    price: number;
    rating: number;
    releaseDate: string;
    canInstall: boolean;
    isTrending?: boolean;
    isNew?: boolean;
    isFree?: boolean;
    like?: boolean
};

export const categories: CategoriesProps[] = [
    { iconName: "gamepad", name: "Action", isActive: true, },
    { iconName: "flag", name: "Adventure", isActive: false },
    { iconName: "delicious", name: "Puzzle", isActive: false },
    { iconName: "street-view", name: "Strategy", isActive: false },
    { iconName: "plane", name: "Simulation", isActive: false },
    { iconName: "car", name: "Racing", isActive: false },
];

export const games: GameProps[] = [
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
        like: true
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
        like: false
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
        like: false
    },
    {
        id: "4",
        imageUrl: "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000091441/fae39e23663945106a722797131c43a3c3e62952e2ef4f264baaa3739efc137c",
        title: "Warzone",
        description: "Description for Game 4.",
        category: "Action",
        developer: "Activision",
        price: 14.99,
        rating: 4.8,
        releaseDate: "2012-08-21",
        canInstall: true,
        isTrending: true,
        isNew: false,
        isFree: false,
        like: true
    }
];