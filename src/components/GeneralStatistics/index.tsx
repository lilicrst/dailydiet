import { Container, Percentage, Subtitle } from "./styles";

type Props = {
  percentage: number | string;
}

export function GeneralStatistics({percentage}: Props) {

  return (
    <Container>            
        <Percentage>
          {percentage}
        </Percentage>
        <Subtitle>
          das refeições dentro da dieta
        </Subtitle>      
    </Container>
  )
}