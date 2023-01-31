import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function MiniButton({ title, type = 'YES', ...rest }: Props){
  return (
    <Container 
      type={type}
      {...rest}
    >
      <Icon type={type} />
      <Title type={type}>
        {title}
      </Title>
    </Container>
  );
}