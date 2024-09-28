module.exports = function override(config, env) {
    if (env === "production") {
      // Set optimization.minimize to false
      config.optimization.minimize = false;
    }
    return config;
  };
  