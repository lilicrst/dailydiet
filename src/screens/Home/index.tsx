import { StatusBar } from 'expo-status-bar';
import { Container, Text } from './styles';

import { Header } from '@components/Header';
import { PercentageChart } from '@components/PercentageChart';
import { ButtonIcon } from '@components/ButtonIcon';
import { DailyList } from '@components/DailyList';

export function Home() {
  return (
    <Container>      
      <StatusBar style="auto" />
      <Header />
      <PercentageChart />
      <Text>
        Refeições
      </Text>      
      <ButtonIcon title='Nova refeição' />
      <DailyList date='15.01.23' />
      <DailyList date='18.01.23' />
    </Container>
  );
}

