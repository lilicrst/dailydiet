import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 49px;

  flex-direction: row;
  align-items: center;  
  padding: 14px 16px 14px 12px;

  background-color: transparent;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
  border-width: 1px;
  border-radius: 6px;

  gap: 12px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}`;

export const Meal = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}`;

export const Divider = styled.View`
  width: 0px;
  height: 14px;

  border: 1px solid;
`;