const config = {
  dev: {
    port: 3003,

    db: {
      name: 'elapse',
      host: '127.0.0.1',
      port: 27017,
      user: 'zxx',
      pwd:  'zx123',
    },
    secret: 'elapse',         // jwt生成token
    salt: 'elapse-server2018' // md5加密盐值
  },

  prod: {

  }
}

module.exports = config[process.env.NODE_ENV]
