import AsyncStorage from "@react-native-async-storage/async-storage";
// appError faltando

import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from './MealStorageDTO';
import { mealGetByDay } from "./mealGetByDay";

export async function mealRegister(newMeal: MealStorageDTO, day: string){
  try{

    const storedMeals = await mealGetByDay(day);

    const storage = JSON.stringify([...storedMeals, newMeal])
    
    await AsyncStorage.setItem(`${MEALS_COLLECTION}-${day}`, storage);

  }catch(error){
    throw(error);
  }
}