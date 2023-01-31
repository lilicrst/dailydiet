import { TouchableOpacityProps } from "react-native";
import { ActiveButtonStyleProps, ButtonTypeStyleProps, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type: ButtonTypeStyleProps;
  isActive?: ActiveButtonStyleProps;
}

export function MiniButton({ title, isActive = false, type, ...rest }: Props){
  return (
    <Container 
      type={type}
      isActive={isActive}
      {...rest}
    >
      <Icon type={type} />
      <Title type={type}>
        {title}
      </Title>
    </Container>
  );
}