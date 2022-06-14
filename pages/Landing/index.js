import {
  View, Text, TouchableOpacity, TextInput,
  StyleSheet, SafeAreaView, Dimensions, Platform, StatusBar, Image
} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
const { height } = Dimensions.get("screen")

const Landing = () => {
  console.log(height);
  console.log(StatusBar.currentHeight);
  const state = useSelector((state) => state.specificProfile)
  return (
    <SafeAreaView style={{ backgroundColor: "cyan", flex: 1 }}>
      {/* <StatusBar background="#fff"> */}
      <View style={style.container}>
        <View style={{
          backgroundColor: '#F89AEE',
          height: height / 2,
          borderRadius: 20,
          marginHorizontal: 20,
          alignItems: "center"
        }}>
          <Image
            style={style.logo}
            source={require('../../assets/img1.png')}></Image>
        </View>
        <View style={{ flex: 1, marginHorizontal: 20, justifyContent: "center" }}>
          <Text style={{ fontSize: 30, fontWeight: "700", textAlign: "center", color: "#464444" }}>
            Discover Your Own Dream House
          </Text>
          <Text
            style={{ fontSize: 13, fontWeight: "300", textAlign: "center", color: "#000000", paddingTop: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas mi non sed ut odio. Non, justo, sed facilisi et. Eget viverra urna, vestibulum egestas faucibus egestas. Sagittis nam velit volutpat eu nunc.

          </Text>
        </View>
        <View style={{ height: 120, flexDirection: "row", alignItems: "flex-end" ,paddingVertical:40}}>
          <TouchableOpacity style={style.button1}
          >
            <Text style={{
              fontWeight: "700",
              fontSize: 22,
              color: "#fff"
            }}>SignIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button2}
          >
            <Text style={{
              fontWeight: "700",
              fontSize: 22,
              color: "#545151"
            }}>Register</Text>
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
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  button2: {
    backgroundColor: "#F3F3F3",
    height: 50,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  }

})

export default Landing;