module.exports = {
  publicPath: '/',
  outputDir: 'dist/',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/stylesheet/base.scss";`
      }
    }
  }
};
