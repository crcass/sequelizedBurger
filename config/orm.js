const connection = require('./connection.js');

const orm = {
  selectAll(table, cb) {
    const queryString = `SELECT id, burger_name, devoured FROM ${table};`;
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  insertOne(table, cols, vals, cb) {
    const queryString = `INSERT INTO ${table} (${cols}) VALUES(?, ?);`;
    connection.query(queryString, vals, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  updateOne(table, col, val, cond, cb) {
    const queryString = `UPDATE ${table} SET ${col} = ${val} WHERE ?`;
    connection.query(queryString, cond, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
};

module.exports = orm;
