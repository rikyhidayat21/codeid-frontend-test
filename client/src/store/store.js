import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  contactCreateReducer,
  contactListReducer,
  contactDeleteReducer,
  contactEditReducer,
  contactGetByIdReducer,
} from "./reducers/contactReducers";

const reducer = combineReducers({
  contactCreateReducer,
  contactListReducer,
  contactDeleteReducer,
  contactEditReducer,
  contactGetByIdReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
