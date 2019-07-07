const mysql = require('mysql');
const config = require('config');
const cLog = require('./console');

const dbConfig = config.get('database');

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {

  if (err) {

    cLog.error(`Cannot connect to database:: `, err);

  }

  cLog.success(`Connected to database ${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`);

});

module.exports = connection;
