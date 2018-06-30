# smallapp-koa
创建小程序后台，前台代码在 https://console.cloud.tencent.com/devmaster

## 还需要一下工作

- 创建mysql数据库
- 添加在package里runtime插件，stag-0
- 处理antd无法加载css

## 修改config.js

```
const config = {
  // 启动端口
  port: 3001,

  // 数据库配置
  database: {
    DATABASE: 'small_app',
    USERNAME: 'root',
    PASSWORD: 'root',
    PORT: '3306',
    HOST: 'localhost'
  }
}
```

## 安装依赖
cnpm install

## 数据建库初始化
npm run init_sql

## 编译react.js源码
npm run start_static

## 启动服务
npm run start_server

