import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://api.pearson.com/v2/dictionaries`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
