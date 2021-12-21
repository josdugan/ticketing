module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
  env: {
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  },
};
