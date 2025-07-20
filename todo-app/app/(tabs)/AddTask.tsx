import React, {useCallback, useEffect} from "react";
import {Text, View, StyleSheet, TextInput, Pressable, Alert} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Controller, useForm} from "react-hook-form";
import {Picker} from "@react-native-picker/picker";

import {Priority, Props, Status} from "@/Data/data";

import {getDataInStorage, saveDataInStorage} from "@/Data/storage"
import {useFocusEffect} from "expo-router";

type FormValues = Omit<Props, "id">;

export default function AddTask() {

    const { control, handleSubmit, reset, formState: {errors}} = useForm<FormValues>({
        defaultValues:{
            title: "",
            description: "",
            date: "",
            status: Status.Waiting,
            priority: Priority.Low,
            Opacity: 0,

        }

    });


    useFocusEffect(
        useCallback(() => {
            reset()
        }, [])
    );



    const handleAdd = async (formData: FormValues) => {

        if (formData.status === Status.Cancelled) {
            formData.Opacity = 0.5;
        }else{
            formData.Opacity = 1;
        }


        const existingTasks = await getDataInStorage() || [];


        // Une nouvelle tâche avec un ID unique
        const newId = existingTasks.length > 0 ? Math.max(...existingTasks.map(t => t.id)) + 1 : 1;
        const newTask: Props = {
            id: newId,
            ...formData
        };

        // Ajouter la nouvelle tâche à la liste existante
        const updatedTasks = [...existingTasks, newTask];


        // Sauvegarder dans le stockage
        try {
            await saveDataInStorage(updatedTasks);
            reset();
            // Message de succès
            Alert.alert('Successful',  "Task added successfully");
            //console.log('Tâche ajoutée avec succès');

        } catch (error) {
            Alert.alert('Error', 'Saving error' );
            //console.error('Erreur lors de la sauvegarde:', error);
        }
    }

    const onError = (errors: any) => {
        //Alert.alert('Erreur', 'Erreurs de validation' );
        //console.log('Erreurs de validation:', errors);

        // Afficher les erreurs à l'utilisateur
        const errorMessages = Object.entries(errors)
            .map(([field, error]: [string, any]) => `${field}: ${error.message || 'Requis'}`)
            .join('\n');

        Alert.alert('Error', errorMessages);

        //console.log('Messages d\'erreur:', errorMessages);
        // Vous pouvez aussi afficher une Alert si vous importez Alert de react-native
    };


    return (
        <SafeAreaView style={styles.main}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Todo-App</Text>
            </View>

            <View style={styles.body}>

                <View style={styles.bodyContent}>

                    <View style={styles.bodyContentHeader}>
                        <Text style={styles.bodyContentHeader_Text}>Add New Task</Text>
                    </View>


                    {/*Input List*/}
                    <View style={{
                        paddingVertical: 10,
                        marginTop: 10,
                        marginBottom: 10,

                    }}>

                        <View>

                            <Controller
                                control={control}
                                name={'title'}
                                rules={{
                                    required: "Title required",
                                    minLength: {
                                        value: 3,
                                        message: "Title must contain at least 3 characters"
                                    }
                                }}
                                render={ ({ field: {onChange, value, onBlur}} ) => (
                                    <TextInput
                                        value={value}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        placeholder="Title"
                                        style={styles.bodyContent_Input}
                                    />


                                )}
                            />

                        </View>

                        <View>

                            <Controller
                                control={control}
                                name={'description'}
                                rules={{
                                    required: "Description required",
                                    minLength: {
                                        value: 3,
                                        message: "The description must contain at least 3 characters"
                                    }
                                }}
                                render={ ({ field: {onChange, value, onBlur} }) => (
                                    <TextInput
                                        value={value}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        placeholder="Description"
                                        multiline={true}
                                        style={[styles.bodyContent_Input, {
                                            height: 80
                                        }]}
                                    />

                                )}
                            />

                        </View>


                        <View>

                            <Controller
                                control={control}
                                name={'date'}
                                rules={{
                                    required: "Date required",
                                    minLength: {
                                        value: 8,
                                        message: "Date must contain at least 8 characters"
                                    }
                                }}
                                render={ ({ field: {onChange, value, onBlur} }) => (
                                    <TextInput
                                        value={value}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        placeholder="Date"
                                        style={styles.bodyContent_Input}
                                    />

                                )}
                            />

                        </View>


                        <View>

                            <Controller
                                control={control}
                                name={"status"}
                                render={ ({ field: {onChange, value, onBlur} }) => (
                                    <Picker
                                        style={[styles.bodyContent_Input, {
                                            backgroundColor: "slategray", padding: 0,
                                        }]}
                                        dropdownIconColor={"blue"}
                                        onBlur={onBlur}
                                        selectedValue={value}
                                        onValueChange={onChange}>
                                        {
                                            Object.values(Status).map((newValue, key) => (
                                                <Picker.Item
                                                    key={key}
                                                    label={newValue}
                                                    value={newValue}
                                                    fontFamily={"Roboto"}
                                                />
                                            ))
                                        }
                                    </Picker>
                                )}
                            />

                        </View>


                        <View>

                            <Controller
                                control={control}
                                name={"priority"}
                                render={ ({ field: {onChange, value, onBlur} }) => (
                                    <Picker
                                        style={[styles.bodyContent_Input, {
                                            backgroundColor: "slategray", padding: 0,
                                        }]}
                                        dropdownIconColor={"blue"}
                                        onBlur={onBlur}
                                        selectedValue={value}
                                        onValueChange={onChange}>
                                        {
                                            Object.values(Priority).map((newValue, key) => (
                                                <Picker.Item
                                                    key={key}
                                                    label={newValue}
                                                    value={newValue}
                                                    fontFamily={"Roboto"}
                                                />
                                            ))
                                        }
                                    </Picker>
                                )}
                            />

                        </View>




                        <View style={styles.bodyContent_InputFooter}>

                            <Pressable
                                style={styles.button}
                                onPress={handleSubmit(handleAdd, onError)}>
                                <Text style={styles.textStyle}>Add</Text>
                            </Pressable>


                        </View>

                    </View>
                    {/*End Input List*/}



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
        justifyContent: "center",
        paddingHorizontal: 10,
    },



    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bodyContent:{
        height: "auto",
        width: "90%",
        borderWidth: 2,
        borderColor: "orange",
        backgroundColor: "whitesmoke",
        borderRadius: 15,
        padding: 15,
        marginTop: 10,
        marginHorizontal: "auto",

    },
    bodyContentHeader:{
        backgroundColor: "orange",
        borderRadius: 15,
        padding: 13,
        width: "95%",
        marginHorizontal: "auto",
    },
    bodyContentHeader_Text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    bodyContent_Input:{
        borderWidth: 1,
        padding: 8,
        marginBottom: 15,
        marginHorizontal: 10,
        borderRadius: 6,
        backgroundColor: "white",
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        height: 50,
    },
    bodyContent_InputFooter: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 10,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        width: 200,
        backgroundColor: "blue",
    }
});
