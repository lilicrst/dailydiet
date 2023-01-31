import { Container, Divider, Hour, Meal, Status } from "./styles";

type Props = {
  hour: string;
  meal: string;
  status?: boolean;
}

export function MealTicket({ hour, meal, status}: Props){
  return(
    <Container>
      <Hour>
        {hour}
      </Hour>
      <Divider />
      <Meal>
        {meal}
      </Meal>
      <Status />
    </Container>
  );
}