const url = 'http://localhost:3000/api/products';

const getProducts = () => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const urlSend = 'http://localhost:3000/api/user/login';
const sendLogin = (userData) => {
  return fetch(urlSend, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default {
  getProducts: getProducts,
  sendLogin: sendLogin,
};
