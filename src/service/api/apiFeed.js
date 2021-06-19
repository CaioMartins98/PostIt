const axios = require('axios');

const apiFeed = ({ content }) => {
  const URL = 'https://segware-book-api.segware.io/api';

  // const jwt = (res) => localStorage.setItem('JWT', res.data);
  const token = localStorage.getItem('token');
  axios
    .post(
      `${URL}/feed`,
      {
        content: content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      console.log(response);
      console.log(token);

      // if (response.status == 200) {
      //   alert(`Sua senha é : ${response.data.password}`);
      //   return (window.location.href = 'http://localhost:3000/');
      // }
      // alert('Usuário não existe, tente novamente!');
    })
    .catch((err) => {
      console.log(err);
    });
};

export default apiFeed;
