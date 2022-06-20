export default () => ({
  APP_PORT: parseInt(process.env.PORT, 10) || 4000,
  MONGO_URL: process.env.MONGO_URL,
});
