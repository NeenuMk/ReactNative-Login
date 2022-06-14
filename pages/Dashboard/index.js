import { Text, View } from 'react-native'
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Icon } from 'react-native-elements';
const Tab = createBottomTabNavigator();

const Dashboard = () => {

    return (
      <Tab.Navigator>
      <Tab.Screen name="notifications" component={Notifications} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
    )
  
}

export default Dashboard;