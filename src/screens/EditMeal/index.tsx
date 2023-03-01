import { useEffect, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AppError } from '@utils/AppError';

import { mealRegister } from '@storage/Meal/mealRegister';
import { dayRegister } from '@storage/Days/dayRegister';
import { MealStorageDTO } from '@storage/Meal/MealStorageDTO';
import { mealGetByDay } from '@storage/Meal/mealGetByDay';
import { mealRemoveByDay } from '@storage/Meal/mealRemoveByDay';

import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";
import { HeaderTitle } from "@components/HeaderTitle";
import { Input } from "@components/Input";
import { MiniButton } from "@components/MiniButton";

import { Binded, BoxButton, Column, Container, Label, SlidingScreen } from "./styles";

type RouteParams = {
  key: string;
  day: string;
}

export function EditMeal() {

  const [meal, setMeal] = useState<MealStorageDTO>();

  const [nameInput, setNameInput] = useState<string>('');
  const [descriptionInput, setDescriptionInput] = useState<string>('');
  const [dateInput, setDateInput] = useState<string>('');
  const [hourInput, setHourInput] = useState<string>('');

  const [miniButtonChecked, setMiniButtonChecked] = useState('none');

  const navigation = useNavigation();
  const route = useRoute();
  const { key } = route.params as RouteParams;
  const { day } = route.params as RouteParams;

  async function fetchMeal() {
    try {
      const mealsByDay = await mealGetByDay(day);

      for (let i = 0; i < mealsByDay.length; i++) {
        const element = mealsByDay[i];

        if (key.includes(element.name) && key.includes(element.hour)) {
          setMeal(element);

          setNameInput(element.name || 'indisponível');
          setDescriptionInput(element.description || 'indisponível');
          setDateInput(element.date || 'indisponível');
          setHourInput(element.hour || 'indisponível');

          if (element.status) {
            setMiniButtonChecked('yes');
          } if (element.status === false) {
            setMiniButtonChecked('no');
          }

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

  async function handleEditMeal() {

    if (
      nameInput.trim().length === 0 ||
      descriptionInput.trim().length === 0 ||
      dateInput.trim().length === 0 ||
      hourInput.trim().length === 0 ||
      miniButtonChecked === 'none'
    ) {
      return Alert.alert('Editar refeição', 'Preencha todos os campos para salvar a refeição.');
    }

    let status = true;

    if (miniButtonChecked === 'yes') {
      status = true
    } if (miniButtonChecked === 'no') {
      status = false
    }

    const modifiedMeal = {
      name: nameInput,
      description: descriptionInput,
      date: dateInput,
      hour: hourInput,
      status: status,
      key: `${nameInput}-${dateInput}-${hourInput}`
    }

    try {
      await mealRemoveByDay(key, day);
      await mealRegister(modifiedMeal, modifiedMeal.date);
      await dayRegister(modifiedMeal.date);
      // mensagem
    } catch (error) {
      console.log(error);
      Alert.alert('Editar refeição', 'Não foi possível salvar as alterações.');
    }

    navigation.navigate('home');
  }

  useEffect(() => {
    fetchMeal();
  }, [])

  return (
    <Container>
      <BackButton />
      <HeaderTitle title="Editar refeição" />

      <SlidingScreen>        
          <Label>Nome</Label>
          <Input
            type='NAME'
            onChangeText={setNameInput}
            value={nameInput}
          />

          <Label>Descrição</Label>
          <Input
            type='DESCRIPTION'
            multiline={true}
            textAlignVertical={'top'}
            onChangeText={setDescriptionInput}
            value={descriptionInput}
          />

          <Column>
            <Binded>
              <Label>Data</Label>
              <Input
                type='DATEHOUR'
                onChangeText={setDateInput}
                value={dateInput}
              />
            </Binded>
            <Binded>
              <Label>Hora</Label>
              <Input
                type='DATEHOUR'
                onChangeText={setHourInput}
                value={hourInput}
              />
            </Binded>
          </Column>

          <Label>Está dentro da dieta?</Label>

          <Column>
            <MiniButton
              type="YES"
              title="Sim"
              isActive={miniButtonChecked === 'yes' ? true : false}
              onPress={() => setMiniButtonChecked('yes')}
            />
            <MiniButton
              type="NO"
              title="Não"
              isActive={miniButtonChecked === 'no' ? true : false}
              onPress={() => setMiniButtonChecked('no')}
            />
          </Column>

          <BoxButton>

            <Button
              title="Salvar alterações"
              onPress={handleEditMeal}
            />
          </BoxButton>        
      </SlidingScreen>
    </Container>
  );
}