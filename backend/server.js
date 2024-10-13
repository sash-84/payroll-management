import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5001;

// app.use('/api', authRoutes);
// app.use('./api', employeeRoutes);

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
                res.json({ 
                    message: 'Login successful',
                    userId: user.emp_id ,
                    userName: user.username,
                    isAdmin: user.is_admin,
                });
            } else {
                res.status(401).json({ message: 'Invalid username or password' });
            }
        }
    );
});


app.get('/employee/:id', async (req, res) => {
    const employeeId = req.params.id;

    const employeeQuery = 'SELECT * FROM Employee WHERE employee_id = ?';

    // Helper function to make db.query() return a promise
    const queryPromise = (query, params) => {
        return new Promise((resolve, reject) => {
            db.query(query, params, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    };

    try {
        const employee = await queryPromise(employeeQuery, [employeeId]);

        res.json({
            employee: employee[0]

        });
    } catch (error) {
        console.error('Error fetching payroll details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/salary/:id', async (req, res) => {
    const employeeId = req.params.id;

    // const employeeQuery = 'SELECT * FROM Employee WHERE employee_id = ?';
    const salaryQuery = 'SELECT * FROM Salary WHERE employee_id = ?';


    // Helper function to make db.query() return a promise
    const queryPromise = (query, params) => {
        return new Promise((resolve, reject) => {
            db.query(query, params, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    };

    try {
        const salary = await queryPromise(salaryQuery, [employeeId]);

        res.json({
            salary: salary[0]
        });
    } catch (error) {
        console.error('Error fetching payroll details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/leave/:id', async (req, res) => {
    const employeeId = req.params.id;

    const leaveQuery = 'SELECT * FROM LeaveTable WHERE employee_id = ?';

    // Helper function to make db.query() return a promise
    const queryPromise = (query, params) => {
        return new Promise((resolve, reject) => {
            db.query(query, params, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    };

    try {
        const leaves = await queryPromise(leaveQuery, [employeeId]);
    
        res.json({
            leaves: leaves[0]
        });
    } catch (error) {
        console.error('Error fetching payroll details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/tax/:id', async (req, res) => {
    const employeeId = req.params.id;

    const taxQuery = 'SELECT * FROM Tax WHERE employee_id = ?';

    // Helper function to make db.query() return a promise
    const queryPromise = (query, params) => {
        return new Promise((resolve, reject) => {
            db.query(query, params, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    };

    try {
        const taxes = await queryPromise(taxQuery, [employeeId]);

        res.json({
            taxes: taxes[0]
        });
    } catch (error) {
        console.error('Error fetching payroll details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/bonus/:id', async (req, res) => {
    const employeeId = req.params.id;

    const bonusQuery = 'SELECT * FROM Bonus WHERE employee_id = ?';

    // Helper function to make db.query() return a promise
    const queryPromise = (query, params) => {
        return new Promise((resolve, reject) => {
            db.query(query, params, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    };

    try {
        const bonuses = await queryPromise(bonusQuery, [employeeId]);

        res.json({
            bonuses: bonuses[0]
        });
    } catch (error) {
        console.error('Error fetching payroll details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/overtime/:id', async (req, res) => {
    const employeeId = req.params.id;

    const overtimeQuery = 'SELECT * FROM Overtime WHERE employee_id = ?';

    // Helper function to make db.query() return a promise
    const queryPromise = (query, params) => {
        return new Promise((resolve, reject) => {
            db.query(query, params, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    };

    try {
        const overtime = await queryPromise(overtimeQuery, [employeeId]);

        res.json({
            overtime: overtime[0]
        });
    } catch (error) {
        console.error('Error fetching payroll details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/deduction/:id', async (req, res) => {
    const employeeId = req.params.id;

    const deductionsQuery = 'SELECT * FROM Deductions WHERE employee_id = ?';

    // Helper function to make db.query() return a promise
    const queryPromise = (query, params) => {
        return new Promise((resolve, reject) => {
            db.query(query, params, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    };

    try {
        const deductions = await queryPromise(deductionsQuery, [employeeId]);

        res.json({
            deductions: deductions[0]
        });
    } catch (error) {
        console.error('Error fetching payroll details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

app.listen(PORT, () => {
    console.log('Server running at', PORT);
});