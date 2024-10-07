import mysql2 from "mysql2"

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sakshi',
    database: 'payroll_management'
});

db.connect((err) => {
    if(err) {
        console.log('Error connecting to the database: ', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

export default db;
