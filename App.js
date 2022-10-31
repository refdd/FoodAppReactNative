import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoryMealScreen from "./screens/CategoryMealScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MyTabs from "./components/MyTabs";
import Colors from "./constants/Colors"
const Stack = createNativeStackNavigator();
const stylesNavigator = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor:
    Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  
}

export default function App() {
  return(
    <NavigationContainer>
    <Stack.Navigator   screenOptions={stylesNavigator} >

      <Stack.Screen name="Meal Carergorys" options={{headerShown: false}}   component={MyTabs} />
      <Stack.Screen name="CategoryMealScreen" component={CategoryMealScreen} />
      <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  ) 
}

