import AsyncStorage from "@react-native-async-storage/async-storage";

import { DAYS_COLLECTION } from "@storage/storageConfig";

export async function daysGetAll(){

  try {

    const storage = await AsyncStorage.getItem(DAYS_COLLECTION);

    const days: string[] = storage ? JSON.parse(storage) : [];
  
    return days;
    
  } catch (error) {
    throw error;
  }
}