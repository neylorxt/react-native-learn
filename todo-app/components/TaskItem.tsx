import React, {useState} from 'react';
import {View, Text, ViewStyle, TextStyle, Alert, Pressable} from 'react-native';
import ModalComponent from './ModalComponent';
import {Props} from "@/Data/data";

type TaskItemProps = {
    item: Props | null;
    title: string;
    style?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle | TextStyle[];
    onUpdateTask: (id: number, updatedData: Partial<Props>) => void;
    deleteTask: (id: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({onUpdateTask, deleteTask, item, title, style, textStyle }) => {

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const showModal = () => {
        setModalVisible(prevState => !prevState);

    }

    return <>
        <Pressable onPress={ () => {
            if (item !== undefined) {
                showModal();
            }


        } }>
            <View style={style}>
                <Text style={textStyle}>{title}</Text>
            </View>
        </Pressable>

        <ModalComponent
            item={item}
            deleteTask={deleteTask}
            onUpdateTask={onUpdateTask}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
        />


    </>
};

export default TaskItem;