import styled, { css } from "styled-components/native";
import { TextInput } from 'react-native';

export type InputTypeStyleProps = 'NAME' | 'DESCRIPTION' | 'DATEHOUR';

type Props = {
  type: InputTypeStyleProps;
}

export const Container = styled(TextInput) <Props>`
  flex: 1;
  width: ${({ type }) => type === 'DATEHOUR' ? '153px' : '100%'};

  min-height: ${({ type }) => type === 'DESCRIPTION' ? '120px' : '48px'};
  max-height: ${({ type }) => type === 'DESCRIPTION' ? '120px' : '48px'};

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    border: 1px solid ${theme.COLORS.GRAY_5};
  `}

  border-radius: 6px;
  padding: 14px;
  margin-bottom: 24px;
`;