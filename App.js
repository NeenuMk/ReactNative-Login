import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Profile from './pages/profile';
import { Provider } from 'react-redux';
import store from './Store';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="landing">
        <Stack.Screen name="landing" component={Landing}
          options={{
            headerShown: false,
            headerTitle: 'sample text'
          }} />
        <Stack.Screen name="login" component={Login}
          options={{
            headerShown: false,
            headerTitle: 'sample text'
          }} />
        <Stack.Screen name="profile" component={Profile} 
         options={{
          headerShown: false,
          headerTitle: 'sample text'
        }}/>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const WrapperApp = () => {
  return (
    <>
    <Provider store={store}>
      <App />
    </Provider>
    </>
  )
}

export default WrapperApp

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});