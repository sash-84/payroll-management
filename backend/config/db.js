import mysql2 from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if(err) {
        console.log('Error connecting to the database: ', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

export default db;
