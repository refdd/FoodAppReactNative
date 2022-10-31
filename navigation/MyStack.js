// // // import { createAppContainer } from 'react-navigation';
// // // import { createStackNavigator } from 'react-navigation-stack';
// // // import CatergoriesScreen from "../screens/CatergoriesScreen";
// // // import CategoryMealScreen from "../screens/CategoryMealScreen";
// // // import MealDetailScreen from "../screens/MealDetailScreen";
// // // import { Platform } from 'react-native';
// // // import Colors from "../constants/Colors"
// // // const MealsNavigator = createStackNavigator({
// // //   Categries: {
// // //     screen: CatergoriesScreen ,
// // //     navigationOptions:{
// // //       headerTitle: 'Meals Category'
// // //     }
// // //   },
// // //   CategoryMeal: {
// // //     screen: CategoryMealScreen,
  
// // //   },
// // //   MealDetail: {
// // //     screen: MealDetailScreen ,
// // //   },
// // // },{
// // //   initialRouteParams:"CatergoriesScreen",
// // //   defaultNavigationOptions:{
// // //     headerStyle: {
// // //       backgroundColor:Platform.OS === 'android' ? Colors.primaryColor :"" ,
// // //     },
// // //     headerTintColor: Platform.OS ==="android" ?    'white' :    Colors.primaryColor,
// // //   }
// // // });

// // // export default createAppContainer(MealsNavigator);

// // import React from 'react';
// // import {NavigationContainer} from '@react-navigation/native';
// // import {createStackNavigator} from '@react-navigation/stack';
// // import CatergoriesScreen from "../screens/CatergoriesScreen";
// // import CategoryMealScreen from "../screens/CategoryMealScreen";
// // import MealDetailScreen from "../screens/MealDetailScreen";

// // const AuthenticationStack = createStackNavigator();

// // const AuthenticationStackNavigator = () => {
// //     return(
// //         <AuthenticationStack.Navigator>
// //             <AuthenticationStack.Screen name="CatergoriesScreen" component = {CatergoriesScreen}/>
// //             <AuthenticationStack.Screen name="CategoryMealScreen" component = {CategoryMealScreen} />
// //         </AuthenticationStack.Navigator>
// //     )
// // }
// // export default AuthenticationStackNavigator
// import React from 'react';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import CategoryMealScreen from '../screens/CategoryMealScreen';
// const Stack = createNativeStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="CategoryMealScreen" component={CategoryMealScreen} />
//     </Stack.Navigator>
//   );
// }
// export default MyStack