import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CatergoriesScreen from "../screens/CatergoriesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FavoritesNavgetion from './FavoritesNavgetion';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

function MyTabs() {
    const Tab = createBottomTabNavigator();
    const stylesNavigator = {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        tabBarActiveTintColor:Colors.accentColor,
    }
    return (
        <Tab.Navigator  screenOptions={stylesNavigator} >
          <Tab.Screen name="All" options={{
           
            tabBarIcon:(tabs)=> (
              <Ionicons name="md-restaurant" size={24} color={tabs.color} /> 
            )
          }} component={CatergoriesScreen} />
          <Tab.Screen name="Fites"
           options={{
           headerShown:false,
            tabBarLabel: 'Favorites',
            tabBarIcon:(tabs)=> (
              <Ionicons name="md-star" size={24} color={tabs.color} /> 
            )
          }}
           component={FavoritesNavgetion} />
        </Tab.Navigator>
      );
}

export default MyTabs