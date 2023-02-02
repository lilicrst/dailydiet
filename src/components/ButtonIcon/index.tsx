import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Icon, Title } from "./styles";
import { Feather } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap;
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
        name={icon}
      />

      <Title type={type}>
        {title}
      </Title>
    </Container>
  );
}