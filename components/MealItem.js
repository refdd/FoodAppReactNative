import React from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ImageBackground
} from "react-native";
import { color } from "react-native-reanimated";
function MealItem({ itemData,onSelectDetales , image}) {
  let TouchableCom = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCom = TouchableNativeFeedback;
  }
  // console.log(itemData.item.imageUrl)
  return (
    <View style={styles.itemMeal}>
        <TouchableCom onPress={onSelectDetales}>
      <View>
        <View  style={{...styles.rowMeal , ...styles.MealHeader} } >
          <ImageBackground source={{uri:image}} style={styles.bgImage}>
           <View style={styles.titleContainer}>

          <Text style={styles.title} numberOfLines={1}> {itemData.item.title} </Text>
           </View>
          </ImageBackground>
        </View>
        <View  style={{...styles.rowMeal , ...styles.MealDetails} } >
       <Text>{itemData.item.duration} m</Text>
       <Text>{itemData.item.complexity.toUpperCase()} </Text>
       <Text>{itemData.item.affordability.toUpperCase()} </Text>

        </View>
      </View>
    </TouchableCom>
    </View>
  );
}
const styles = StyleSheet.create({
    itemMeal:{
        height:200,
        width:"100%",
        backgroundColor:"#f5f5f5",
        borderRadius:10,
        overflow:"hidden",
    }
    ,
    rowMeal:{
        flexDirection: 'row',
    },
    MealHeader:{
        height:"85%"
    },
    MealDetails:{
        paddingHorizontal:10,
        justifyContent:"space-between",
        alignItems: 'center',
        height:"15%",
    },
    bgImage : {
    width:"100%",
    height:"100%",
    justifyContent:"flex-end",
    },
    titleContainer:{ 
      paddingVertical:5,
      backgroundColor:"rgba(0, 0, 0, 0.5)",
      paddingHorizontal:12,
    }
    ,

    title:{
      fontSize:22 ,
      color:"white",
    
      textAlign:"center", 
    }
});
export default MealItem;
