import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 166px;
  height: 107px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  align-items: center;
  padding: 16px;
  margin-bottom: 12px;
`;

export const Number = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
  text-align: center;  
`;