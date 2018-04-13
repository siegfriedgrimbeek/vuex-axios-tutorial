import axios from 'axios'
axios.defaults.withCredentials = true

export default() => {
  return axios.create({
    baseURL: `http://api.pearson.com/v2/dictionaries/wordwise/entries`
  })
}
