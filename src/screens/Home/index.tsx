import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';

import { Header } from '@components/Header';
import { PercentageChart } from '@components/PercentageChart';
import { ButtonIcon } from '@components/ButtonIcon';

export function Home() {
  return (
    <Container>      
      <StatusBar style="auto" />
      <Header />
      <PercentageChart />
      <ButtonIcon />
    </Container>
  );
}

