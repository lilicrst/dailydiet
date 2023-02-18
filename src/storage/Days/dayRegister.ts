import AsyncStorage from "@react-native-async-storage/async-storage";

import { DAYS_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { daysGetAll } from "./daysGetAll";

export async function dayRegister(newDate: string) {
  try {

    const storedDays = await daysGetAll();

    const dayAlreadyRegistered = storedDays.filter(day => day === newDate);

    if (dayAlreadyRegistered.length > 0) {      
      // o usuário não precisa saber
    } else {
      const storage = JSON.stringify([...storedDays, newDate]);
      await AsyncStorage.setItem(DAYS_COLLECTION, storage);
    }

  } catch (error) {
    throw (error)
  }
}