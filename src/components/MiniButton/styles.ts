import styled, {css} from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'YES' | 'NO';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  width: 48.5%;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  border-radius: 6px;
  padding: 16px;
  margin-top: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text <Props>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
 `}
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  line-height: 20px;
`;

export const Icon = styled.View <Props> `
  width: 8px;
  height: 8px;
  border-radius: 6px;
  margin-right: 8px;

  background-color: ${({ theme, type }) => type === 'YES' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
`;