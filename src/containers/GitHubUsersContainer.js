import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import GitHubUsers from "../components/GitHubUsers";

import { fetchUsers } from "../store/users/reducer";
import { getGithubUsers, getGithubUsersStatus } from "../store/users/selectors";

const GitHubUsersContainer = () => {
  const dispatch = useDispatch();
  const handleSearch = (userName) => dispatch(fetchUsers(userName));
  const users = useSelector(getGithubUsers);
  const usersStatus = useSelector(getGithubUsersStatus);

  return (
    <Formik
      initialValues={{
        userName: "",
      }}
      onSubmit={({ userName }) => handleSearch(userName.trim())}
    >
      <GitHubUsers users={users} userStatus={usersStatus} />
    </Formik>
  );
};

export default GitHubUsersContainer;
