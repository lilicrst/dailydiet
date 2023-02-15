import { useRoute } from '@react-navigation/native'

import { BoxButton, Container, DateAndHour, Description, LegendMarker, Marker, MealName, Separator } from './styles'

import { SlidingScreen } from '@screens/NewMeal/styles'
import { BackButton } from '@components/BackButton'
import { HeaderTitle } from '@components/HeaderTitle'
import { Icon } from '@components/MiniButton/styles'
import { ButtonIcon } from '@components/ButtonIcon'
import { mealGetByDay } from '@storage/Meal/mealGetByDay'


type RouteParams = {
  key: string;
}

export function Meal() {

  const route = useRoute();
  const { key } = route.params as RouteParams;

  async function getMealDay() {
    //chamar dayGetAll e passar um filtro no key pra saber qual é a data. Retornar a data. Usar for.
    console.log(key)
  }

  async function fetchMeal(){
    // chamar a função acima e colocar o retorno dela na mealGetByDay. Depois de pegar a refeição, sei lá.
    // tem que passar outro filtro pra saber qual das refeições desse dia tem a mesma chave. rs.
    // const mealInfo = await mealGetByDay()
  }

  return (
    <Container>
      <BackButton />
      <HeaderTitle title='Refeição' />

      <SlidingScreen>
        <MealName>
          Nada
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
            onPress={getMealDay}
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