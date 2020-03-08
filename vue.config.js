const {
  env: { BASE_URL },
  VUE_CLI_SERVICE: { mode }
} = process;
// eslint-disable-next-line import/no-extraneous-dependencies
const px2rem = require('postcss-px2rem');

const postcss = px2rem({
  remUnit: 192 // 基准大小 baseSize，需要和rem.js中相同
});

module.exports = {
  // 修改为相对路径
  // publicPath: `.${BASE_URL}`, // npm run build 使用
  publicPath: BASE_URL, // git push origin integration 使用
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8080
  },
  productionSourceMap: mode !== 'production',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss]
      }
    }
  }
};
