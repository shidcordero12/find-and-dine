import axios from 'axios';
require('dotenv').config();

export default axios.create({
  baseURL: process.env.YELP_API_URL,
  headers: {
    common: {
      Accept: 'application/json, application/xml, text/play, text/html, *.*',
      'Content-Type': 'application/json',
      Authorization: process.env.YELP_API_KEY,
    },
  },
});
