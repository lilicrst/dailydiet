import { BoxButton, Container, DateAndHour, Description, LegendMarker, Marker, MealName, Separator } from './styles'
import { SlidingScreen } from '@screens/NewMeal/styles'
import { BackButton } from '@components/BackButton'
import { HeaderTitle } from '@components/HeaderTitle'
import { Icon } from '@components/MiniButton/styles'
import { ButtonIcon } from '@components/ButtonIcon'

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
          <Icon type='YES' />
          <LegendMarker>dentro da dieta</LegendMarker>
        </Marker>

        <BoxButton>
          <ButtonIcon
            icon='edit-3'
            title='Editar refeição'
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