import {Text, View, StyleSheet, StatusBar, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import TaskItem from "@/components/TaskItem";
import {tasks as initialTasks, StatusColors, Props} from "@/Data/data";
import {useState} from "react";

export default function Index() {
    const [tasks, setTasks] = useState<Props[]>(initialTasks);

    // Fonction pour mettre à jour une tâche
    const updateTask = (id: number, updatedTask: Partial<Props>) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, ...updatedTask } : task
            )
        );
    };

    // Fonction pour supprimer une tâche
    const deleteTask = (id: number) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    // Fonction pour ajouter une tâche
    const addTask = (newTask: Omit<Props, 'id'>) => {
        const newId = Math.max(...tasks.map(t => t.id)) + 1;
        setTasks(prevTasks => [...prevTasks, { ...newTask, id: newId }]);
    };

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

                    {
                        tasks.length > 0 ? (
                            <FlatList
                                data={tasks}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => (

                                    <TaskItem
                                        onUpdateTask={updateTask}
                                        deleteTask={deleteTask}
                                        itemId={item.id}
                                        title={item.title}
                                        style={[
                                            styles.taskItem, {
                                                backgroundColor: StatusColors[item.status],
                                                opacity: item.Opacity ?? 1,}
                                        ]}
                                        textStyle={styles.taskText}
                                    />

                                )}
                                ItemSeparatorComponent={() => <View style={styles.separator} /> }
                            />
                        ) : (
                            <TaskItem
                                onUpdateTask={updateTask}
                                deleteTask={deleteTask}
                                itemId={0}
                                title={"Aucune task"}
                                style={[
                                    styles.taskItem, {
                                        backgroundColor: "orange",
                                        opacity: 1}
                                ]}
                                textStyle={styles.taskText}
                            />
                        )
                    }

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
