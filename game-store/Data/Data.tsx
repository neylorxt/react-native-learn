import { FontAwesome } from "@expo/vector-icons";

type FontAwesomeIconName = React.ComponentProps<typeof FontAwesome>["name"];
type gameCategories = "Action" | "Adventure" | "Puzzle" | "Strategy" | "Simulation" | "Sports" | "Racing";

export type CategoriesProps = { 
    iconName: FontAwesomeIconName;
    name: string;
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
};