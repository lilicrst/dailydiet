import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function mealRegister(newMealName: string){
  try{

    const storedMeals = await mealGetAll();

    const storage = JSON.stringify([...storedMeals ,newMealName]);
    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  }catch(error){

  }
}