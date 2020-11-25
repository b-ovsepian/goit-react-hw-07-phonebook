import { createAction } from "@reduxjs/toolkit";

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

const addContactRequest = createAction(ADD_CONTACT_REQUEST);
const addContactSuccess = createAction(ADD_CONTACT_SUCCESS);
const addContactError = createAction(ADD_CONTACT_ERROR);

const fetchContactsRequest = createAction(FETCH_CONTACTS_REQUEST);
const fetchContactsSuccess = createAction(FETCH_CONTACTS_SUCCESS);
const fetchContactsError = createAction(FETCH_CONTACTS_ERROR);

const deleteContactRequest = createAction(DELETE_CONTACT_REQUEST);
const deleteContactSuccess = createAction(DELETE_CONTACT_SUCCESS);
const deleteContactError = createAction(DELETE_CONTACT_ERROR);

const changeFilter = createAction(CHANGE_FILTER);
const changeError = createAction(CHANGE_ERROR);

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  changeError,
};
