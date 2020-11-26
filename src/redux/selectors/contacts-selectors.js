import { createSelector } from "reselect";

export const contactsSelector = (state) => state.contacts;
export const allContactsSelector = (state) => contactsSelector(state).items;
export const errorSelector = (state) => contactsSelector(state).error;
export const filterSelector = (state) => contactsSelector(state).filter;
export const loaderSelector = (state) => contactsSelector(state).loading;

export const getVisibleContacts = createSelector(
  [allContactsSelector, filterSelector],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
