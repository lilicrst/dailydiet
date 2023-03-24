import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

export type StatusTypeColorProps = boolean;

type Props = {
  isInsideTheDiet?: StatusTypeColorProps;
}

export const Container = styled(SafeAreaView) <Props> `
  flex: 1;
  background-color: ${({ theme, isInsideTheDiet }) => isInsideTheDiet === true ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  align-items: center;

  padding-top: 40px;
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