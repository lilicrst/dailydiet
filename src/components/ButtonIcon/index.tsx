import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function ButtonIcon({ title, type = 'PRIMARY', ...rest }: Props){
  return (
    <Container 
      type={type}
      {...rest}
    >
      <Icon type='PRIMARY' />
      <Title type={type}>
        {title}
      </Title>
    </Container>
  );
}