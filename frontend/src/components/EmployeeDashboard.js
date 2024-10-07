import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeDashboard = () => {
  const [payrollDetails, setPayrollDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayrollDetails = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setError('No user ID found. Please log in.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/employee/${userId}`);
        setPayrollDetails(response.data);
        console.log(response.data);
      } catch (error) {
        setError('Error fetching payroll details');
      } finally {
        setLoading(false);
      }
    };

    fetchPayrollDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!payrollDetails) {
    return <div>No payroll details found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">Your Payroll Details</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 border-b">Employee ID</th>
            <th className="py-2 border-b">Name</th>
            <th className="py-2 border-b">Salary</th>
            <th className="py-2 border-b">Deductions</th>
            <th className="py-2 border-b">Net Pay</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 border-b">{payrollDetails.employee_id}</td>
            <td className="py-2 border-b">{payrollDetails.first_name}</td>
            <td className="py-2 border-b">{payrollDetails.basic_salary}</td>
            <td className="py-2 border-b">{payrollDetails.deductions}</td>
            <td className="py-2 border-b">{payrollDetails.net_salary}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDashboard;
