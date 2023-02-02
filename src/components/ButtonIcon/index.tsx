import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  icon: string;
  title: string;
  type?: ButtonTypeStyleProps;
}

export function ButtonIcon({ icon, title, type = 'PRIMARY', ...rest }: Props){
  return (
    <Container 
      type={type}
      {...rest}
    >
      <Icon 
        type={type} 
        name="plus"
      />

      <Title type={type}>
        {title}
      </Title>
    </Container>
  );
}