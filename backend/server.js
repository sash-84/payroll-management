import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './models/db.js';
import jsonwebtoken from 'jsonwebtoken';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5001;

const JWT_SECRET = 'your_jwt_secret_key';

app.get('/auth', (req, res) => {
    db.query('SELECT * FROM auth', (err, results) => {
        if(err) {
            console.log('Error executing query: ', err);
            return res.status(500).send('Server error');
        }
        res.json(results);
    })
});

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
                const token = jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '1h' });
                res.json({ 
                    message: 'Login successful',
                    userId: user.emp_id ,
                    isAdmin: user.is_admin,
                    token
                });
            } else {
                res.status(401).json({ message: 'Invalid username or password' });
            }
        }
    );
});

app.get('/employee/:id', (req, res) => {
    const employeeId = req.params.id;

    const query = `
        SELECT 
            e.employee_id, 
            e.first_name, 
            s.basic_salary, 
            s.deductions, 
            s.net_salary 
        FROM 
            employee e 
        JOIN 
            salary s ON e.employee_id = s.employee_id 
        JOIN 
            department d ON e.department_id = d.department_id 
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

app.listen(PORT, () => {
    console.log('Server running at', PORT);
});