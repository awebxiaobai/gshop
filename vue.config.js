module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
        }
    },
    // 关闭语法检查
    lintOnSave: false,
    // 开启代理服务器(方式1)
    /* devServer: {
        proxy: 'http://localhost:5000'
      } */
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                pathRewrite: { '^/api': '' },
                // ws: true,  //用于支持websocket
                // changeOrigin: true //用于控制请求头中的host值
            },
            /* '/demo': {
                target: 'http://localhost:5001',
                pathRewrite:{'^/demo':''},
                // ws: true,  //用于支持websocket
                // changeOrigin: true //用于控制请求头中的host值
            }, */
        }
    },
    /* 'plugins': ['transform-vue-jsx', 'transform-runtime', ['component', [
        {
            libraryName:'mint-ui',
            style:true
        }
    ]]] */
}