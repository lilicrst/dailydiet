import { TouchableOpacity } from "react-native";
import theme from "src/theme";
import styled, { css } from "styled-components/native";


export type StatusTypeStyleProps = boolean;

type Props = {
  type: StatusTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 49px;

  flex-direction: row;
  align-items: center;  
  padding: 14px 16px 14px 12px;

  background-color: transparent;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
  border-width: 1px;
  border-radius: 6px;

  margin-bottom: 8px; //tirar do ultimo
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}`;

export const Meal = styled.Text`
  flex: 1;
  margin-right: 10px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}  
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;

  margin-left: 12px;
  margin-right: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const Status = styled.View <Props>`
  width: 14px;
  height: 14px;

  border-radius: 6px;
  background-color: ${({ theme,type }) => type === true ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID };

  justify-self: last baseline;
`;