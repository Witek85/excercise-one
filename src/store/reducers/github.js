import { GITHUB_FETCH_SUCCESS, GITHUB_FETCH_FAILED, FILTER_REPOS, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../constants/github';

const initialState = {
    fetchedRepos: [],
    filteredRepos: [],
    favouriteRepos: [],
    languages: []
  }
  
  const github = (state = initialState, action) => {
    switch (action.type) {
        case GITHUB_FETCH_SUCCESS:
        return {
            ...state,
            fetchedRepos: action.payload,
            filteredRepos: action.payload,
            languages: action.payload.reduce((acc, val) => {
              const languagesList = acc.map(lang => lang.value);
              !languagesList.includes(val.language) && acc.push({key: val.language.replace(/\s+/g, '-').toLowerCase(), value: val.language})
              return acc;
            }, [])
        };
        case GITHUB_FETCH_FAILED:
          return {
              ...state,
              githubDataError: 'ERROR'
          };
        case FILTER_REPOS:
          return {
              ...state,
              filteredRepos: state.fetchedRepos.filter(repo => {
                const repoName = repo.name ? repo.name.toLowerCase() : "";
                const repoDescription = repo.description ? repo.description.toLowerCase() : "";
                const searchQuery = action.payload.searchQuery ? action.payload.searchQuery.toLowerCase() : ""
                return (repoName.includes(searchQuery) ||
                repoDescription.includes(searchQuery)) &&
                repo.language.toLowerCase().includes(action.payload.language.toLowerCase())
              }),
          };
        case ADD_TO_FAVOURITES:
          const favouriteReposCopy = [...state.favouriteRepos]
          favouriteReposCopy.push(...action.payload)
          return {
              ...state,
              favouriteRepos: favouriteReposCopy,
          };
        case REMOVE_FROM_FAVOURITES:
          return {
              ...state,
              favouriteRepos: state.favouriteRepos.filter((repo) => repo.id !== action.payload)
          };
      default:
        return state;
    }
  };
  
  export default github;