import { useFormikContext } from "formik";

import GitHubUserItemContainer from "../../containers/GitHubUserItemContainer";
import Input from "../Input";
import Button from "../Button";
import { GitHubUsersWrap, StyledForm } from "./styled";

const GitHubUsers = (props) => {
  const { users, userStatus } = props;
  const { values } = useFormikContext();

  return (
    <GitHubUsersWrap>
      <h3>GitHub user search</h3>
      <StyledForm>
        <Input name="userName" placeholder="Enter user name" />
        <Button type="submit" isLoading={userStatus === "pending"}>
          Search
        </Button>
      </StyledForm>
      {userStatus === "success" && (
        <p>{`Showing users for "${values.userName}"`}</p>
      )}
      {values.userName.trim() !== "" &&
      userStatus === "success" &&
      users.length === 0
        ? "There are no data for that criteria"
        : users?.map((user) => (
            <GitHubUserItemContainer key={user.id} user={user} />
          ))}
    </GitHubUsersWrap>
  );
};

export default GitHubUsers;
