import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';

import { Header } from '@components/Hearder';
import { PercentageChart } from '@components/PercentageChart';

export function Home() {
  return (
    <Container>      
      <StatusBar style="auto" />
      <Header />
      <PercentageChart />
    </Container>
  );
}

