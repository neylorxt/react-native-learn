import {Text, View, StyleSheet, KeyboardAvoidingView, Platform, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import {IconMail, IconPassword, IconUser, IconGoogle, IconApple, IconFacebook} from "@/components/icons";
import TextAndInput from "@/components/TextAndInput";
import Checkbox from 'expo-checkbox';
import {useState} from "react";
import {Link} from "expo-router";


export default function Register() {
    const [isChecked, setChecked] = useState(false);

  return (
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
      <SafeAreaView>

          <View style={{
              height: "100%",
              backgroundColor: "whitesmoke",
          }}>
              {/*Header*/}
              <View style={{
                  height: "25%",
                  alignItems: "center",
                  justifyContent: "center",
              }}>
                  <Image source={ require('@/assets/icons/register-icon.jpg') }
                      style={{
                      width: 100,
                      height: 100,
                      borderRadius: 100,
                      backgroundColor: "darkslateblue",
                      padding: 10,
                      marginHorizontal: "auto",
                      marginTop: 20,
                      marginBottom: 20
                  }} />

                  <Text style={{
                      fontSize: 30,
                      fontWeight: 'bold'
                  }}>
                      Sign Up for Free
                  </Text>

              </View>
              {/*Header END*/}



              {/*BODY*/}
              <View style={{
                  height: "75%",
                  paddingHorizontal: 20,
              }}>


                  <View>

                      <TextAndInput
                          Icon={ IconUser }
                          placeholderText={"Full Name"}
                          label={"Full Name"}
                          type={"text"}
                      />

                      <TextAndInput
                          Icon={ IconMail }
                          label={"Email Address"}
                          placeholderText={"Email"}
                          type={"email"}
                      />

                      <TextAndInput
                          Icon={ IconPassword }
                          placeholderText={"Password"}
                          label={"Password"}
                          type={"text"}
                      />




                      <View style={{
                          marginTop: 20,
                          flexDirection: 'row',
                          gap: 10
                      }}>
                          <Checkbox
                              value={isChecked}
                              onValueChange={setChecked}
                              color={isChecked ? '#4630EB' : undefined}
                          />

                          <Text>
                              I agree to the <Text style={{
                                  color: "darkslateblue",
                                  fontWeight: "bold"
                              }}>
                                   Terms & Conditions
                              </Text>
                          </Text>
                      </View>

                  </View>



                  <View style={{
                      width: "100%",
                      marginHorizontal: "auto",
                      padding: 10,
                      borderRadius: 30,
                      backgroundColor: "darkslateblue",
                      marginTop: 20,
                      elevation: 2
                  }}>

                      <Link href={"/Login"} style={{
                          fontWeight: 'bold',
                          textAlign: 'center',
                          color: "whitesmoke"
                      }}>
                          Create Account
                      </Link>
                  </View>



                  {/*BODY FOOTER*/}

                  <View style={{
                      height: 100,
                  }}>

                      <View style={{
                          marginTop: 10,
                          padding: 10
                      }}>
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                              <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
                                <Text style={{ marginHorizontal: 8, color: '#999' }}>Or Continue With</Text>
                              <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
                          </View>


                          <View style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              marginVertical: 10,
                              justifyContent: "center",
                              gap: 10
                          }}>
                              <IconGoogle />
                              <IconApple />
                              <IconFacebook />
                          </View>


                          <View style={{ marginTop: 10, marginHorizontal: "auto" }} >
                              <Text style={{
                                  fontSize: 17,
                              }} >
                                  Already have a account? <Link href={"/Login"} style={{ color: "blue" }} >Login</Link>
                              </Text>
                          </View>

                      </View>

                  </View>

              </View>
              {/*BODY END*/}

          </View>

      </SafeAreaView>
      </KeyboardAvoidingView>

  );
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
        shadowRadius: 3,
    }
})
