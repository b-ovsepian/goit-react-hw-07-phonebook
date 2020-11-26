import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import contactsAction from "./redux/actions/contactsAction";
import contactsOperations from "./redux/operations/contactsOperations";
import Section from "./Components/Section/Section";
import ContactForm from "./Components/ContactForm/ContactForm";
import Contacts from "./Components/Contacts/Contacts";
import transition from "styled-transition-group";
import Loader from "react-loader-spinner";
import {
  loaderSelector,
  errorSelector,
} from "./redux/selectors/contacts-selectors";

const Div = transition.div.attrs({
  unmountOnExit: true,
  mountOnEntry: true,
  timeout: 250,
})`
position: absolute;
padding: 5px 10px;
width: 300px;

top: 10px;
left: 10px;

background-color: #6368e5;
border-radius: 8px;

text-align: center;
color: white;

  &:enter { opacity: 0; 
    transform: translateX(-100%); }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:exit { opacity: 1;
  transform: translateX(0); }
  &:exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => errorSelector(state));
  const loading = useSelector((state) => loaderSelector(state));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(contactsAction.changeError(""));
      }, 1500);
    }
  }, [error]);

  return (
    <>
      {loading && (
        <Loader
          className="Loader"
          type="Puff"
          color="#6368e5"
          height={100}
          width={100}
        />
      )}
      {
        <Div in={!!error}>
          <p>{error}</p>
        </Div>
      }
      <Section title={"Phonebook"}>
        <ContactForm />
      </Section>
      <Section title={"Contacts"}>
        <Contacts />
      </Section>
    </>
  );
};
export default App;
