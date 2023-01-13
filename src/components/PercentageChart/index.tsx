import { Container, Percentage, Subtitle, Icon, Label } from "./styles";

export function PercentageChart() {
  return (
    <Container>
      <Icon />
      <Label>
        <Percentage>
          90,86%
        </Percentage>
        <Subtitle>
          das refeições dentro da dieta
        </Subtitle>
      </Label>
    </Container>
  )
}