import styled, { css, DefaultTheme } from "styled-components/native";
import { ThemeAttributeBackgroundPropType, TouchableOpacity } from "react-native";
import theme from "src/theme";

export type ButtonTypeStyleProps = 'YES' | 'NO';

export type ActiveButtonStyleProps = boolean;

type Props = {
  type: ButtonTypeStyleProps;
  isActive?: ActiveButtonStyleProps;
}

function DefineBackgroundColor({type, isActive}: Props){
  if (type === 'YES' && isActive) {
    return ('#E5F0DB')
  } else if (type === 'NO' && isActive) {
    return ('#F4E6E7')
  } else {
    return ("#EFF0F0")
  }
}

export const Container = styled(TouchableOpacity) <Props>`
  ${({ theme, isActive, type }) => isActive && css`
    border: 1px solid;
    border-color: ${type === 'YES' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `};

  background-color: ${({ theme, type, isActive }) => DefineBackgroundColor};
  

  width: 48.5%;
  height: 50px;

  border-radius: 6px;
  padding: 16px;
  margin-top: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text <Props>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
 `}
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  line-height: 20px;
`;

export const Icon = styled.View <Props> `
  width: 8px;
  height: 8px;
  border-radius: 6px;
  margin-right: 8px;

  background-color: ${({ theme, type }) => type === 'YES' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

//https://app.rocketseat.com.br/h/forum/react-native/421811c8-910e-4a8d-9c5d-fd49990039e1