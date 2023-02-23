import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { BoxButton, Container, DateAndHour, Description, LegendMarker, Marker, MealName, Separator } from './styles';

import { AppError } from '@utils/AppError';

import { mealGetByDay } from '@storage/Meal/mealGetByDay'
import { daysGetAll } from '@storage/Days/daysGetAll'
import { mealRemoveByDay } from '@storage/Meal/mealRemoveByDay';
import { MealStorageDTO } from '@storage/Meal/MealStorageDTO'

import { SlidingScreen } from '@screens/NewMeal/styles'
import { BackButton } from '@components/BackButton'
import { HeaderTitle } from '@components/HeaderTitle'
import { Icon } from '@components/MiniButton/styles'
import { ButtonIcon } from '@components/ButtonIcon'

type RouteParams = {
  key: string;
  day: string;
}

export function Meal() {

  const [meal, setMeal] = useState<MealStorageDTO>();

  const navigation = useNavigation();
  const route = useRoute();
  const { key } = route.params as RouteParams;
  const { day } = route.params as RouteParams;

  async function getMealDay() {
    const daysStored = await daysGetAll();
    let dayExists = false;

    for (let i = 0; i < daysStored.length; i++) {
      dayExists = key.includes(daysStored[i]);

      if (dayExists) {
        return daysStored[i];
      }
    }
    // TODO 
    return '';
  }

  async function fetchMeal() {

    try {

      const mealsByDay = await mealGetByDay(day);

      for (let i = 0; i < mealsByDay.length; i++) {
        const element = mealsByDay[i];

        if (key.includes(element.name) && key.includes(element.hour)) {
          setMeal(element);
          break;
        }
      }

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Página indisponível', error.message);
        navigation.navigate('home');
      } else {
        Alert.alert('Página indisponível', 'Não foi possível abrir essa refeição.');
        console.log(error);
        navigation.navigate('home');
      }
    }
  }

  async function handleRemoveMeal() {
    try {
      await mealRemoveByDay(key, day);
      Alert.alert('Refeição excluída', 'Esse registro foi excluído com sucesso.');
      navigation.navigate('home');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao excluir', 'Não foi possível excluir essa refeição.');
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
            onPress={() => handleRemoveMeal()}
          />
        </BoxButton>

      </SlidingScreen>

    </Container>
  );
}