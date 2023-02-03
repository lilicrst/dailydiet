import { TouchableOpacityProps } from "react-native";
import { GeneralStatistics } from "@components/GeneralStatistics";
import { Container, Icon } from "./styles";

type Props = TouchableOpacityProps;

export function PercentageChart({ ...rest }: Props) {
  return (
    <Container {...rest} >
      <Icon 
        name="arrow-up-right"
      />
      <GeneralStatistics percentage="63,8%" />
    </Container>
  )
}