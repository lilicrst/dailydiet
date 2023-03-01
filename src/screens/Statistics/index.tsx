import { useEffect, useState } from "react";

import { mealGetStatistics } from "@storage/Meal/mealGetStatistics";

import { BackButton } from "@components/BackButton";
import { DetailsCard } from "@components/DetailsCard";
import { DetailsMiniCard } from "@components/DetailsMiniCard";
import { GeneralStatistics } from "@components/GeneralStatistics";

import { Column, Container, InfoChart, Title } from "./styles";
import { MealStatisticsDTO } from "@storage/Meal/MealStatisticsDTO";

export function Statistics() {

  const [statistics, setStatistics] = useState<MealStatisticsDTO>();

  async function getStatistics(){
    const numbers = await mealGetStatistics();
    setStatistics(numbers);
  }

  useEffect(() => {
    getStatistics();
    console.log(statistics?.status)
  }, [])

  // TODO
  // nã tá pegando o status direito.

  return (
    <Container isInsideTheDiet={statistics?.status} >
      <BackButton />
      <GeneralStatistics percentage={statistics ? statistics.goodPercentage.toFixed(2) + '%' : 0 + '%'} />
      <InfoChart>
        <Title>
          Estatísticas gerais
        </Title>
        <DetailsCard number={0} description="melhor sequência de pratos detro da dieta" />
        <DetailsCard number={statistics?.all} description="refeições registradas" />
        <Column>
          <DetailsMiniCard number={statistics?.good} description="refeições dentro da dieta" />
          <DetailsMiniCard number={statistics?.bad} description="refeições fora da dieta" />
        </Column>
      </InfoChart>
    </Container>
  );
}