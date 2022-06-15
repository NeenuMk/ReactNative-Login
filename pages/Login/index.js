import {
  View, Text, TouchableOpacity, TextInput,
  StyleSheet, SafeAreaView, Dimensions, Platform, StatusBar, Image,
} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {loginFailed, loginTriggered} from './action'

const { height } = Dimensions.get("screen")

const Login = ({navigation}) => {
  var { SocialIcon } = require('react-social-icons');
  console.log(height);
  console.log(StatusBar.currentHeight);

  const[states,setStates] = React.useState({userName:"",password:""});
const loginStatus = useSelector((store) => store.loginState);

console.log(loginStatus);
const dispatch = useDispatch();
const login =() =>{
  if(states.userName === "Abc" && states.password === "123"){
    dispatch(loginTriggered());
      navigation.navigate("profile")
  }
  else{
    dispatch(loginFailed());
  }
  
}
// const login =() =>{  
//     dispatch(loginTriggered(states))
//     .then((res) => {
//       console.log(res);
//     }) 
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(()=>{
//       console.log("COMPLETED");
//     })
// }

  return (
    <SafeAreaView style={{ backgroundColor: "cyan", flex: 1 }}>
      {/* <StatusBar background="#fff"> */}
      <View style={style.container}>
        <View style={{
          marginHorizontal: 20,
          alignItems: "center"
        }}>
          <Text style={{
            fontWeight: "700",
            fontSize: 30,
            color: "#545151",
            marginTop: 40,
          }}>Welcome Back</Text>
          <Text
            style={{ fontSize: 13, fontWeight: "300", textAlign: "center", color: "#000000", paddingTop: 10, marginHorizontal: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas mi non sed ut odio. Non, justo, sed facilisi et.

          </Text>

        </View>
        <View style={{
          marginHorizontal: 20, justifyContent: "center", marginTop: 30, width: 339,
          height: 59,
          background: "#F3F3F3",
          boxShadow: "0px 2px 1px rgba(0, 0, 0, 0.12)",
          borderRadius: 15
        }}>
          <TextInput
            style={style.input}
            placeholder="Username , Email & Phone Number"
            onChangeText={(e) => setStates({...states,userName:e})}
          />

        </View>
        <View style={{
          marginHorizontal: 20, justifyContent: "center", width: 339, marginVertical: 10,
          height: 59,
          background: "#F3F3F3",
          boxShadow: "0px 2px 1px rgba(0, 0, 0, 0.12)",
          borderRadius: 15
        }}>
          <TextInput
            style={style.input}
            placeholder="Password"
            onChangeText={(e) => setStates({...states,password:e})}
          />
        </View>
        <View style={{
          marginHorizontal: 20, justifyContent: "center", width: 339,

        }}>
          <TouchableOpacity
          >
            <Text style={{
              textAlign: "right", color: "#2D2626", fontWeight: "500", fontSize: 15,marginRight:12
            }}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 20, flexDirection: "row", alignItems: "flex-end" }}>
          <TouchableOpacity style={style.button1} onPress={login}
          >
            <Text style={{
              fontWeight: "700",
              fontSize: 22,
              color: "#fff"
            }}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          marginHorizontal: 20, justifyContent: "center", width: 339
        }}>
          {/* <View style={{
              borderColor: "#F89AEE",
              borderWidth: 1,
              width:'80%'
            }}></View> */}
          <View>
            <Text style={{
              fontWeight: "500",
              fontSize: 12,
              color: "#555252",
              textAlign: "center",
              // marginTop:-12,
              
            }}>Or SignUp With</Text>
          </View>
        </View>
        <View style={{
          height: 120, flexDirection: "row", alignItems: "flex-end", paddingVertical: 40,
          justifyContent: "center"
        }}>
          <TouchableOpacity style={style.button2}
          >
            <SocialIcon url="https://www.google.com" style={{ height: 25, width: 25 }} />
          </TouchableOpacity>
          <TouchableOpacity style={style.button2}
          >
            <SocialIcon network="facebook" style={{ height: 25, width: 25 }} />
          </TouchableOpacity>
          <TouchableOpacity style={style.button2}
          >
            <SocialIcon network="pinterest" style={{ height: 25, width: 25 }} />
          </TouchableOpacity>
        </View>
      </View>
      {/* </StatusBar> */}
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  title: {
    fontSize: 12,
    color: "#000",
  },
  logo: {
    height: "85%",
    width: "85%",
  },
  button1: {
    backgroundColor: "#F89AEE",
    height: 50,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 10
  },
  button2: {
    backgroundColor: "#ECE9EC",
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginHorizontal: 10
  },
  input: {
    fonFamily: 'Outfit',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 19,
    color: "#666161",
    paddingHorizontal: 20,
    paddingVertical: 10,
    border: 'none',
    outline: 'none !important',
  },
  

})

export default Login;