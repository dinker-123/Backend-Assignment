// app.js
const express = require('express');
const { connectDB, sequelize } = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect Database
connectDB();

// Sync Sequelize Models
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => console.error('Failed to sync database:', err));

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
