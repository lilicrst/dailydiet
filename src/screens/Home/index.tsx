import { useState, useCallback } from 'react';
import { Alert, SectionList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { daysGetAll } from '@storage/Days/daysGetAll';
import { mealGetByDay } from '@storage/Meal/mealGetByDay';
import { mealGetStatistics } from '@storage/Meal/mealGetStatistics';

import { Header } from '@components/Header';
import { PercentageChart } from '@components/PercentageChart';
import { ButtonIcon } from '@components/ButtonIcon';
import { MealTicket } from '@components/MealTicket';

import { Container, DateList, Text } from './styles';

type MealListProps = {
  title: string,
  data:
  {
    hour: string,
    description: string,
    name: string,
    status: boolean,
    key: string,
    date: string,
  }[],
}

export function Home() {
  const [mealLists, setMealLists] = useState<MealListProps[]>([]);

  const navigation = useNavigation();

  function handleOpenStatistics() {
    mealGetStatistics();
    navigation.navigate('statistics');
  }

  function handleNewMeal() {
    navigation.navigate('new');
  }

  function handleOpenMeal(key: string, day: string) {
      navigation.navigate('meal', { key, day });  
  }

  async function fetchListsOfMeals() {
    try {

      const days = await daysGetAll();

      const list = [];

      for (let i = 0; i < days.length; i++) {

        const meals = await mealGetByDay(days[i]);

        list.push({
          title: days[i],
          data: meals
        });
      }

      setMealLists(list);

    } catch (error) {

    }
  }

  useFocusEffect(useCallback(() => {
    fetchListsOfMeals();
  }, []))

  return (
    <Container>
      <StatusBar style="auto" />
      <Header />
      <PercentageChart
        onPress={handleOpenStatistics}
      />
      <Text>
        Refeições
      </Text>
      <ButtonIcon
        title='Nova refeição'
        icon='plus'
        onPress={handleNewMeal}
      />

      <SectionList
        sections={mealLists}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <MealTicket
            hour={item.hour}
            meal={item.name}
            status={item.status}
            onPress={() => handleOpenMeal(item.key, item.date)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <DateList>{title}</DateList>
        )}
        ListEmptyComponent={() => (
          <Text>
            Não há refeições registradas ainda. {'\n'}
            Comece a registrar agora.
          </Text>
        )}
      />

    </Container>
  );
}

