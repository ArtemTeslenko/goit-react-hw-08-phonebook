import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Register } from '../pages/Register';
import { Login } from 'pages/Login';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<div>contacts</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

/* <div className="mainContainer">
  <h1 className="header">Phonebook</h1>
  <ContactForm />
  <h2 className="header">Contacts</h2>
  <Filter />
  <ContactList />
</div>; */
