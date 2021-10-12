import styled from "styled-components";

export const StyledLoader = styled.div`
  margin: 10px;
  text-align: center;

  ${({ isInline }) =>
    isInline
      ? `
  display: inline-block;
  margin: 0;
  `
      : `
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
  `}

  svg {
    animation-duration: 1s;
  }
`;
