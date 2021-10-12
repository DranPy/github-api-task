import { useDispatch, useSelector } from "react-redux";

import GitHubUserItem from "../components/GitHubUsers/GitHubUserItem";
import { fetchUserRepositories } from "../store/usersRepos/reducer";
import {
  getGithubUsersRepoByName,
  getGithubUsersReposStatus,
} from "../store/usersRepos/selectors";

const GitHubUserItemContainer = (props) => {
  const { user } = props;
  const dispatch = useDispatch();
  const githubUsersRepos = useSelector((store) =>
    getGithubUsersRepoByName(store, user.login)
  );
  const githubUsersReposStatus = useSelector((store) =>
    getGithubUsersReposStatus(store, user.login)
  );

  const handleDetailsClick = (userName) => {
    dispatch(fetchUserRepositories(userName));
  };

  return (
    <GitHubUserItem
      userRepositories={githubUsersRepos}
      userRepositoriesStatus={githubUsersReposStatus}
      onDetailsClick={handleDetailsClick}
      user={user}
      {...props}
    />
  );
};

export default GitHubUserItemContainer;
