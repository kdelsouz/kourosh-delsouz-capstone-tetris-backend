module.exports = {
  development: {
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "rootroot",
        database: "tetris_db",
    }
  },
  production: {
    client: 'mysql',
    connection: process.env.JAWSDB_URL,
  },
};

