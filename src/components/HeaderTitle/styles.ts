import styled, {css} from "styled-components/native";

export const Title = styled.Text`  
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  position: absolute;
  margin-top: 57px;
`;