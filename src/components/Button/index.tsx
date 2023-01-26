import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'NORMAL' }: Props){
  return (
    <Container type={type} >      
      <Title>
        {title}
      </Title>
    </Container>
  );
}