const db = require('../config/db');

const User = {
  create: (email, name, username, password, callback) => {
    const query = 'INSERT INTO users (email, name, username, password) VALUES (?, ?, ?, ?)';
    db.query(query, [email, name, username, password], callback);
  },

  findByEmail: (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], callback);
  }
};

module.exports = User;
