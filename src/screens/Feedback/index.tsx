import { ScreenStatusStyleProps, Container, Ilustration, Subtitle, Title } from "./styles";

import { Button } from "@components/Button";

import PositiveImg from '@assets/positive.png'
import NegativeImg from '@assets/negative.png'

type Props = {
  type?: ScreenStatusStyleProps;
}

export function Feedback({ type = 'POSITIVE' }: Props){

  function TitleByStatus({type}: Props){
    if (type === 'POSITIVE') {
      return ("Continue assim!")
    } else {
      return ("Que pena!")
    }
  }

  function SubitleByStatus({type}: Props){
    if (type === 'POSITIVE') {
      return ("Você continua dentro da dieta. Muito bem!")
    } else {
      return ("Você saiu da dieta dessa vez, mas continue se esforçando e não desista!")
    }
  }

  return (
    <Container>
      <Title type={type}>
        {TitleByStatus({type})}
      </Title>
      <Subtitle>
        {SubitleByStatus({type})}
      </Subtitle>

      <Ilustration 
        source={type === 'POSITIVE' ? PositiveImg : NegativeImg}
      />

      <Button 
        title="Ir para a página inicial"
        type="SMALLER"
      />
    </Container>
  )
}