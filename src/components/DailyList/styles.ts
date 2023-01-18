import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: 32px;
  gap: 8px;
`;

export const Date = styled.Text`
  margin-bottom: 8px;
  
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;