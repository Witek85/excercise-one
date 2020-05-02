import { GITHUB_FETCH_INIT, FILTER_REPOS } from '../constants/github';

export const githubInit = () => {
  return {
      type: GITHUB_FETCH_INIT
  }
}

export const filterRepos = (filterParams) => {
  return {
      type: FILTER_REPOS,
      payload: filterParams
  }
}

