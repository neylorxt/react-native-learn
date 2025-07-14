import {Text, View, StyleSheet, StatusBar, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
    id: number,
    title: string,
    description: string,
    date: string,
    status: Status,
    priority: Prirority,
    Opacity?: number,
};

// Enum des statuts
export enum Status {
    Waiting = "waiting",
    InProgress = "in progress",
    Finished = "finished",
    Cancelled = "cancelled",
}

// Enum des statuts
export enum Prirority {
    Low = "low",
    Medium = "medium",
    High = "high",
    Urgent = "urgent",
}

// Couleurs associées aux statuts
export const StatusColors: Record<Status, string> = {
    [Status.Waiting]: "#F6AD55",
    [Status.InProgress]: "#4299E1",
    [Status.Finished]: "#48BB78",
    [Status.Cancelled]: "#FC8181",
}

const tasks: Props[] = [
    {
        id: 1,
        title: "Task 1",
        description: "This is a task description",
        date: "2021-05-01",
        status: Status.Waiting,
        priority: Prirority.Low,
    },
    {
        id: 2,
        title: "Task 2",
        description: "This is a task description",
        date: "2021-05-02",
        status: Status.InProgress,
        priority: Prirority.Medium,
    },
    {
        id: 3,
        title: "Task 3",
        description: "This is a task description",
        date: "2021-05-03",
        status: Status.Finished,
        priority: Prirority.High,
    },
    {
        id: 4,
        title: "Task 4",
        description: "This is a task description",
        date: "2021-05-04",
        status: Status.Cancelled,
        priority: Prirority.Urgent,
        Opacity: 0.5,
    },
    {
        id: 5,
        title: "Task 5",
        description: "This is a task description",
        date: "2021-05-05",
        status: Status.Waiting,
        priority: Prirority.High,
    },
    {
        id: 6,
        title: "Task 6",
        description: "This is a task description",
        date: "2021-05-06",
        status: Status.InProgress,
        priority: Prirority.Medium,
    },
    {
        id: 7,
        title: "Task 7",
        description: "This is a task description",
        date: "2021-05-07",
        status: Status.Finished,
        priority: Prirority.Low,
    },
    {
        id: 8,
        title: "Task 8",
        description: "This is a task description",
        date: "2021-05-04",
        status: Status.Cancelled,
        priority: Prirority.Urgent,
        Opacity: 0.5,
    }
]



export default function Index() {

    return (
        <SafeAreaView style={styles.main}>
            <StatusBar barStyle="light-content" backgroundColor={styles.main.backgroundColor} />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Todo-App</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.bodyHeader}>
                    {/* Card: Today */}
                    <View style={[styles.bodyHeaderCard, styles.cardToday]}>
                        <FontAwesome name={"clock-o"} size={35} color={styles.bodyHeaderCardIcon.color} style={styles.bodyHeaderCardIcon} />
                        <View style={styles.bodyHeaderCardContent}>
                            <Text style={styles.bodyHeaderCardContentText}>Today</Text>
                            <Text style={styles.bodyHeaderCardContentNumber}>6</Text>
                        </View>
                    </View>

                    {/* Card: Scheduled */}
                    <View style={[styles.bodyHeaderCard, styles.cardScheduled]}>
                        <FontAwesome name={"calendar"} size={35} color={styles.bodyHeaderCardIcon.color} style={styles.bodyHeaderCardIcon} />
                        <View style={styles.bodyHeaderCardContent}>
                            <Text style={styles.bodyHeaderCardContentText}>Scheduled</Text>
                            <Text style={styles.bodyHeaderCardContentNumber}>13</Text>
                        </View>
                    </View>

                    {/* Card: All */}
                    <View style={[styles.bodyHeaderCard, styles.cardAll]}>
                        <FontAwesome name={"check-circle"} size={35} color={styles.bodyHeaderCardIcon.color} style={styles.bodyHeaderCardIcon} />
                        <View style={styles.bodyHeaderCardContent}>
                            <Text style={styles.bodyHeaderCardContentText}>Finished</Text>
                            <Text style={styles.bodyHeaderCardContentNumber}>20</Text>
                        </View>
                    </View>

                    {/* Card: Overdue */}
                    <View style={[styles.bodyHeaderCard, styles.cardOverdue]}>
                        <FontAwesome name={"times-circle-o"} size={35} color={styles.bodyHeaderCardIcon.color} style={styles.bodyHeaderCardIcon} />
                        <View style={styles.bodyHeaderCardContent}>
                            <Text style={styles.bodyHeaderCardContentText}>Canceled</Text>
                            <Text style={styles.bodyHeaderCardContentNumber}>1</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.bodyContent}>
                    <FlatList
                        data={tasks}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={[styles.taskItem, { backgroundColor: StatusColors[item.status], opacity: item.Opacity ?? 1 }]}>
                                <Text style={styles.taskText}>{item.title}</Text>
                            </View>
                        )}
                        ItemSeparatorComponent={() => <View style={styles.separator} /> }
                        />
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#1A202C",
    },
    header: {
        height: "10%",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#63B3ED",
        textAlign: "left",
    },
    body: {
        flex: 1,
        paddingHorizontal: 10,
    },
    bodyHeader: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingVertical: 10,
        gap: 15,
    },
    bodyHeaderCard: {
        width: "46%",
        height: 100,
        borderRadius: 15,
        padding: 15,
        justifyContent: "space-between",

        // Shadow properties for iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        // Elevation for Android
        elevation: 5,
    },
    cardToday: {
        backgroundColor: "#F6AD55", // Orange/Gold
    },
    cardScheduled: {
        backgroundColor: "#4299E1", // Blue
    },
    cardAll: {
        backgroundColor: "#48BB78", // Green
    },
    cardOverdue: {
        backgroundColor: "#FC8181", // Red/Pink
    },
    bodyHeaderCardIcon: {
        color: "#FFFFFF", // White icon color
    },
    bodyHeaderCardContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end", // Align text to the bottom
    },
    bodyHeaderCardContentText: {
        color: "#FFFFFF",
        fontSize: 16, // Slightly larger font size for text
        fontWeight: "600", // Medium bold
    },
    bodyHeaderCardContentNumber: {
        color: "#FFFFFF",
        fontSize: 22, // Larger font size for numbers
        fontWeight: "bold",
    },



    bodyContent:{
        flex: 1,
        borderWidth: 2,
        backgroundColor: "whitesmoke",
        borderRadius: 15,
        padding: 15,
    },
    taskItem: {
        padding: 12,
        backgroundColor: "#f1f0f0",
        borderRadius: 8,
    },
    taskText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "#f0f0f0",
        marginVertical: 8,
    },
});
