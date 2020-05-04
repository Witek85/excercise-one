import { put, takeLatest } from 'redux-saga/effects'

import { GITHUB_FETCH_INIT, GITHUB_FETCH_SUCCESS, GITHUB_FETCH_FAILED, INIT_FAVOURITES, ADD_TO_FAVOURITES } from '../constants/github';
import axios from 'axios';

function* fetchGithub(action) {
  try {
    const response = yield axios.get('https://api.github.com/users/Appnroll/repos');
    yield put({type: GITHUB_FETCH_SUCCESS, payload: response.data});
  } catch (err) {
    yield put({type: GITHUB_FETCH_FAILED, message: err});
  } 
}

function* getFavourites() {
  try {
    const response = JSON.parse(localStorage.getItem('favouriteRepos'));
    yield response && put({type: ADD_TO_FAVOURITES, payload: response});
  } catch (err) {
    // do nothing
  } 
}

function* mySaga() {
  yield takeLatest(GITHUB_FETCH_INIT, fetchGithub);
  yield takeLatest(INIT_FAVOURITES, getFavourites);
}

export default mySaga;