import React from "react";
import CategoryGridTile from "../components/CategoryGridTile";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
function CatergoriesScreen({ navigation }) {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
      onAyhaga={() =>
          navigation.navigate("CategoryMealScreen", {
            categoriyId: itemData.item.id,
          })
        }
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CatergoriesScreen;
