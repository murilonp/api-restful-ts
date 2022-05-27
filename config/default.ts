const dbUser = process.env.DB_USER_NAME;
const dbPassword = process.env.DB_USER_PASSWORD;

export default {
  port: 3000,
  dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.em01q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  env: 'development'
};
