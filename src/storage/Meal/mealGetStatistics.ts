import { daysGetAll } from "@storage/Days/daysGetAll";
import { mealGetByDay } from "./mealGetByDay";

export async function mealGetStatistics() {
  try {
    const storedDays = await daysGetAll();

    let allMeals = 0;
    let goodMeals = 0;
    let badMeals = 0;

    for (let i = 0; i < storedDays.length; i++) {
      const day = storedDays[i];

      const storedMeals = await mealGetByDay(day);

      for (let j = 0; j < storedMeals.length; j++) {
        allMeals = allMeals + 1;

        if (storedMeals[j].status) {
          goodMeals = goodMeals + 1;
        } else {
          badMeals = badMeals + 1;
        }
      }      
    }

    const statistics = {
      all: allMeals,
      good:goodMeals,
      bad: badMeals,
      goodPercentage: (100 * goodMeals) / allMeals,
    }

    return statistics;
  
  } catch (error) {
    throw error
  }
}