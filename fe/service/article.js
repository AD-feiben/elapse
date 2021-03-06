import axios from './config'

class ArticlerService {
  static constructor() {}

  static async fetchArticles(classify) {
    const query = `classify=${classify}&state=publish`

    const req = { 
      url: `/article?${query}`, 
      method: 'get' 
    }

    try {
      const res = await axios(req)
      return res && res.data && res.data.items || []
    } catch (err) {
      throw new Error(err)
    }
  }

  static async fetchArticleById(id) {
    const req = { url: '/article' + '/' + id, method: 'get' }

    try {
      const res = await axios(req)

      return res.data.article
    } catch (err) {
      throw new Error(err)
    }
  }

  // 获取文章分类
  static async fetchArticleClassifies() {
    const req = { url: '/classify', method: 'get' }

    try {
      const res = await axios(req)

      return res.data.items
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default ArticlerService
