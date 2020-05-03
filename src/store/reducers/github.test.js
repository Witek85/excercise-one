import github from './github';
import { GITHUB_FETCH_SUCCESS, GITHUB_FETCH_FAILED, FILTER_REPOS, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../constants/github';

describe('github reducer', () => {
  it('should return the initial state', () => {
    expect(github(undefined, {})).toEqual({
			fetchedRepos: [],
			filteredRepos: [],
			favouriteRepos: [],
			languages: [],
			githubDataError: ""
    })
  })

  it('should handle GITHUB_FETCH_SUCCESS', () => {
    expect(
      github(undefined, {
        type: GITHUB_FETCH_SUCCESS,
        payload: [{id: 1, language: 'php'}, {id: 2, language: 'html'}]
      })
    ).toEqual({
			fetchedRepos: [{id: 1, language: 'php'}, {id: 2, language: 'html'}],
			filteredRepos: [{id: 1, language: 'php'}, {id: 2, language: 'html'}],
			favouriteRepos: [],
			languages: [{key: 'php', value: 'php'}, {key: 'html', value: 'html'}],
			githubDataError: ""
    })
	})
	
	it('should handle GITHUB_FETCH_FAILED', () => {
    expect(
      github(undefined, {
        type: GITHUB_FETCH_FAILED,
        payload: [{id: 1, language: 'php'}, {id: 2, language: 'html'}]
      })
    ).toEqual({
			fetchedRepos: [],
			filteredRepos: [],
			favouriteRepos: [],
			languages: [],
			githubDataError: "ERROR"
    })
	})

	it('should handle ADD_TO_FAVOURITES', () => {
    expect(
      github(undefined, {
        type: ADD_TO_FAVOURITES,
        payload: [{id: 2, language: 'html'}]
      })
    ).toEqual({
			fetchedRepos: [],
			filteredRepos: [],
			favouriteRepos: [{id: 2, language: 'html'}],
			languages: [],
			githubDataError: ""
    })
	})
	
	it('should handle REMOVE_FROM_FAVOURITES', () => {
    expect(
      github(undefined, {
        type: REMOVE_FROM_FAVOURITES,
        payload: [{id: 1, language: 'php'}]
      })
    ).toEqual({
			fetchedRepos: [],
			filteredRepos: [],
			favouriteRepos: [],
			languages: [],
			githubDataError: ""
    })
  })
})