import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealStorageDTO } from './MealStorageDTO'

import { MEALS_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

export async function mealGetByDay(day: string) {

  try {

    if (day.length < 3) {
      throw new AppError('Não foi possível buscar essa refeição nessa data.')
    }

    const storage = await AsyncStorage.getItem(`${MEALS_COLLECTION}-${day}`);

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];
  
    return meals;
    
  } catch (error) {
    throw error;
  }
}