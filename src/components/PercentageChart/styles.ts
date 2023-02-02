import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 102px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;

  align-items: stretch;
  padding: 24px;

  margin-top: 33px;
  margin-bottom: 40px;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
}))`
  position: absolute;
  align-self: flex-end;
  top: 8px;
  right: 8px;
`;