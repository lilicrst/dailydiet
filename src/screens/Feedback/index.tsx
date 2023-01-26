import { Container, Ilustration, Subtitle, Title } from "./styles";

import PositiveImg from '@assets/positive.png'
import { Button } from "@components/Button";

export function Feedback(){
  return (
    <Container>
      <Title>Continue assim!</Title>
      <Subtitle>Você continua dentro da dieta. Muito bem!</Subtitle>
      <Ilustration source={PositiveImg} />
      <Button title="Ir para a página inicial"/>
    </Container>
  )
}