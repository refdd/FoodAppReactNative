import React from "react";
import { View, Text, StyleSheet ,TouchableOpacity  , Platform , TouchableNativeFeedback} from "react-native";
function CategoryGridTile({onAyhaga , title , color}) {
    let TouchableCom= TouchableOpacity;
    if(Platform.OS === "android" && Platform.Version >= 21 ){
        TouchableCom = TouchableNativeFeedback;
    }
  return (
<View  style={styles.gridItem}>
<TouchableCom 
   style={{flex: 1}}
    onPress={onAyhaga}>
      <View style={{ ...styles.container , ...{backgroundColor:color}}} >
        <Text style={styles.title} numberOfLines={2} >{title}</Text>
      </View>
    </TouchableCom>
</View>
    
  );
}
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius:10 ,
        overflow: "hidden"
      },
      container:{
        flex: 1,
        borderRadius: 10,
        shadowColor:"black",
        shadowOpacity: 0.25,
        shadowOffset:{width: 0, height:2},
        shadowRadius: 10,
        elevation: 3,
        padding:15,
        justifyContent:"flex-end",
        alignItems: "flex-end",
        
      },
      title:{
        fontSize:22  ,
        textAlign: "right",      
      }

});
export default CategoryGridTile;
