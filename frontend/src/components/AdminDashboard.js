import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all employee data for admin
  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/employees'); // Ensure the correct API URL
      if (!response.ok) {
        throw new Error('Failed to fetch employee data');
      }
      const data = await response.json();
      setEmployees(data); // Update state with employee data
    } catch (error) {
      console.error('Error fetching employee data:', error);
      setError('Failed to fetch employee data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const role = localStorage.getItem('role'); // Assuming 'role' is saved in localStorage
    if (role === 'admin') {
      fetchEmployees(); // Fetch data only if the user is an admin
    } else {
      setError('Unauthorized access');
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
      
      {employees.length > 0 ? (
        <table className="min-w-full table-auto border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border px-4 py-2">Employee ID</th>
              <th className="border px-4 py-2">First Name</th>
              <th className="border px-4 py-2">Last Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Date of Joining</th>
              <th className="border px-4 py-2">Designation</th>
              <th className="border px-4 py-2">Bank Account Number</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.employee_id}>
                <td className="border px-4 py-2">{employee.employee_id}</td>
                <td className="border px-4 py-2">{employee.first_name}</td>
                <td className="border px-4 py-2">{employee.last_name}</td>
                <td className="border px-4 py-2">{employee.email}</td>
                <td className="border px-4 py-2">{new Date(employee.date_of_joining).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{employee.designation}</td>
                <td className="border px-4 py-2">{employee.bank_account_number}</td>
                <td className="border px-4 py-2">{employee.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employee data available</p>
      )}
    </div>
  );
};

export default AdminDashboard;
