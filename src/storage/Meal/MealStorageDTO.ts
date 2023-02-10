export type MealStorageDTO = {
  title: string,
  data:
  {
    name: string;
    description: string;    
    hour: string;
    status: boolean;
  },
}


// type MealListProps = {
//   title: string,
//   data:
//   {
//     hour: string,
//     meal: string,
//     status: boolean,
//   }[],
// }