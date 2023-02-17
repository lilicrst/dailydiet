import { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'

import { BoxButton, Container, DateAndHour, Description, LegendMarker, Marker, MealName, Separator } from './styles'

import { mealGetByDay } from '@storage/Meal/mealGetByDay'
import { daysGetAll } from '@storage/Days/daysGetAll'
import { MealStorageDTO } from '@storage/Meal/MealStorageDTO'

import { SlidingScreen } from '@screens/NewMeal/styles'
import { BackButton } from '@components/BackButton'
import { HeaderTitle } from '@components/HeaderTitle'
import { Icon } from '@components/MiniButton/styles'
import { ButtonIcon } from '@components/ButtonIcon'

type RouteParams = {
  key: string;
}

export function Meal() {

  const [meal, setMeal] = useState<MealStorageDTO>();

  const route = useRoute();
  const { key } = route.params as RouteParams;

  async function getMealDay() {
    const daysStored = await daysGetAll();

    for (let i = 0; i < daysStored.length; i++) {
      const keyDay = key.includes(daysStored[i])

      if (keyDay) {
        return daysStored[i];
      }
    }

    // TODO 
    return '';
  }

  async function fetchMeal() {

    try {

      const day = await getMealDay();

      const mealsByDay = await mealGetByDay(day);

      for (let i = 0; i < mealsByDay.length; i++) {
        const element = mealsByDay[i];

        if (key.includes(element.name) && key.includes(element.hour)) {
          setMeal(element);
          break;
        }
      }

    } catch (error) {

    }
  }

  function setMarkerIconStatus() {
    if (meal?.status === true) {
      return ('YES');
    } else {
      return ('NO');
    }
  }

  function SetMarkerLegend() {
    if (meal?.status === true) {
      return ('dentro da dieta');
    } else {
      return ('fora da dieta');
    }
  }

  useEffect(() => {
    fetchMeal()
  }, [])

  return (
    <Container>
      <BackButton />
      <HeaderTitle title='Refeição' />

      <SlidingScreen>
        <MealName>
          {meal?.name}
        </MealName>
        <Description>
          {meal?.description}
        </Description>

        <DateAndHour>
          Data e hora
        </DateAndHour>
        <Description>
          {meal?.date} às {meal?.hour}
        </Description>

        <Marker>
          <Icon type={setMarkerIconStatus()} />
          <LegendMarker>
            {SetMarkerLegend()}
          </LegendMarker>
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