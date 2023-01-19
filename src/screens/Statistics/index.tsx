import { BackButton } from "@components/BackButton";
import { GeneralStatistics } from "@components/GeneralStatistics";
import { Container } from "./styles";

export function Statistics(){
  return(
    <Container>
      <BackButton />
      <GeneralStatistics percentage="80%"/>
    </Container>
  );
}