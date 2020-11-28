import axios from "../../config/axios";
import {
  FAVORITE_ADD_REQUEST,
  FAVORITE_ADD_SUCCESS,
  FAVORITE_ADD_FAIL,
  FAVORITE_LIST_REQUEST,
  FAVORITE_LIST_SUCCESS,
  FAVORITE_LIST_FAIL,
} from "../constants/favoriteConstants";

export const addFavorite = (id) => async (dispatch) => {
  console.log("enter add favorite at action");
  console.log(id, "<=== id at action");
  try {
    dispatch({
      type: FAVORITE_ADD_REQUEST,
    });

    const { data } = await axios.post(`/favorite/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: FAVORITE_ADD_SUCCESS,
      payload: data.data,
    });

    console.log(data.data, "<=== add favorite contact at action");
  } catch (error) {
    console.log(error, "<=== error add favorite");
    dispatch({
      type: FAVORITE_ADD_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : ["error unknown"],
    });
  }
};

export const listFavorite = () => async (dispatch) => {
  console.log("enter list favorite at action");
  try {
    dispatch({
      type: FAVORITE_LIST_REQUEST,
    });

    const { data } = await axios.get("/favorites");

    dispatch({
      type: FAVORITE_LIST_SUCCESS,
      payload: data.data,
    });

    console.log(data, "<=== data list favorites at action");
  } catch (error) {
    console.log(error, "<=== error list favorites at action");
    dispatch({
      type: FAVORITE_LIST_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : ["error unknown"],
    });
  }
};
