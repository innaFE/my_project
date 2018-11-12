import * as types from '../actions/type'
import createReducer from '../lib/createReducer'

export const user = createReducer([], {
  [types.USER_PROFILE_SAVE] (state, action) {
    console.log('reduce types.USER_PROFILE_SAVE', state, action)
    let newState = { ...state }
    newState = action.userProfile

    return newState
  }
})
