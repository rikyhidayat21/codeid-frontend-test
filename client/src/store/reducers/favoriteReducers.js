import {
  FAVORITE_ADD_REQUEST,
  FAVORITE_ADD_SUCCESS,
  FAVORITE_ADD_FAIL,
  FAVORITE_LIST_REQUEST,
  FAVORITE_LIST_SUCCESS,
  FAVORITE_LIST_FAIL,
} from "../constants/favoriteConstants";

export const favoriteAddReducer = (
  state = { loading: false, success: false, favorite: {}, errors: [] },
  action
) => {
  switch (action.type) {
    case FAVORITE_ADD_REQUEST:
      return { loading: true };
    case FAVORITE_ADD_SUCCESS:
      return { loading: false, success: true, favorite: action.payload };
    case FAVORITE_ADD_FAIL:
      return { loading: false, favorite: {}, errors: action.payload };
    default:
      return state;
  }
};

export const favoriteListReducer = (
  state = { loading: false, favorites: [], errors: [] },
  action
) => {
  switch (action.type) {
    case FAVORITE_LIST_REQUEST:
      return { loading: true };
    case FAVORITE_LIST_SUCCESS:
      return { loading: false, favorites: action.payload };
    case FAVORITE_LIST_FAIL:
      return { loading: false, favorites: [], errors: action.payload };
    default:
      return state;
  }
};
