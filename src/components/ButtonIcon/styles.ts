import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};

  border-radius: 6px;
`;