require('dotenv').config();
const pool = require('./config/db');
const bcrypt = require('bcryptjs');

(async () => {
  const accounts = [
    ['StoreRate System Administrator','admin@storerate.demo','Admin@123','Noida, Uttar Pradesh, India','ADMIN'],
    ['Demo Normal User Account','user@storerate.demo','User@123','Greater Noida, Uttar Pradesh, India','USER'],
    ['Demo Store Owner Account','owner@storerate.demo','Owner@123','Noida, Uttar Pradesh, India','OWNER']
  ];
  for (const [name,email,password,address,role] of accounts) {
    const hash = await bcrypt.hash(password,10);
    await pool.query(
      'INSERT INTO users(name,email,password_hash,address,role) VALUES(?,?,?,?,?) ON DUPLICATE KEY UPDATE name=VALUES(name), password_hash=VALUES(password_hash), address=VALUES(address), role=VALUES(role)',
      [name,email,hash,address,role]
    );
  }
  const [[owner]] = await pool.query("SELECT id FROM users WHERE email='owner@storerate.demo'");
  await pool.query(
    'INSERT INTO stores(name,email,address,owner_id) VALUES(?,?,?,?) ON DUPLICATE KEY UPDATE name=VALUES(name), address=VALUES(address), owner_id=VALUES(owner_id)',
    ['Demo Technology Store','store@storerate.demo','Sector 62, Noida, Uttar Pradesh, India',owner.id]
  );
  console.log('Demo data created. Passwords: Admin@123 / User@123 / Owner@123');
  await pool.end();
})().catch(async err => { console.error(err); await pool.end(); process.exit(1); });
