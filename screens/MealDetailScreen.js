import React, { useEffect } from 'react'
import{ View  , Text , Button} from "react-native"
import { log } from 'react-native-reanimated';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CATEGORIES ,MEALS } from '../data/dummy-data';
import  HeaderButton  from '../components/HeaderButton';
function MealDetailScreen({ navigation , route}) {
  const { MealId } = route.params;
  const  sigilMeal = MEALS.find((item) => item.id === MealId) 
         useEffect(() => {
        navigation.setOptions({
          title: sigilMeal.title,
          

          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item title="Fovorite" iconName="ios-star" onPress={() => alert('search')} />
            </HeaderButtons>
          ),
        });
      }, [ navigation, MealId]);

  return (
    <View>
      <Text>{sigilMeal.title}</Text>
      <Button title='got to frist screen ' onPress={()=>{
         navigation.popToTop();
      }}/>
    </View>
  )
}

export default MealDetailScreen