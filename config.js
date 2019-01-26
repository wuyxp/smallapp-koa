const config = {

  development: {
    port: 3001,
    database: {
      DATABASE: 'small_app',
      USERNAME: 'root',
      PASSWORD: 'root',
      PORT: '3306',
      HOST: 'localhost'
    }
  },
  production: {
    port: 80,
    database: {
      DATABASE: 'small_app',
      USERNAME: 'root',
      PASSWORD: 'wuyxp123',
      PORT: '3306',
      HOST: '172.27.27.9'
    }
  }
}

const argv = process.argv.reduce((result, item, index, _argv) => {
    if(item.startsWith('--')){
        result[item.slice(2)] = _argv[index+1]
    }
    return result
}, {})

module.exports = config[argv.env] 