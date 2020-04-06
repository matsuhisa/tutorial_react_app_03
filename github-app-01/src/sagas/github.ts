import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

import * as Action from '../actions/githubConstants'
import { getMembers } from '../actions/github'
import { getMembersFactory } from '../services/github/api'

function* runGetMembers(action: ReturnType<typeof getMembers.start>) {
  const{ companyName } = action.payload

  try {
    const api = getMembersFactory()
    const users = yield call(api, companyName)

    yield put(getMembers.success({ companyName }, { users }))
  } catch(err) {
    yield put(getMembers.fail({ companyName }, err))
  }
}

export function* watchGetMembers() {
  yield takeLatest(Action.GET_MEMBERS_START, runGetMembers)
}

export default function* rootSaga() {
  yield all([fork(watchGetMembers)])
}