import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from './Layout';
import { Register } from '../pages/Register';
import { Login } from 'pages/Login';
import { getCurrentUser } from 'redux/authOperations';
import { Contacts } from 'pages/Contacts';
import { PrivateRoute, PublicRoute } from 'routes';
import { selectAuthError } from 'redux/selectors';

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="register"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
        <Route element={error && <p>{error}</p>} />
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
