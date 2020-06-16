/*
 * @Author: siwenfeng
 * @Date: 2020-06-12 16:32:23
 * @LastEditTime: 2020-06-12 16:42:14
 * @Description: this is ....
 */
'use strict'
const path = require('path')
const defaultSettings = require('./src/setting.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title // 网址标题
const port = 8028 // 端口配置

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  // publicPath: '/',
  // outputDir: 'dist',
  // assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'api'
        }
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
  }
}
