const initialState = {
    fetchedRepos: {},
  }
  
  const github = (state = initialState, action) => {
    switch (action.type) {
        case 'GITHUB_FETCH_SUCCESS':
        console.log(action);
        return {
            ...state,
            githubData: 'SUCCESS'
        };
        case 'GITHUB_FETCH_FAILED':
        console.log(action);
        return {
            ...state,
            githubDataError: 'ERROR'
        };
      default:
        return state;
    }
  };
  
  export default github;