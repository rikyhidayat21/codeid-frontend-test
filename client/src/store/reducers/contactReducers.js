import {
  CONTACT_CREATE_REQUEST,
  CONTACT_CREATE_SUCCESS,
  CONTACT_CREATE_FAIL,
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL
} from '../constants/contactConstants'

export const contactCreateReducer = (
  state = { loading: false, success: false, contact: {}, errors: []}, action
) => {
  switch (action.type) {
    case CONTACT_CREATE_REQUEST:
      return { loading: true}
    case CONTACT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload}
    case CONTACT_CREATE_FAIL:
      return { loading: false, contact: {}, errors: action.payload}
    default:
      return state
  }
}

export const contactListReducer = (
  state = { loading: false, contacts: [], errors: []}, action
) => {
  switch (action.payload) {
    case CONTACT_LIST_REQUEST:
      return { loading: true }
    case CONTACT_LIST_SUCCESS:
      return { loading: false, contacts: action.payload }
    case CONTACT_LIST_FAIL:
      return { loading: false, contacts: [], errors: action.payload}
    default:
      return state
  }
} 