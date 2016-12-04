var sworm = require('sworm');

var db = sworm.db({
  driver: 'mssql',
  config: {
    user: 'nodejsuser',
    password: 'nodejs',
    host: 'localhost',
    database: 'AdventureWorks2008R2_Data'
  }
});

function createDB(){
		return db;
}

module.exports = function () {
    return createDB;
}