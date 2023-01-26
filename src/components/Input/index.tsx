import { TextInputProps } from "react-native";
import { InputTypeStyleProps, Container } from "./styles";

type Props = TextInputProps & {
  placeholder?: string;
  type: InputTypeStyleProps;
}

export function Input({placeholder = 'Digite aqui', type, ...rest}: Props){
  return (
    <Container
      type={type} 
      {...rest}
    />
  )
}