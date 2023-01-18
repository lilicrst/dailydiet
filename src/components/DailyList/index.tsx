import { MealTicket } from "@components/MealTicket";
import { Container, Date } from "./styles";

type Props = {
  date: string;
}

export function DailyList({ date }: Props){
  return(
    <Container>
      <Date>
        {date}
      </Date>
      <MealTicket hour="12:00" meal="Arroz com batata e Peixe"/>
      <MealTicket hour="15:30" meal="Banana frita"/>
      <MealTicket hour="19:45" meal="Salada com Frango"/>
    </Container>
  );
}