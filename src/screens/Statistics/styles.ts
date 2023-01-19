import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  align-items: center;

  padding-top: 72px;
`;