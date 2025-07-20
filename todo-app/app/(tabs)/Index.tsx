import {Text, View, StyleSheet, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

import TaskItem from "@/components/TaskItem";
import {StatusColors, Props, Status} from "@/Data/data";
import {useCallback, useEffect, useState} from "react";
import {getDataInStorage, saveDataInStorage} from "@/Data/storage";
import {useFocusEffect} from "expo-router";


export default function Index() {
    const [tasks, setTasks] = useState<Props[]>([]);
    const [taskStatus, setTaskStatus] = useState<Record<Status, number>>({
        [Status.Waiting]: 0,
        [Status.InProgress]: 0,
        [Status.Finished]: 0,
        [Status.Cancelled]: 0,
    });


    // Mettre à jour une tâche
    const updateTask = (id: number, updatedTask: Partial<Props>) => {
        setTasks(prevTasks => {
            const updated = prevTasks.map(task => {
                if (task.id === id) {

                    // On crée la nouvelle tâche mise à jour
                    const newTask = { ...task, ...updatedTask };

                    // On ajuste l'opacité selon le status
                    if (newTask.status === Status.Cancelled) {
                        newTask.Opacity = 0.5;
                    } else {
                        newTask.Opacity = 1;
                    }
                    return newTask;
                }
                return task;
            });

            saveDataInStorage(updated); // Sauvegarde
            return updated;
        });
    };

    // Supprime une tâche
    const deleteTask = (id: number) => {
        setTasks(prevTasks => {
            const updated = prevTasks.filter(task => task.id !== id);
            saveDataInStorage(updated); // Sauvegarde
            return updated;
        });
    };


    useEffect(() => {

        const fetchData = async () => {
            const storedTasks = await getDataInStorage();
            if (storedTasks) {
                setTasks(storedTasks);

                setTaskStatus( countByStatus(storedTasks) )
            }
        };

        fetchData();
    }, [])

    useEffect(() => {
        if (tasks){
            setTaskStatus( countByStatus(tasks) )
        }
    }, [tasks]);

    // REMPLACEZ votre useEffect par useFocusEffect
    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                //console.log("Rechargement des tâches..."); // Pour déboguer
                const storedTasks = await getDataInStorage();

                if (storedTasks) {
                    setTasks(storedTasks);
                    setTaskStatus( countByStatus(storedTasks) )
                }
            };

            fetchData();
        }, [])
    );

    return (
        <SafeAreaView style={styles.main}>

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
                            <Text style={styles.bodyHeaderCardContentNumber}> {taskStatus[Status.Waiting] ?? 0 } </Text>
                        </View>
                    </View>

                    {/* Card: Scheduled */}
                    <View style={[styles.bodyHeaderCard, styles.cardScheduled]}>
                        <FontAwesome name={"calendar"} size={35} color={styles.bodyHeaderCardIcon.color} style={styles.bodyHeaderCardIcon} />
                        <View style={styles.bodyHeaderCardContent}>
                            <Text style={styles.bodyHeaderCardContentText}>Scheduled</Text>
                            <Text style={styles.bodyHeaderCardContentNumber}>{taskStatus[Status.InProgress] ?? 0 }</Text>
                        </View>
                    </View>

                    {/* Card: All */}
                    <View style={[styles.bodyHeaderCard, styles.cardAll]}>
                        <FontAwesome name={"check-circle"} size={35} color={styles.bodyHeaderCardIcon.color} style={styles.bodyHeaderCardIcon} />
                        <View style={styles.bodyHeaderCardContent}>
                            <Text style={styles.bodyHeaderCardContentText}>Finished</Text>
                            <Text style={styles.bodyHeaderCardContentNumber}>{taskStatus[Status.Finished] ?? 0 }</Text>
                        </View>
                    </View>

                    {/* Card: Overdue */}
                    <View style={[styles.bodyHeaderCard, styles.cardOverdue]}>
                        <FontAwesome name={"times-circle-o"} size={35} color={styles.bodyHeaderCardIcon.color} style={styles.bodyHeaderCardIcon} />
                        <View style={styles.bodyHeaderCardContent}>
                            <Text style={styles.bodyHeaderCardContentText}>Canceled</Text>
                            <Text style={styles.bodyHeaderCardContentNumber}>{taskStatus[Status.Cancelled] ?? 0 }</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.bodyContent}>

                    {/* Remplacez temporairement votre condition par : */}
                    {tasks.length > 0 && (
                        <FlatList
                            data={tasks}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => {
                                //console.log("Rendu item:", item); // Déboguer chaque item
                                return (
                                    <TaskItem
                                        onUpdateTask={updateTask}
                                        deleteTask={deleteTask}
                                        item={item}
                                        title={item.title}
                                        style={[
                                            styles.taskItem, {
                                                backgroundColor: StatusColors[item.status],
                                                opacity: (item.Opacity && item.Opacity > 0) ?  item.Opacity : 1,
                                            }
                                        ]}
                                        textStyle={styles.taskText}
                                    />
                                );
                            }}
                            ItemSeparatorComponent={() => <View style={styles.separator} />}
                        />
                    )}


                    {
                        tasks.length === 0 && (
                            <TaskItem
                                onUpdateTask={updateTask}
                                deleteTask={deleteTask}
                                item={null}
                                title={"No task"}
                                style={[
                                    styles.taskItem, {
                                        backgroundColor: "rgba(255, 0,0,.5)",
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


const countByStatus = (items: Props[]) => {
    return items.reduce<Record<Status, number>>((acc, item) => {
        acc[item.status] = (acc[item.status] || 0) + 1;
        return acc;
    }, {
        [Status.Waiting]: 0,
        [Status.InProgress]: 0,
        [Status.Finished]: 0,
        [Status.Cancelled]: 0,
    });
};



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
