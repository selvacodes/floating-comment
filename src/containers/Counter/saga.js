import { call, put} from 'redux-saga/effects'
import { increaseCounter } from './action_creators'

// wait :: Number -> Promise
const wait = ms => (
new Promise(resolve => {
  setTimeout(() => resolve(), ms)
})
)

function * runTimer () {
  while (true) {
    yield call(wait, 10000)
    yield put(increaseCounter())
  }
}

export default runTimer
