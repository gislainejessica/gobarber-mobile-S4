import produce from 'immer'

const INICIAL_STATE = {
  name: null,
  email: null,
  senha: null
}

export default function user(state = INICIAL_STATE, action) {
  switch (action.type) {
    case '@auth/UPDATE_PROFILE_SUCCESS':
      return produce(state, draft => {
        draft.name = action.payload.name
        draft.email = action.payload.email
      })
    default:
      return state
  }
}
