import Api from '@/services/Api'

export default {
  getWord (params) {
    return Api().get('?limit=1&headword=' + params.word)
  },
}
