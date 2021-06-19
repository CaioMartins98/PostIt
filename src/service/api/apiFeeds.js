const axios = require('axios');

const apiFeeds = () => {
  const URL = 'https://segware-book-api.segware.io/api';

  const token = localStorage.getItem('token');
  axios
    .get(`${URL}/feeds`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log('data', data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default apiFeeds;
