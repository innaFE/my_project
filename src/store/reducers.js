import { combineReducers } from 'redux'
import locationReducer from './location'
import * as userReducer from '../redux/reducers/user'

export const makeRootReducer = asyncReducers => {
  return combineReducers(Object.assign({ location: locationReducer }, userReducer))
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
