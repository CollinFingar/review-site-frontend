import axios from 'axios';

export const retrieveAuthors = (succCallback, errCallback) => {
  axios.get('http://averageoutlooks.com:1337/authors')
    .then(res => {
      succCallback(res.data);
    })
    .catch(function (error) {
      errCallback(error);
    })
}
