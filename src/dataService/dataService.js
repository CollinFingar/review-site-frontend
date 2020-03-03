import Prismic from 'prismic-javascript';
import { Date, Link, RichText } from 'prismic-reactjs';
const apiEndpoint = 'https://averageoutlooks.cdn.prismic.io/api/v2';
const accessToken = ''; // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken });

export const fetchData = async (callback) => {
	
  const response = await Client.query(
    Prismic.Predicates.at('document.type', 'review')
  )

  if (response) {
    callback(response);
  }
};

export const fetchAuthors = async (callback) => {
	
  const response = await Client.query(
    Prismic.Predicates.at('document.type', 'author')
  )

  if (response) {
    callback(response);
  }
};

export const fetchReview = async (uid, callback) => {
	
  const response = await Client.getByUID('review', uid);

  if (response) {
    callback(response);
  }
};

export const fetchReviews = async (callback) => {
	
  const response = await Client.query(
    Prismic.Predicates.at('document.type', 'review')
  )

  if (response) {
    callback(response);
  }
};
