import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
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
  width: auto;
`;

export const Binded = styled.View`
  width: 47%;
  height: auto;
`;

export const Column = styled.View`
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
`;

export const BoxButton = styled.View`
  width: 100%;
  height: auto;

  position: absolute;
  top: 97%;
  align-self: center;
`;