import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 102px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_G}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
`}
`;