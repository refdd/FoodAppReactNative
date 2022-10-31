
 import React from 'react'
 import {HeaderButton} from "react-navigation-header-buttons";
 import {Ionicons} from "@expo/vector-icons"
 import {} from "react-native-vector-icons"
import  Colors  from '../constants/Colors';
import { Platform } from 'react-native';
 function CostomHeaderButton(props) {
   return (
<HeaderButton
{...props}
IconComponent={Ionicons}
iconSize={24}
color={ Platform.OS ==  "android" ?"#fff" :  Colors.primaryColor}
/>
   )
 }
 
 export default CostomHeaderButton