import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export type ButtonTypeStyleProps = 'NORMAL' | 'SMALLER';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  width: ${({ type }) => type === 'SMALLER' ? '195px' : '100%'};
  height: 50px;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};

  border-radius: 6px;
  padding: 16px 24px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
`}`;