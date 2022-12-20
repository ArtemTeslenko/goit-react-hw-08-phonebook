import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from './Layout';
import { Register } from '../pages/Register';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';
import { getCurrentUser } from 'redux/authOperations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
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
