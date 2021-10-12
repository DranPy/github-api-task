import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Loader from "../Loader";
import {
  StyledGitHubUserItem,
  StyledRepoDetailsItem,
  StyledRepoTitle,
} from "./styled";

const GitHubUserItem = (props) => {
  const { user, userRepositories, userRepositoriesStatus, onDetailsClick } =
    props;
  const [isShowDetails, setIsShowDetails] = useState(false);

  return (
    <>
      <StyledGitHubUserItem
        type="button"
        onClick={() => {
          setIsShowDetails(!isShowDetails);
          onDetailsClick?.(user.login);
        }}
      >
        <span>{user.login}</span>
        <FontAwesomeIcon icon={isShowDetails ? "chevron-up" : "chevron-down"} />
      </StyledGitHubUserItem>
      {isShowDetails && (
        <div>
          {userRepositoriesStatus === "pending" ? (
            <Loader isInline={true} />
          ) : (
            userRepositories.map((repo) => (
              <StyledRepoDetailsItem key={repo.id}>
                <StyledRepoTitle>
                  {repo.name}
                  <span>
                    {repo.stargazers_count}
                    <FontAwesomeIcon icon="star" />
                  </span>
                </StyledRepoTitle>
                {repo.description || "-"}
              </StyledRepoDetailsItem>
            ))
          )}
        </div>
      )}
    </>
  );
};

GitHubUserItem.protoTypes = {
  userRepositoriesStatus: PropTypes.oneOf(["pending", "success", "rejected"]),
  onDetailsClick: PropTypes.func,
  user: PropTypes.arrayOf(PropTypes.object),
  userRepositories: PropTypes.arrayOf(PropTypes.object),
};

export default GitHubUserItem;
