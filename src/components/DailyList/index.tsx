import { MealTicket } from "@components/MealTicket";
import { Container, Date } from "./styles";

export function DailyList(){
  return(
    <Container>
      <Date>
        15.01.23
      </Date>
      <MealTicket />
    </Container>
  );
}