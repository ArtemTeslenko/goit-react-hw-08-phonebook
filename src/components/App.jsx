import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from './Layout';
import { Register } from '../pages/Register';
import { Login } from 'pages/Login';
import { getCurrentUser } from 'redux/authOperations';
import { Contacts } from 'pages/Contacts';
import { PrivateRoute, PublicRoute } from 'routes';
import { useState } from 'react';
import { renewError } from 'redux/authSlice';

function App() {
  const [currentPath, setCurrentPath] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(renewError());
  }, [currentPath, dispatch]);

  const handleCurrentPath = path => {
    setCurrentPath(path);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="register"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <Register setPath={handleCurrentPath} />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <Login setPath={handleCurrentPath} />
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
