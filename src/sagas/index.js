import { put, takeLatest } from 'redux-saga/effects'

import { GITHUB_FETCH_INIT, GITHUB_FETCH_SUCCESS, GITHUB_FETCH_FAILED } from '../constants/github';
import axios from 'axios';

function* fetchGithub(action) {
  console.log('fetchGithub', action)
  try {
    const response = yield axios.get('https://api.github.com/users/Witek85/repos');
    yield console.log('axios', response.data);
    yield put({type: GITHUB_FETCH_SUCCESS, payload: 'TODO'});
  } catch (e) {
    yield console.log('e', e)
    yield put({type: GITHUB_FETCH_FAILED, message: 'ERROR'});
  } 
}

function* mySaga() {
  yield takeLatest(GITHUB_FETCH_INIT, fetchGithub);
}

export default mySaga;