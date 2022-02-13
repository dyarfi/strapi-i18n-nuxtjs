const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));
  console.log(host, port, database, user, password);
  return {
    defaultConnection: "default",
    connection: {
      client: "postgres",
      connection: {
        // host: env("DATABASE_HOST", "127.0.0.1"),
        // port: env.int("DATABASE_PORT", 5432),
        // database: env("DATABASE_NAME", "strapi-postgres"),
        // user: env("DATABASE_USERNAME", "postgres"),
        // password: env("DATABASE_PASSWORD", "example"),
        host,
        port,
        database,
        username: user,
        password,
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
  };
};
