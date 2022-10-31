import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MealItem from './MealItem';

function MealList({displayMeals , navigation}) {
    
    const renderMeals = (itemData) => {
        return (
          <MealItem
          image={itemData.item.imageUrl}
            itemData={itemData}
            onSelectDetales={() => {
              navigation.navigate("MealDetailScreen", {
                MealId: itemData.item.id
              });
            }}
          />
        );
      };
  return (
<View style={styles.screen}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMeals}
      style={{width: '90%'}}
     />
    </View>
  )
}
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default MealList