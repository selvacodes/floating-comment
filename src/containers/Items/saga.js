import { call, put } from 'redux-saga/effects'
import { loadItem } from './action_creators'

// wait :: Number -> Promise
const getItems = () => {
  return Promise.resolve( [
      { id: 3, text: 'Third', showComments: false },
      { id: 4, text: 'Four', showComments: false }
    ])
}

function* loadItems () {
  console.log('loadItems')
  try {
    // 1st step 
    const userData = yield call(getItems)
    console.log(userData)
    // 2nd step
    yield put(loadItem(userData))
  } catch(error) {
    yield put({type: 'FETCH_FAILED', error})
  }
}

export default loadItems
