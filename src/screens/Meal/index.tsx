import { useRoute } from '@react-navigation/native'

import { BoxButton, Container, DateAndHour, Description, LegendMarker, Marker, MealName, Separator } from './styles'

import { SlidingScreen } from '@screens/NewMeal/styles'
import { BackButton } from '@components/BackButton'
import { HeaderTitle } from '@components/HeaderTitle'
import { Icon } from '@components/MiniButton/styles'
import { ButtonIcon } from '@components/ButtonIcon'


type RouteParams = {
  mealName: string;
}

export function Meal() {

  const route = useRoute();
  const { mealName } = route.params as RouteParams;

  function getMealName() {
    console.log(mealName)
  }

  return (
    <Container>
      <BackButton />
      <HeaderTitle title='Refeição' />

      <SlidingScreen>
        <MealName>
          {mealName}
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
          <Icon type='YES' />
          <LegendMarker>dentro da dieta</LegendMarker>
        </Marker>

        <BoxButton>
          <ButtonIcon
            icon='edit-3'
            title='Editar refeição'
            onPress={getMealName}
          />

          <Separator />

          <ButtonIcon
            icon='trash-2'
            title='Excliur refeição'
            type='SECONDARY'
          />
        </BoxButton>

      </SlidingScreen>

    </Container>
  );
}