module.exports = ({ env }) => ({
  proxy: true,
  url: env("MY_HEROKU-URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
