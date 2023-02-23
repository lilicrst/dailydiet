import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION } from './../storageConfig';
import { mealGetByDay } from "./mealGetByDay";

export async function mealRemoveByDay(key: string, day: string) {
  try {
    const storage = await mealGetByDay(day);
    const filtered = storage.filter(meal => meal.key !== key);
    const meals = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${MEALS_COLLECTION}-${day}`, meals);
  } catch (error) {
    throw error;
  }
}