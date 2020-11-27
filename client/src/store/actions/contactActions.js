import axios from '../../config/axios'
import {
  CONTACT_CREATE_REQUEST,
  CONTACT_CREATE_SUCCESS,
  CONTACT_CREATE_FAIL,
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL
} from '../constants/contactConstants'


export const createContact = (formData) => async (dispatch) => {
  console.log('enter create contact at action contact')
  try {
    dispatch({
      type: CONTACT_CREATE_REQUEST
    })

    const { data } = await axios.post('/contact', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })

    dispatch({
      type: CONTACT_CREATE_SUCCESS,
      payload: data
    })

    console.log(data, '<=== data create contact at action')

  } catch (error) {
    console.log(error, '<=== error create contact at action')
    dispatch({
      type: CONTACT_CREATE_FAIL,
      payload:
      error.response && error.response.data.errors
      ? error.response.data.errors
      : ['error unknown'],
    })
  }
}

export const listContact = () => async (dispatch) => {
  console.log('enter list contact at action')
  try {
    dispatch({
      type: CONTACT_LIST_REQUEST
    })

    const { data } = await axios.get('/contact')

    dispatch({
      type: CONTACT_LIST_SUCCESS,
      payload: data
    })

    console.log(data, '<=== data list contact')
  } catch (error) {
    console.log(error, '<=== error list contact at actions')
    dispatch({
      type: CONTACT_LIST_FAIL,
      payload: 
        error.response && error.response.data.errors
        ? error.response.data.errors
        : ['error unknown'],
    })
  }
}