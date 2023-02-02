import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};

  align-items: center;

  padding-top: 72px;
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}

  font-size: 20px;
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}  
  margin-bottom: 24px;
`;

export const DateAndHour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-bottom: 8px;
`;

export const Marker = styled.View`
  width: auto;
  height: 34px;
  border-radius: 1000px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
`;

export const LegendMarker = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`;