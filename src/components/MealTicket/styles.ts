import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 49px;

  flex-direction: row;
  justify-content: space-between;
  padding: 14px 16px 14px 12px;

  background-color: transparent;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
  border-width: 1px;
  border-radius: 6px;
`;