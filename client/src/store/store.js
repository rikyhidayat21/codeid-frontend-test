import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  contactCreateReducer,
  contactListReducer,
  contactDeleteReducer,
  contactEditReducer,
  contactGetByIdReducer,
} from "./reducers/contactReducers";

import {
  favoriteAddReducer,
  favoriteListReducer,
} from "./reducers/favoriteReducers";

const reducer = combineReducers({
  contactCreateReducer,
  contactListReducer,
  contactDeleteReducer,
  contactEditReducer,
  contactGetByIdReducer,
  favoriteAddReducer,
  favoriteListReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
