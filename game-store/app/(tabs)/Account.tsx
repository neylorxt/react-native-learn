import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.text, {
                    fontWeight: "bold"
                }]}>Edit Profile</Text>

                <View style={styles.headerLogo}>
                    <Image
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/9203/9203764.png",
                            width: 100,
                            height: 100
                        }}
                    />
                </View>


            </View>


            {/* Form END  */}
            <ScrollView
                showsHorizontalScrollIndicator={false}
                style={styles.form}>

                {/* Form Input  */}
                <View style={styles.formInput} >

                    <View style={styles.viewInput}>
                        <Text style={styles.inputText}>Full Name</Text>

                        <TextInput style={styles.input} placeholder="Full Name" autoComplete="name" />
                    </View>



                    <View style={styles.viewInput}>
                        <Text style={styles.inputText}>Email</Text>

                        <TextInput style={styles.input} placeholder="Email" autoComplete="email" />
                    </View>


                    <View style={styles.viewInput}>
                        <Text style={styles.inputText}>Phone Number</Text>

                        <TextInput style={styles.input} placeholder="Phone Number" autoComplete="tel" />
                    </View>



                    <View style={styles.viewInput}>
                        <Text style={styles.inputText} >Password</Text>

                        <TextInput style={styles.input} placeholder="******" />
                    </View>



                    <View style={styles.viewInput}>
                        <Text style={styles.inputText}>Language Preference</Text>

                        <TextInput style={styles.input} placeholder="Language Preference" value="English" />
                    </View>

                </View>
                {/* Form Input END */}



                {/* Button  */}
                <Pressable style={styles.inputButton} >
                    <Text style={[styles.text, styles.inputButton_Text]} >Save Changes</Text>
                </Pressable>



            </ScrollView>

            {/* Form END  */}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "rgb(51, 51, 51)"
    },

    container: {
        flex: 1,
        backgroundColor: "rgb(230, 230, 230)",
        paddingTop: 30
    },

    header: {
        alignItems: "center"
    },
    headerLogo: {
        //borderWidth: 1,
    },


    //FORM
    form: {
        height: "auto",
        marginHorizontal: 10,
        padding: 2,
        marginTop: 15
    },
    formInput: {
        backgroundColor: "whitesmoke",
        padding: 15,
        borderRadius: 10
    },
    viewInput: {
        marginBottom: 20
    },
    inputText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "rgb(80, 80, 80)",
        marginBottom: 10
    },
    input: {
        borderWidth: 1.5,
        borderEndColor: "grey",
        borderRadius: 6,
        borderColor: "grey",
        paddingHorizontal: 10,
        fontWeight: "bold",
        shadowColor: "black",
    },
    inputButton: {
        borderWidth: 1,
        borderColor: "grey",
        padding: 10,
        borderRadius: 20,
        backgroundColor: "rgb(24, 144, 255)",
        marginTop: 15
    },
    inputButton_Text: {
        textAlign: "center",
        fontSize: 16,
        color: "white"
    }

})