import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './models/db.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5001;

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    db.query(
        'SELECT * FROM auth WHERE username = ? AND password = ?',
        [username, password], 
        (err, result) => {
            if (err) {
                console.log('Error executing query: ', err);
                return res.status(500).send('Server error');
            };
            if (result.length > 0) {
                const user = result[0];
              
                res.json({ 
                    message: 'Login successful',
                    userId: user.emp_id,
                    isAdmin: user.is_admin,
                });
            } else {
                res.status(401).json({ message: 'Invalid username or password' });
            }
        }
    );
});

// Fetch employee data based on ID
app.get('/employee/:id', (req, res) => {
    const employeeId = req.params.id;

    const query = `
        SELECT 
            e.email,
            e.date_of_joining,
            e.designation,
            e.bank_account_number,
            e.status,
            e.employee_id, 
            e.first_name, 
            s.basic_salary, 
            s.deductions, 
            s.net_salary,
            s.salary_id,
            s.hra,
            s.da,
            s.bonus,
            s.gross_salary
        FROM 
            employee e 
        JOIN 
            salary s ON e.employee_id = s.employee_id 
        WHERE 
            e.employee_id = ?;
    `;

    db.query(query, [employeeId], (error, results) => {
        if (error) {
            console.error('Error fetching payroll details:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (results.length > 0) {
            res.json(results[0]); 
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    });
});

// Fetch all employees for admin
app.get('/api/employees', (req, res) => {
    const query = `
        SELECT 
            employee_id, 
            first_name, 
            last_name, 
            email, 
            date_of_joining, 
            designation, 
            bank_account_number, 
            status
        FROM 
            employee;
    `;

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching employees:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log('Server running at', PORT);
});
