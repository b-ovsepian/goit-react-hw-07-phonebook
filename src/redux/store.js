import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./reducers/contactsReducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: [...getDefaultMiddleware()],
});

export default store;
