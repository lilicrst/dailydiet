import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};

  align-items: center;

  padding-top: 72px;
`;

export const SlidingScreen = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: flex-start;
  
  border-radius: 20px;

  padding: 24px;
  padding-top: 40px;
  top: 104px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const Column = styled.View`
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
`;