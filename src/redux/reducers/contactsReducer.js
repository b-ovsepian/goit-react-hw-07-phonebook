import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_ERROR,
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_ERROR,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_ERROR,
  CHANGE_FILTER,
  CHANGE_ERROR,
} from "../constants";

const items = createReducer([], {
  [FETCH_CONTACTS_SUCCESS]: (state, { payload }) => payload,
  [ADD_CONTACT_SUCCESS]: (state, { payload }) => [...state, payload],
  [DELETE_CONTACT_SUCCESS]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [CHANGE_FILTER]: (state, { payload }) => payload,
});

const error = createReducer("", {
  [CHANGE_ERROR]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [ADD_CONTACT_REQUEST]: () => true,
  [ADD_CONTACT_SUCCESS]: () => false,
  [ADD_CONTACT_ERROR]: () => false,
  [FETCH_CONTACTS_REQUEST]: () => true,
  [FETCH_CONTACTS_SUCCESS]: () => false,
  [FETCH_CONTACTS_ERROR]: () => false,
  [DELETE_CONTACT_REQUEST]: () => true,
  [DELETE_CONTACT_SUCCESS]: () => false,
  [DELETE_CONTACT_ERROR]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
