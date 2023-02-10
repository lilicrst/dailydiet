import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealStorageDTO } from './MealStorageDTO'

import { MEALS_COLLECTION } from "@storage/storageConfig";

export async function mealGetByDay(day: string) {

  try {

    const storage = await AsyncStorage.getItem(`${MEALS_COLLECTION}-${day}`);

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];
  
    return meals;
    
  } catch (error) {
    throw error;
  }
}