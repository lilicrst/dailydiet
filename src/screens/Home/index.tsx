import { useState } from 'react';
import { SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { daysGetAll } from '@storage/Days/daysGetAll';

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
    meal: string,
    status: boolean,
  }[],
}

export function Home() {
  const [mealLists, setMealLists] = useState<MealListProps[]>([]);

  const navigation = useNavigation();

  async function fetchListsOfMeals() {
    try {

      const days = await daysGetAll();

      for (let index = 0; index < days.length; index++) {        
        // ver aquela parada do prevState pra ir colocando os bagui dentro do mealLists
        // descobrir como vou colocar na posição certa, Jesus
        // mas acho que vai ser de boa já que eu tenho um filtro por data, vai ser de boa
        //setMealLists(prevState => [...prevState, ''])
        console.log(days[index])
      }
      
    } catch (error) {
      
    }
  }

  function handleNewMeal() {
    navigation.navigate('new');
  }

  function handleOpenStatistics() {
    navigation.navigate('statistics');
  }

  function handleOpenMeal() {
    navigation.navigate('meal');
  }

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
        keyExtractor={(item) => item.meal}
        renderItem={({ item }) => (
          <MealTicket
            hour={item.hour}
            meal={item.meal}
            status={item.status}
            onPress={handleOpenMeal}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <DateList>{title}</DateList>
        )}
      />

    </Container>
  );
}

