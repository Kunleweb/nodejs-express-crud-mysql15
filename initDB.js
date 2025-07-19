import fs from 'fs/promises';
import path from 'path';
import {pool} from './db.js';

const initDB = async () => {
  try {
    const sqlPath = path.join(process.cwd(), '/db.sql');
    const sql = await fs.readFile(sqlPath, 'utf8');

    const connection = await pool.getConnection();
    await connection.query(sql);
    connection.release();

    console.log('✅ Database and tables created successfully.');
  } catch (err) {
    console.error('❌ Failed to initialize database:', err.message);
  }
};

initDB();
