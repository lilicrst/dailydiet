import AsyncStorage from "@react-native-async-storage/async-storage";

import { DAYS_COLLECTION } from './../storageConfig';
import { mealGetByDay } from "./../Meal/mealGetByDay";
import { daysGetAll } from "./daysGetAll";

export async function dayEmptyRemove(day:string) {
  try {
    const storedMeals = await mealGetByDay(day);

    if(storedMeals.length === 0) {
      
      const storedDays = await daysGetAll();
      const filtered = storedDays.filter(notEmpytDay => notEmpytDay !== day);
      const days = JSON.stringify(filtered);

      await AsyncStorage.setItem(DAYS_COLLECTION, days);
    } else {
      // nada
    }
    
  } catch (error) {
    throw error;
  }
}