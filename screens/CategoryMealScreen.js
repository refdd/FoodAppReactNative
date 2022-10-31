import React, { useEffect } from "react";
import { View, StyleSheet, Button, FlatList, Text } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
function CategoryMealScreen({ navigation, route }) {
  const { categoriyId } = route.params;
  const selectedCategory = CATEGORIES.find((c) => c.id === categoriyId);
  const displayMeals = MEALS.filter(
    (item) => item.categoryIds.indexOf(categoriyId) >= 0
  );
 
  // console.log(displayMeals);
  useEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, [categoriyId]);
  return (
   <MealList displayMeals={displayMeals} navigation={navigation} />
  );
}



export default CategoryMealScreen;
