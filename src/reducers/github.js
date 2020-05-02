const initialState = {
    fetchedRepos: [],
    filteredRepos: [],
    favouriteRepos: [],
  }
  
  const github = (state = initialState, action) => {
    switch (action.type) {
        case 'GITHUB_FETCH_SUCCESS':
        console.log('GITHUB_FETCH_SUCCESS', action);
        return {
            ...state,
            fetchedRepos: action.payload,
            filteredRepos: action.payload
        };
        case 'GITHUB_FETCH_FAILED':
        console.log(action);
        return {
            ...state,
            githubDataError: 'ERROR'
        };
        case 'FILTER_REPOS':
          console.log('FILTER_REPOS', action);
          const filterParams = action.payload;
          console.log('filterParams', filterParams)
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
      default:
        return state;
    }
  };
  
  export default github;