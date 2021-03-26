import React, { useState, useEffect } from 'react';
import Header from './common/Header';
import ProductList from './products/List';
import User from './user/User';
import localStorage from '../services/localStorage';
import api from '../services/api';

const App = () => {
  // state

  const localStorageUser = localStorage.get('user');
  const [userId, setUserId] = useState(localStorageUser.userId || '');
  const [loginError, setLoginError] = useState({});
  const [shopProducts, setShopProducts] = useState([]);

  // effects

  useEffect(() => {
    api.getProducts().then((data) => {
      setShopProducts(data);
    });
  }, []);

  // events: user

  const handleLogin = (userData) => {
    api.sendLogin(userData).then((data) => {
      if (data.error === false) {
        setUserId(data.userId);
        localStorage.set('user', data);
      } else {
        setLoginError(data);
      }
    });
  };

  const handleLogout = () => {
    localStorage.remove('user');
    window.location.reload();
  };

  // events: products

  const incrementCartProduct = () => {
    console.log('Han pulsado en incrementar');
  };

  // render

  return (
    <>
      <Header />
      <User
        isUserLogged={!!userId}
        loginError={loginError}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <ProductList
        products={shopProducts}
        incrementCartProduct={incrementCartProduct}
      />
    </>
  );
};

export default App;
