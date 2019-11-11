export function updateProfileRequest(name, email, senha) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { name, email, senha }
  }
}

export function updateProfileSuccess() {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: {}
  }
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE'
  }
}
