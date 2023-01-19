import styled from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
}))`

  position: absolute;
  align-self: flex-start;

  left: 24px;
  top: 56px;
`;