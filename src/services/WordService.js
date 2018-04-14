import Api from '@/services/Api'

export default {
  getWord (params) {
    return Api().get('/wordwise/entries?limit=1&headword=' + params.word)
  },
  getWordDetails (params) {
    return Api().get('/entries/' + params)
  }
}
