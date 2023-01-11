import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Container, Title } from './styles';

export function Home() {
  return (
    <Container>
      <Title>Daily Diet</Title>
      <StatusBar style="auto" />
    </Container>
  );
}

