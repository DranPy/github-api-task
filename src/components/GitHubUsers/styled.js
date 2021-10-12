import { Form } from "formik";
import styled from "styled-components";
import { StyledButton } from "../Button/styled";
import Input from "../Input";
import { StyledInput } from "../Input/styled";

export const GitHubUsersWrap = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

export const StyledGitHubUserItem = styled.button`
  border: 1px solid #f2f2f2;
  background-color: #f2f2f2;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const StyledRepoDetailsItem = styled.div`
  background-color: #e0e0e0;
  margin-left: 15px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const StyledRepoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;

  svg {
    margin-left: 5px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;

  ${StyledInput} {
    width: 60%;
  }

  ${StyledButton} {
    width: 40%;
  }
`;
