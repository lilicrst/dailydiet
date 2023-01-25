import styled, { css } from "styled-components/native";
import { TextInput } from 'react-native';

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
  margin-bottom: 4px;
`;


export const Input = styled(TextInput)`
  flex: 1;

  min-height: 48px;
  max-width: 48px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    border-color: ${theme.COLORS.GRAY_5};
  `}

  border-radius: 6px;
  border: solid 1px;

`;

export const Column = styled.View`
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
`;