import {Text, View, KeyboardAvoidingView, Platform, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import {IconApple, IconFacebook, IconGoogle, IconMail, IconPassword} from "@/components/icons";
import TextAndInput from "@/components/TextAndInput";
import {Link} from "expo-router";


export default function Login() {

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
                  <Image source={ require('@/assets/icons/login-icon.png') }
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
                      Login in your account
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
                          Login
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


                          <View style={{ marginTop: 10 }} >
                              <Text style={{
                                  fontSize: 17,
                                  marginTop: 10,
                                  textAlign: 'center'
                              }} >
                                  Don't have an account? <Link href={"/Register"} style={{ color: "blue" }} >Register</Link>
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