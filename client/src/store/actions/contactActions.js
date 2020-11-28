import axios from "../../config/axios";
import {
  CONTACT_CREATE_REQUEST,
  CONTACT_CREATE_SUCCESS,
  CONTACT_CREATE_FAIL,
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL,
  CONTACT_DELETE_REQUEST,
  CONTACT_DELETE_SUCCESS,
  CONTACT_DELETE_FAIL,
  CONTACT_EDIT_REQUEST,
  CONTACT_EDIT_SUCCESS,
  CONTACT_EDIT_FAIL,
  CONTACT_EDIT_RESET,
  CONTACT_GETBYID_REQUEST,
  CONTACT_GETBYID_SUCCESS,
  CONTACT_GETBYID_FAIL,
} from "../constants/contactConstants";

export const createContact = (formData) => async (dispatch) => {
  console.log("enter create contact at action contact");
  try {
    dispatch({
      type: CONTACT_CREATE_REQUEST,
    });

    const { data } = await axios.post("/contact", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch({
      type: CONTACT_CREATE_SUCCESS,
      payload: data,
    });

    console.log(data, "<=== data create contact at action");
  } catch (error) {
    console.log(error, "<=== error create contact at action");
    dispatch({
      type: CONTACT_CREATE_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : ["error unknown"],
    });
  }
};

export const listContact = () => async (dispatch) => {
  console.log("enter list contact at action");
  try {
    dispatch({
      type: CONTACT_LIST_REQUEST,
    });

    const { data } = await axios.get("/contact");
    // console.log(data.data, "<=== data.data at action");
    dispatch({
      type: CONTACT_LIST_SUCCESS,
      payload: data.data,
    });

    console.log(data.data, "<=== data list contact at actions");
  } catch (error) {
    console.log(error, "<=== error list contact at actions");
    dispatch({
      type: CONTACT_LIST_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : ["error unknown"],
    });
  }
};

export const editContact = (id, formData) => async (dispatch) => {
  console.log("enter edit contact");
  console.log(id, "<=== id at edit contact");
  try {
    dispatch({
      type: CONTACT_EDIT_REQUEST,
    });

    const { data } = await axios.put(`/contact/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch({
      type: CONTACT_EDIT_SUCCESS,
      payload: data,
    });

    dispatch({
      type: CONTACT_EDIT_RESET,
    });

    console.log(data, "<=== data edit contact at action");
  } catch (error) {
    console.log(error, "<=== error edit contact at action");
    dispatch({
      type: CONTACT_EDIT_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : ["error unknown"],
    });
  }
};

export const deleteContact = (id) => async (dispatch) => {
  console.log("enter delete contact action");
  console.log(id, "<=== id contact at action");
  try {
    dispatch({
      type: CONTACT_DELETE_REQUEST,
    });

    const { data } = await axios.delete(`/contact/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(
      data,
      "<=== data delete before dispatch contact delete success"
    );
    dispatch({
      type: CONTACT_DELETE_SUCCESS,
    });

    dispatch(listContact());

    console.log(data, "<=== delete contact at action");
  } catch (error) {
    console.log(error, "<=== error delete action");
    dispatch({
      type: CONTACT_DELETE_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : ["error unknown"],
    });
  }
};

export const getByIdContact = (contactId) => async (dispatch) => {
  console.log("enter get by id at action");
  console.log(contactId, "<=== contact id at action");
  try {
    dispatch({
      type: CONTACT_GETBYID_REQUEST,
    });

    const { data } = await axios.get(`/contact/${contactId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: CONTACT_GETBYID_SUCCESS,
      payload: data.data,
    });

    console.log(data.data, "<=== get by id contact at action");
  } catch (error) {
    console.log(error, "<=== error get by id contact");
    dispatch({
      type: CONTACT_GETBYID_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : ["error unknown"],
    });
  }
};
