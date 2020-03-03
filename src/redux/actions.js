import { STORE_DATA } from "./actionTypes";
import axios from 'axios';

const getAuthors = () => {
  return axios.get('https://data.averageoutlooks.com/average-outlooks/items/authors');
}

const getReviews = () => {
  return axios.get('https://data.averageoutlooks.com/average-outlooks/items/reviews?filter[featured][nnull]');
}

const getFiles = () => {
  return axios.get('https://data.averageoutlooks.com/average-outlooks/files');
}

export const fetchInitialData = () => {
  return (dispatch) => {
    return axios.all([getAuthors(), getReviews(), getFiles()])
    .then(axios.spread((authors, reviews, files) => {
      dispatch(storeInitialData(authors, reviews, files));
    }))
    .catch(error => {
      console.log(error)
      throw(error)   
    });
  }
};

export const storeInitialData = (authors, reviews, files) => {
  return {
    type: STORE_DATA,
    payload: {
      authors: authors.data && authors.data.data || [],
      featuredReviews: reviews.data && reviews.data.data || [],
      files: files.data && files.data.data || []
    }
  }
};
