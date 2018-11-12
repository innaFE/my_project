import * as types from './type'

export function saveUserProfile (params) {
  return (dispatch, getState) => {
    console.log('save profile', params)
    dispatch(user_profile_save(getState(), params))
  }
}

export function user_profile_save (state, userProfile) {
  return {
    type: types.USER_PROFILE_SAVE,
    userProfile
  }
}
