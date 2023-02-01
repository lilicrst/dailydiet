import styled, {css} from "styled-components/native";
import { Plus } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  width: 100%;
  height: 50px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7};

  border-radius: 6px;
  border: solid 1px;
  border-color: ${({ theme, type }) => type === 'PRIMARY' ? 'transparent' : theme.COLORS.GRAY_1} ;
  padding: 16px 24px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text <Props>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
 `}
  color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  line-height: 20px;
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_4,
  size: 18,
  weight: 'bold',
}))<Props>`
  margin-right: 12px;
`;