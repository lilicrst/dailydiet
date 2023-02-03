import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ButtonTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
}

export function BackButton({ type = 'PRIMARY', ...rest}: Props){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.navigate('home');
  }

  return(
    <Container
    {...rest}
    onPress={handleGoBack}
    >
      <Icon 
        name="arrow-left"
        type={type}
      />
    </Container>
  )
}