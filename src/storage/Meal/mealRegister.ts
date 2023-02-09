import AsyncStorage from "@react-native-async-storage/async-storage";
// appError faltando

import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from './MealStorageDTO';
import { mealGetAll } from "./mealGetAll";

export async function mealRegister(newMeal: MealStorageDTO, day: string){
  try{

    
    await AsyncStorage.setItem(`${MEALS_COLLECTION}-${day}`, '');

  }catch(error){
    throw(error);
  }
}