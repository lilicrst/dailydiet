import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  align-items: center;

  padding-top: 72px;
`;

export const InfoChart = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  
  border-radius: 20px;

  padding: 24px;
  top: 168px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-top: 17px;  
  margin-bottom: 23px;
`;

export const Column = styled.View`
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
`;