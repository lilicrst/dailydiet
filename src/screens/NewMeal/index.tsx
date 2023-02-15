import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { mealRegister } from '@storage/Meal/mealRegister';
import { dayRegister } from '@storage/Days/dayRegister';

import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";
import { HeaderTitle } from "@components/HeaderTitle";
import { Input } from "@components/Input";
import { MiniButton } from "@components/MiniButton";

import { Binded, BoxButton, Column, Container, Label, SlidingScreen } from "./styles";

export function NewMeal() {

  const [nameInput, setNameInput] = useState<string>('');
  const [descriptionInput, setDescriptionInput] = useState<string>('');
  const [dateInput, setDateInput] = useState<string>('');
  const [hourInput, setHourInput] = useState<string>('');

  const [miniButtonChecked, setMiniButtonChecked] = useState('none');

  const navigation = useNavigation();

  async function handleSaveMeal() {

    if (
      nameInput.trim().length === 0 ||
      descriptionInput.trim().length === 0 ||
      dateInput.trim().length === 0 ||
      hourInput.trim().length === 0 ||
      miniButtonChecked === 'none'
    ) {
      return Alert.alert('Nova refeição', 'Preencha todos os campos para cadastrar a refeição.');
    }

    let status = true;

    if (miniButtonChecked === 'yes') {
      status = true
    } if (miniButtonChecked === 'no') {
      status = false
    }

    const newMeal = {
      name: nameInput,
      description: descriptionInput,
      date: dateInput,
      hour: hourInput,
      status: status,
      key: `${nameInput}-${dateInput}-${hourInput}`
    }

    try {

      await mealRegister(newMeal, newMeal.date);
      await dayRegister(newMeal.date);

    } catch (error) {
      console.log(error);
      Alert.alert('Nova refeição', 'Não foi possível adicionar.');
    }

    navigation.navigate('feedback', { status: status });
  }

  return (
    <Container>
      <BackButton />
      <HeaderTitle title="Nova refeição" />
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
            title="Cadastrar refeição"
            onPress={handleSaveMeal}
          />
        </BoxButton>

      </SlidingScreen>
    </Container>
  );
}