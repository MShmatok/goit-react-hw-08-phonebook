import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, SubTitle } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllthunk } from 'redux/thunk';
import ContainerTitle from './ContainerTitle/ConteinerTitle';
import { ToastContainer } from 'react-toastify';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Contacts from './pages/contact/Contact';
import Registration from './pages/registration/Registration';
import Login from './pages/login/Login';
import { GlobalStyle } from './GlobalStyled';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllthunk());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
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
