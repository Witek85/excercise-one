import { GITHUB_FETCH_INIT, FILTER_REPOS, INIT_FAVOURITES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../constants/github';

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

export const initFavourites = () => {
  return {
      type: INIT_FAVOURITES,
  }
}


export const addToFavourites = (favouriteRepo) => {
  return {
      type: ADD_TO_FAVOURITES,
      payload: favouriteRepo
  }
}

export const removeFromFavourites = (favouriteRepoId) => {
  return {
      type: REMOVE_FROM_FAVOURITES,
      payload: favouriteRepoId
  }
}

