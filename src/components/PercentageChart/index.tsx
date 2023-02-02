import { GeneralStatistics } from "@components/GeneralStatistics";
import { Container, Icon } from "./styles";

export function PercentageChart() {
  return (
    <Container>
      <Icon 
        name="arrow-up-right"
      />
      <GeneralStatistics percentage="63,8%" />
    </Container>
  )
}