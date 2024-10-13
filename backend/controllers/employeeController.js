import db from '../config/db.js';

export const getEmployeeById = (req, res) => {
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
};
