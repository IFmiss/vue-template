const path = require('path')
console.log(process.env.NODE_ENV)
function resolve (dir) {
  return path.join(__dirname, dir)
}
// vue 的配置
module.exports = {
  // 部署应用时的基本 URL。用法和 webpack 本身的 output.publicPath 一致，但是 Vue CLI 在一些其他地方也需要用到这个值，所以请始终使用 baseUrl 而不要直接修改 webpack 的 output.publicPath
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  outputDir: 'dist',
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  lintOnSave: 'error',
  productionSourceMap: false,
  // css相关
  css: {
    loaderOptions: {
    }
  },
  devServer: {
    proxy: '',
    port: 1994
  },
  chainWebpack: (config) => {
    // 配置alias
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('config', resolve('src/config'))
      .set('style', resolve('src/style'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
      .set('store', resolve('src/store'))
      .set('api', resolve('src/api'))
      .set('filter', resolve('src/filter'))
      .set('directive', resolve('src/directive'))
    // less
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/style/base.less'),
      ],
    })
}