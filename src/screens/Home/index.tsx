import { useState } from 'react';
import { SectionList } from 'react-native';

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
    setMealLists(prevState => [ ...prevState, 
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
            status: true
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

  return (
    <Container>
      <StatusBar style="auto" />
      <Header />
      <PercentageChart />
      <Text>
        Refeições
      </Text>
      <ButtonIcon
        title='Nova refeição'
        onPress={Preencher}
      />

      <SectionList
        sections={mealLists}
        keyExtractor={(item) => item.meal}
        renderItem={({item}) => (
          <MealTicket
            hour={item.hour}
            meal={item.meal}
            status={item.status}
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <DateList>{title}</DateList>
        )}
      />

    </Container>
  );
}

