module.exports = {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        // Example: Disable CSS minification
        webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.filter(
          (minimizer) => minimizer.constructor.name !== 'CssMinimizerPlugin'
        );
        return webpackConfig;
      },
    },
  };