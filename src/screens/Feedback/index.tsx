import { useNavigation, useRoute } from "@react-navigation/native";
import { ScreenStatusStyleProps, Container, Ilustration, Subtitle, Title } from "./styles";

import { Button } from "@components/Button";

import PositiveImg from '@assets/positive.png'
import NegativeImg from '@assets/negative.png'

type Props = {
  status: ScreenStatusStyleProps;
}

export function Feedback(){

  const route = useRoute();
  const { status } = route.params as Props;

  const navigation = useNavigation();

  function TitleByStatus({status}: Props){
    if (status === true ) {
      return ("Continue assim!")
    } else {
      return ("Que pena!")
    }
  }

  function SubitleByStatus({status}: Props){
    if (status === true ) {
      return ("Você continua dentro da dieta. Muito bem!")
    } else {
      return ("Você saiu da dieta dessa vez, mas continue se esforçando e não desista!")
    }
  }

  function GoToHome(){
    navigation.navigate('home');
  }

  return (
    <Container>
      <Title status={status}>
        {TitleByStatus({status})}
      </Title>
      <Subtitle>
        {SubitleByStatus({status})}
      </Subtitle>

      <Ilustration 
        source={status === true ? PositiveImg : NegativeImg}
      />

      <Button 
        title="Ir para a página inicial"
        type="SMALLER"
        onPress={GoToHome}
      />
    </Container>
  )
}