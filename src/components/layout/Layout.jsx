import LinearIndeterminate from 'components/loaderMui/LoaderMui';
import Header from 'components/pages/header/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoading } from 'redux/selectors';

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <Header />
      {isLoading && <LinearIndeterminate />}
      <Outlet />
    </>
  );
};

export default Layout;
