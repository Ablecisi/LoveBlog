// const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = {
  transpileDependencies: true,
  // 解决跨域
  devServer: {
    host: 'localhost',
    port: 9537,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/',
        },
      },
      '/imgload': {  // 代理图片加载
        target: 'https://pic.netbian.com/',  // 目标地址
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/imgload': '/',  // 重写路径
        },
        onProxyReq: (proxyReq) => {
          proxyReq.setHeader('Origin', 'https://pic.netbian.com');  
        },
        onProxyRes: (proxyRes) => {
          proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        },
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false), // 关闭vue3.0.0-rc.1 以上版本的生产环境警告
      }),
    ],
  },
};
