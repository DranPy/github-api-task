import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 10px;
  background-color: #f2f2f2;
  border: 1px solid ${({ isInvalid }) => (isInvalid ? "red" : "#e6e6e6")};
  color: #333333;
  display: ${({ isInline }) => (isInline ? "inline" : "block")};
`;
