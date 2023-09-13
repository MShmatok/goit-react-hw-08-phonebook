import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from '../pages/home/Home';
import Contacts from '../pages/contact/Contact';
import Registration from '../pages/registration/Registration';
import Login from '../pages/login/Login';
import { GlobalStyle } from './GlobalStyled';
import ModalChangeContact from '../pages/modalChange/ModalChangeContact';
import PublicRoute from 'guards/PublicRoute';
import PrivateRoute from 'guards/PrivateRoute';

import { refreshUserThunk } from 'redux/auth/thunk';
import { ToastContainer } from 'react-toastify';
import { selectorIsRefreshing } from 'redux/auth/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshin = useSelector(selectorIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshin ? (
    <b>Refreshing user ...</b>
  ) : (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ModalChangeContact />
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export { App };
