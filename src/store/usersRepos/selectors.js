export const getGithubUsersRepos = (store) => store.usersRepos;

export const getGithubUsersReposStatus = (store, userName) =>
  getGithubUsersRepos(store)[userName]?.status;

export const getGithubUsersRepoByName = (store, userName) =>
  getGithubUsersRepos(store)[userName]?.data || [];
