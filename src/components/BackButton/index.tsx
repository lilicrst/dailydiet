import { Container } from "@components/Loading/styles";
import { ButtonTypeStyleProps, Icon } from "./styles";

type Props = {
  type?: ButtonTypeStyleProps;
}

export function BackButton({ type = 'PRIMARY'}: Props){
  return(
      <Icon 
        name="arrow-left"
        type={type}
      />
  )
}