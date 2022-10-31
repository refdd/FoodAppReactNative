import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { View } from 'react-native'
const Stack = createNativeStackNavigator();

function FavoritesNavgetion() {
  return (
   
    <Stack.Navigator  >

      <Stack.Screen name="Favorites"component={FavoritesScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />

    </Stack.Navigator>
  
  )
}

export default FavoritesNavgetion