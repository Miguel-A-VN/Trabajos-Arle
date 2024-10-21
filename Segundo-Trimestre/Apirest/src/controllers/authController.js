const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
  const { email, name, username, password } = req.body;

  User.create(email, name, username, password, (err, result) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.status(201).json({ message: 'User registered successfully' });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    
    if (results.length === 0 || results[0].password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
};

module.exports = { register, login };
