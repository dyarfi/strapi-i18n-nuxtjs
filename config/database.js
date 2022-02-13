module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      // postgres://bxgnmxyi:sJ_qFpCBGIg_qt88juXHGMP7jQUTb6jk@john.db.elephantsql.com/bxgnmxyi
      host: env("DATABASE_HOST", "john.db.elephantsql.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "bxgnmxyi"),
      user: env("DATABASE_USERNAME", "bxgnmxyi"),
      schema: env("DATABASE_SCHEMA", "public"),
      password: env("DATABASE_PASSWORD", "sJ_qFpCBGIg_qt88juXHGMP7jQUTb6jk"),
      // host: env("DATABASE_HOST", "127.0.0.1"),
      // port: env.int("DATABASE_PORT", 5432),
      // database: env("DATABASE_NAME", "strapi-postgres"),
      // user: env("DATABASE_USERNAME", "postgres"),
      // schema: env("DATABASE_SCHEMA", "public"),
      // password: env("DATABASE_PASSWORD", "example"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
