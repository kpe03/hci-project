const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3001; 

// Database file setup
const dbFile = './users.db'; 

// Connect database
const db = new sqlite3.Database(dbFile, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    // Create users table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      passwordHash TEXT NOT NULL
    )`, (err) => {
      if (err) {
        console.error('Error creating table', err.message);
      } else {
        console.log('Users table ready.');
      }
    });
  }
});

// Middleware
app.use(cors()); 
app.use(bodyParser.json());

// User register endpoint
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Check if user already exists in the database
  const checkUserSql = `SELECT username FROM users WHERE username = ?`;
  db.get(checkUserSql, [username], async (err, row) => {
    if (err) {
      console.error('Database error checking user:', err.message);
      return res.status(500).json({ message: 'Error checking username' });
    }
    if (row) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // If user does not exist, proceed with registration
    try {
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);

      // Store user in the database
      const insertSql = `INSERT INTO users (username, passwordHash) VALUES (?, ?)`;
      db.run(insertSql, [username, passwordHash], function(err) { // Use function() to access this.lastID
        if (err) {
          console.error('Database error registering user:', err.message);
          return res.status(500).json({ message: 'Error registering user' });
        }
        console.log(`User registered: ${username} with ID: ${this.lastID}`);
        res.status(201).json({ message: 'User registered successfully' });
      });
    } catch (error) {
      console.error('Error hashing password:', error);
      res.status(500).json({ message: 'Error during registration process' });
    }
  });
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Find the user in the database
  const findUserSql = `SELECT * FROM users WHERE username = ?`;
  db.get(findUserSql, [username], async (err, user) => {
    if (err) {
      console.error('Database error finding user:', err.message);
      return res.status(500).json({ message: 'Error finding user' });
    }
    if (!user) {
      return res.status(400).json({ message: 'That username does not exist. Please try again.' });
    }

    // User found, proceed to compare password
    try {
      const isMatch = await bcrypt.compare(password, user.passwordHash);

      if (isMatch) {
        console.log('User logged in:', user.username);
        res.status(200).json({ message: 'Login successful', username: user.username });
      } else {
        res.status(400).json({ message: 'Incorrect password. Please try again.' });
      }
    } catch (error) {
      console.error('Error comparing password:', error);
      res.status(500).json({ message: 'Error logging in user' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}); 