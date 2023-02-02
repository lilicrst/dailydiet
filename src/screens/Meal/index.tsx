import { Container, DateAndHour, Description, LegendMarker, Marker, MealName } from './styles'
import { SlidingScreen } from '@screens/NewMeal/styles'
import { BackButton } from '@components/BackButton'
import { HeaderTitle } from '@components/HeaderTitle'
import { Icon } from '@components/MiniButton/styles'

export function Meal() {
  return (
    <Container>
      <BackButton />
      <HeaderTitle title='Refeição' />

      <SlidingScreen>
        <MealName>
          Sanduíche
        </MealName>
        <Description>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Description>

        <DateAndHour>
          Data e hora
        </DateAndHour>
        <Description>
          12/08/2022 às 16:00
        </Description>
        <Marker>
          <Icon type='YES'/>
          <LegendMarker>dentro da dieta</LegendMarker>
        </Marker>
      </SlidingScreen>

    </Container>
  );
}