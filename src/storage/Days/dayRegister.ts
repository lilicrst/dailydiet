import AsyncStorage from "@react-native-async-storage/async-storage";
// appError faltando

import { DAYS_COLLECTION } from "@storage/storageConfig";
import { daysGetAll } from "./daysGetAll";

export async function dayRegister(newDate: string){
  try{

    const storedDays = await daysGetAll();

    const storage = JSON.stringify([...storedDays ,newDate]);
    await AsyncStorage.setItem(DAYS_COLLECTION, storage);
  }catch(error){

  }
}