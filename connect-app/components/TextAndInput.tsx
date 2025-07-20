import {StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";
import {InputModeOptions} from "react-native/Libraries/Components/TextInput/TextInput";

type Props = {
    Icon : React.ComponentType<any>;
    label : string;
    placeholderText : string;
    type?: InputModeOptions;

}

export default function TextAndInput({ Icon, label="label", placeholderText="text", type="text" } : Props) {
    return (
        <View style={{
            paddingTop: 20,
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15
            }}>
                <Icon style={{
                    color: "rgb(22, 34, 47 )"
                }}   />

                <Text style={{
                    fontSize: 17,
                    fontWeight: "semibold",
                    color: "rgb(22, 34, 47 )",
                    paddingLeft: 10
                }}>
                    {label}
                </Text>
            </View>


            <TextInput
                style={styles.input}
                placeholder={placeholderText}
                inputMode={type}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        padding: 10,
        borderRadius: 20,
        backgroundColor: "white",
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        height: 50,
        elevation: 5,
        shadowColor: '#171717',
        shadowRadius: 20,
    }
})
