import { all } from 'react-saga/effects'

import auth from './auth/sagas'
import user from './user/sagas'

export default function* rootSaga() {
  return yield all([auth, user])
}
