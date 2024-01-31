// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'bd_wiki',
      user: 'root',
      password: 'root'
    },
  }, 

  production: {
    client: 'pg',
    connection: {
      host: 'dpg-cmsnlcf109ks73e26lkg-a.oregon-postgres.render.com',
      port: '5432',
      user: 'salokin',
      password: 'ODWe7bQgd0DTQtneviX3vinFOxUrA3cA',
      database: 'nikolas',
      ssl: true
    },
  },

};
