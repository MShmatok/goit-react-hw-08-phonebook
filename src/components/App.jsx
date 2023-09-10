import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, SubTitle } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllthunk } from 'redux/contact/thunk';
import ContainerTitle from './ContainerTitle/ConteinerTitle';
import { ToastContainer } from 'react-toastify';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Contacts from './pages/contact/Contact';
import Registration from './pages/registration/Registration';
import Login from './pages/login/Login';
import { GlobalStyle } from './GlobalStyled';
import ModalChangeContact from './pages/modalChange/ModalChangeContact';
import PublicRoute from 'guards/PublicRoute';
import PrivateRoute from 'guards/PrivateRoute';
import { refreshUser } from 'api/auth';
import { refreshUserThunk } from 'redux/auth/thunk';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
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
    </>
    // <Container>
    //   <ContainerTitle />
    //   <ContactForm />
    //   <SubTitle>Contacts</SubTitle>
    //   <Filter />
    //   <ContactList />
    //   <ToastContainer
    //     position="top-center"
    //     autoClose={3000}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //     theme="light"
    //   />
    // </Container>
  );
};

export { App };
