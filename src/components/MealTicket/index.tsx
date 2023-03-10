import { TouchableOpacityProps } from "react-native";
import { StatusTypeStyleProps ,Container, Divider, Hour, Meal, Status } from "./styles";

type Props = TouchableOpacityProps & {
  hour: string;
  meal: string;
  status: StatusTypeStyleProps;
}

export function MealTicket({ hour, meal, status, ...rest}: Props){
  return(
    <Container {...rest} >
      <Hour>
        {hour}  
      </Hour>
      <Divider />
      <Meal numberOfLines={1} >
        {meal}
      </Meal>
      <Status 
        type={status}
      />
    </Container>
  );
}