import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TopBar from './TopBar';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{width: '100%', height: '1000%'}}>
        <Text style={{color: 'white'}}>NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
      </View>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}

function LilsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lils!</Text>
    </View>
  );
}

function ActivityScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Activity!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <TopBar></TopBar>
      <Tab.Navigator>
        <Tab.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Tab.Screen options={{headerShown: false}} name="Search" component={SearchScreen} />
        <Tab.Screen options={{headerShown: false}} name="Lils" component={LilsScreen} />
        <Tab.Screen options={{headerShown: false}} name="Activity" component={ActivityScreen} />
        <Tab.Screen options={{headerShown: false}} name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}