import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

export type ScreenStatusStyleProps = boolean;

type Props = {
  status: ScreenStatusStyleProps;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text <Props>`
  ${({ theme, status }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${ status === true ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
  margin-bottom:8px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;  
`;

export const Ilustration = styled.Image`
  width: 224px;
  height: 288px;
  
  margin-top: 40px;
  margin-bottom: 32px;
`;