import httpClient from "../utils/httpClient";

export const getUsers = (userName, limit = 5) =>
  httpClient.get("/search/users", { params: { q: userName, per_page: limit } });

export const getUserRepositories = (userName, limit = 5) =>
  httpClient.get(`/users/${userName}/repos`, { params: { per_page: limit } });
