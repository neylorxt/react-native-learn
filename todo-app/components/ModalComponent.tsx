
import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View, TextInput, Alert} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import {Priority, Props, Status} from "@/Data/data";
import { Controller, useForm} from "react-hook-form";

import {Picker} from '@react-native-picker/picker';

type ModalComponentProps = {
    item: Props | null;
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    onUpdateTask: (id: number, updatedData: Partial<Props>) => void;
    deleteTask: (id: number) => void;
};

type FormValues = Omit<Props, "id">;

const ModalComponent: React.FC<ModalComponentProps> = ({item, onUpdateTask, deleteTask, modalVisible, setModalVisible })  => {

    const [canEdit, setCanEdit] = useState<boolean>(false);


    const { control, reset, handleSubmit} = useForm<FormValues>({
        defaultValues:{
            title: "",
            description: "",
            date: "",
            status: Status.Waiting,
            priority: Priority.Low,
            Opacity: 0,

        },

    });



    useEffect(() => {
        if (item) {
            reset({
                title: item.title,
                description: item.description ?? "salut",
                date: item.date,
                status: item.status,
                priority: item.priority,
                Opacity: item.Opacity,
            });
        }
    }, [item, reset]);



    const handleEdit = (formData: FormValues) => {
        if (canEdit && item) {
            onUpdateTask(item.id, {
                title: formData.title,
                description: formData.description,
                date: formData.date,
                status: formData.status,
                priority: formData.priority,
                Opacity: formData.Opacity,
            });

            setCanEdit(false);
            setModalVisible(!modalVisible);
        } else {
            setCanEdit(true);
        }

    };

    const handleDelete = () => {
        if (item){
            deleteTask(item.id);
            setModalVisible(!modalVisible)
        }
    }





    if (!item) return null;


    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}

            >
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, {
                        backgroundColor: canEdit ? "lightcyan" : "",
                    }]}>


                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                setCanEdit(false);
                                setModalVisible(!modalVisible);
                            }}>
                            <FontAwesome name={"close"} size={12} color={"white"} />
                        </Pressable>


                        <View style={styles.modalViewContent}>

                            <View style={ styles.modalViewHeader }>
                                <Text style={[styles.modalText, {
                                    fontWeight: "bold",
                                    fontSize: 20
                                }]}>{canEdit ? "Edit" : "View"}</Text>
                            </View>

                            <View style={styles.modalViewBody}>

                                {/*Corps du modal*/}

                                <View>

                                    <View>

                                        <Controller
                                            control={control}
                                            name={'title'}
                                            rules={{
                                                minLength: 3,
                                                required: true
                                            }}
                                            render={ ({ field: {onChange, value, onBlur}} ) => (
                                                <TextInput
                                                    editable={canEdit}
                                                    value={value}
                                                    onChangeText={onChange}
                                                    onBlur={onBlur}
                                                    placeholder="Title"
                                                    style={styles.modalViewBodyInput}
                                                />

                                            )}
                                        />

                                    </View>

                                    <View>

                                        <Controller
                                            control={control}
                                            name={'description'}
                                            rules={{
                                                minLength: 3,
                                                required: true
                                            }}
                                            render={ ({ field: {onChange, value, onBlur} }) => (
                                                <TextInput
                                                    editable={canEdit}
                                                    value={value}
                                                    onChangeText={onChange}
                                                    onBlur={onBlur}
                                                    placeholder="Description"
                                                    multiline={true}
                                                    style={[styles.modalViewBodyInput, {
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
                                            render={ ({ field: {onChange, value, onBlur} }) => (
                                                <TextInput
                                                    value={value}
                                                    onChangeText={onChange}
                                                    onBlur={onBlur}
                                                    placeholder="Date"
                                                    editable={canEdit}
                                                    style={styles.modalViewBodyInput}
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
                                                    style={[styles.modalViewBodyInput, {
                                                        backgroundColor: "slategray", padding: 0,
                                                    }]}
                                                    dropdownIconColor={"blue"}
                                                    onBlur={onBlur}
                                                    selectedValue={value}
                                                    onValueChange={onChange}>
                                                    {
                                                        Object.values(Status).map((newValue, key) => (
                                                            <Picker.Item
                                                                enabled={canEdit}
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
                                                    style={[styles.modalViewBodyInput, {
                                                        backgroundColor: "slategray", padding: 0,
                                                    }]}
                                                    dropdownIconColor={"blue"}
                                                    onBlur={onBlur}
                                                    selectedValue={value}
                                                    onValueChange={onChange}>
                                                    {
                                                        Object.values(Priority).map((newValue, key) => (
                                                            <Picker.Item
                                                                enabled={canEdit}
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





                                </View>





                            </View>

                            <View style={styles.modalViewFooter}>

                                <Pressable
                                    style={[styles.button, styles.buttonUpdate]}
                                    onPress={handleSubmit(handleEdit)}>
                                    <Text style={styles.textStyle}>
                                        {canEdit ? "Update" : "Edit"}
                                    </Text>
                                </Pressable>

                                <Pressable
                                    style={[styles.button, styles.buttonDelete]}
                                    onPress={() => handleDelete()}>
                                    <Text style={styles.textStyle}>Delete</Text>
                                </Pressable>

                            </View>

                        </View>


                    </View>
                </View>
            </Modal>
        </View>
    );
};


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalView: {
        height: "auto",
        width: 350,
        position: "relative",
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        width: 130,
    },
    buttonUpdate: {
        backgroundColor: '#2196F3',
    },
    buttonDelete: {
        backgroundColor: 'red',
    },
    buttonClose: {
        width: "auto",
        borderRadius: 5,
        backgroundColor: 'red',
        position: "absolute",
        top: 10,
        right: 15,
        zIndex: 2
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalViewContent: {
        width: "100%",
    },
    modalViewHeader: {
    },
    modalViewBody: {
    },
    modalViewBodyInput:{
        borderWidth: 1,
        padding: 8,
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 6,
    },




    modalViewFooter: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 10,
    },
});

export default ModalComponent ;