import { BackButton } from "@components/BackButton";
import { DetailsCard } from "@components/DetailsCard";
import { DetailsMiniCard } from "@components/DetailsMiniCard";
import { GeneralStatistics } from "@components/GeneralStatistics";
import { Column, Container, InfoChart, Title } from "./styles";

export function Statistics() {
  return (
    <Container>
      <BackButton />
      <GeneralStatistics percentage="80%" />
      <InfoChart>
        <Title>
          Estatísticas gerais
        </Title>
        <DetailsCard number="55" description="melhor sequência de pratos detro da dieta" />
        <DetailsCard number="109" description="refeições registradas" />
        <Column>
          <DetailsMiniCard number="61" description="refeições dentro da dieta" />
          <DetailsMiniCard number="48" description="refeições fora da dieta" />
        </Column>
      </InfoChart>
    </Container>
  );
}