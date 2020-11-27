import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { contactCreateReducer, contactListReducer } from './reducers/contactReducers'

const reducer = combineReducers({
  contactCreateReducer,
  contactListReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store;