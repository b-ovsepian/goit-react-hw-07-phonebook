import axios from "axios";
import contactsAction from "../actions/contactsAction";

axios.defaults.baseURL = "http://localhost:2000";

const addContact = (name, number) => (dispatch) => {
  dispatch(contactsAction.addContactRequest());

  axios
    .post("contacts", { name, number })
    .then(({ data }) => dispatch(contactsAction.addContactSuccess(data)))
    .catch((error) => dispatch(contactsAction.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsAction.fetchContactsRequest());

  axios
    .get("contacts")
    .then(({ data }) => dispatch(contactsAction.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactsAction.fetchContactsError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(contactsAction.deleteContactRequest());

  axios
    .delete(`contacts/${id}`)
    .then(() => dispatch(contactsAction.deleteContactSuccess(id)))
    .catch((error) => dispatch(contactsAction.deleteContactError(error)));
};

export default {
  addContact,
  fetchContacts,
  deleteContact,
};
