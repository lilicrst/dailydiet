import { BackButton } from "@components/BackButton";
import { DetailsCard } from "@components/DetailsCard";
import { GeneralStatistics } from "@components/GeneralStatistics";
import { Container, InfoChart, Title } from "./styles";

export function Statistics(){
  return(
    <Container>
      <BackButton />
      <GeneralStatistics percentage="80%"/>
      <InfoChart>
        <Title>
          Estatísticas gerais
        </Title>
        <DetailsCard />
        <DetailsCard />
      </InfoChart>
    </Container>
  );
}