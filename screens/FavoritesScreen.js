import React from 'react'
import { Text, View } from 'react-native'
import MealItem from '../components/MealItem'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'

function FavoritesScreen( {navigation}) {
  const favMeals= MEALS.filter(meal => meal.id === "m1" || meal.id === "m2" )
  return (
   <MealList displayMeals={favMeals} navigation ={navigation}/>
  )
} 

export default FavoritesScreen