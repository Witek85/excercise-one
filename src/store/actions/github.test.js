import { githubInit, filterRepos, initFavourites, addToFavourites, removeFromFavourites } from './github';
import { GITHUB_FETCH_INIT, FILTER_REPOS, INIT_FAVOURITES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../constants/github';

describe('actions', () => {
  it('should create an action to init fetch github repos', () => {
    const payload = 'payload'
    const expectedAction = {
      type: GITHUB_FETCH_INIT,
    }
    expect(githubInit(payload)).toEqual(expectedAction);
	})
	
	it('should create an action to filter repos', () => {
    const payload = 'payload'
    const expectedAction = {
      type: FILTER_REPOS,
      payload
    }
    expect(filterRepos(payload)).toEqual(expectedAction);
	})
	
	it('should create an action to init fetch favourites from local storage', () => {
    const payload = 'payload'
    const expectedAction = {
      type: INIT_FAVOURITES,
    }
    expect(initFavourites(payload)).toEqual(expectedAction);
	})
	
	it('should create an action to add favourites', () => {
    const payload = 'payload'
    const expectedAction = {
      type: ADD_TO_FAVOURITES,
      payload
    }
    expect(addToFavourites(payload)).toEqual(expectedAction);
	})
	
	it('should create an action to remove favourites', () => {
    const payload = 'payload'
    const expectedAction = {
      type: REMOVE_FROM_FAVOURITES,
      payload
    }
    expect(removeFromFavourites(payload)).toEqual(expectedAction);
  })
})