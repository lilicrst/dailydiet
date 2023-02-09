import { useState } from 'react';
import { SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { Container, DateList, Text } from './styles';

import { Header } from '@components/Header';
import { PercentageChart } from '@components/PercentageChart';
import { ButtonIcon } from '@components/ButtonIcon';
import { MealTicket } from '@components/MealTicket';

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

  function Preencher() {
    setMealLists(prevState => [...prevState,
    {
      title: '18.01.23',
      data: [
        {
          hour: '08:00',
          meal: 'Cuscuz com ovo',
          status: true
        },
        {
          hour: '12:00',
          meal: 'Lasanha',
          status: false
        },
        {
          hour: '15:30',
          meal: 'Morangos',
          status: true
        },
        {
          hour: '19:45',
          meal: 'Crepioca',
          status: false
        },
      ]
    },
    ]
    )
  }

  const navigation = useNavigation();

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

