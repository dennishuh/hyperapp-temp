import axios from 'axios';
import { API_URL } from './constants';

const getRequest = url => {
  return axios.get(url).catch(
    err => console.log(err)
  )
}

export default {
  getQuery: city => getRequest(API_URL + `${city}&appid=6ebf98a2e1d8ea75afaf3a6f8370b967`)
}
