import { Container, Divider, Hour, Meal } from "./styles";

export function MealTicket(){
  return(
    <Container>
      <Hour>
        19:15
      </Hour>
      <Divider />
      <Meal>
        Salada com frango
      </Meal>
    </Container>
  );
}