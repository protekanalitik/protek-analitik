const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

// Admin user data
const adminUser = {
  id: 'admin-001',
  username: 'protekadmin',
  email: 'admin@protekanalitik.com',
  password_hash: bcrypt.hashSync('protek1234', 12),
  first_name: 'Admin',
  last_name: 'User',
  role: 'admin',
  is_active: true,
  email_verified: true,
  last_login: null,
  login_attempts: 0,
  locked_until: null,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

// Create users store file
const usersStorePath = path.join(__dirname, '../src/data/users-store.json');
const usersStore = {
  users: [adminUser],
  lastUpdated: new Date().toISOString()
};

// Ensure directory exists
const dir = path.dirname(usersStorePath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Write users store
fs.writeFileSync(usersStorePath, JSON.stringify(usersStore, null, 2));

console.log('Admin user created successfully!');
console.log('Username: protekadmin');
console.log('Password: protek1234');
console.log('Email: admin@protekanalitik.com');
console.log('Role: admin');
