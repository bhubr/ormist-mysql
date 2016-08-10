var mysql = require('promise-mysql');

module.exports = {
  connection: null,

  onConnectionReady(conn) {
    this.connection = conn;
    return this;
  },

  connect: function(params) {
    return mysql.createConnection(params)
    .then(this.onConnectionReady.bind(this));
  },

  query: function(sql) {
    return this.connection.query(sql);
  }
};