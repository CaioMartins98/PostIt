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
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export default apiFeed;
