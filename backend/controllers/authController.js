import db from '../config/db.js';

export const login = (req, res) => {
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
};

export const getAuth = (req, res) => {
    db.query('SELECT * FROM auth', (err, results) => {
        if (err) {
            console.log('Error executing query: ', err);
            return res.status(500).send('Server error');
        }
        res.json(results);
    });
};
