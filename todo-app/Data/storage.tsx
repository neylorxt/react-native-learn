import AsyncStorage from "@react-native-async-storage/async-storage";
import {Props} from "@/Data/data";

export const saveDataInStorage = async (value : Props[]) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('tasks', jsonValue);
    } catch (e) {
        // saving error
        console.error("Erreur lors de la sauvegarde :", e);
    }
};

export const getDataInStorage = async () : Promise<Props[] | null> => {
    try {
        const jsonValue = await AsyncStorage.getItem('tasks');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
        console.error("Erreur lors de la sauvegarde :", e);
        return null;
    }
};
