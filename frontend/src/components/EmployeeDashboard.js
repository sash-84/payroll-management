import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeDashboard = () => {
  const [payrollDetails, setPayrollDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSalaryDetails, setShowSalaryDetails] = useState(false); // New state to control salary details visibility

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
      } catch (error) {
        setError('Error fetching payroll details');
      } finally {
        setLoading(false);
      }
    };

    fetchPayrollDetails();
  }, []);

  const toggleSalaryDetails = () => {
    setShowSalaryDetails((prev) => !prev); // Toggle salary details visibility
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!payrollDetails) {
    return <div>No payroll details found.</div>;
  }

  // Format the salary values
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  return (
    <div className="container mx-auto px-4 py-6 flex justify-center">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '500px', height: 'auto' }}>
        <center>
          <h2 className="text-xl font-semibold mb-4">
            {showSalaryDetails ? 'Salary Details' : 'Your Payroll Details'}
          </h2>
        </center>
        
        {!showSalaryDetails ? (
          <table className="min-w-full border border-black-300">
            <thead>
              <tr>
                <th className="py-2 border-b">Field</th>
                <th className="py-2 border-b">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 border-b">Employee ID</td>
                <td className="py-2 border-b">{payrollDetails.employee_id}</td>
              </tr>
              <tr>
                <td className="py-2 border-b">Name</td>
                <td className="py-2 border-b">{payrollDetails.first_name}</td>
              </tr>
              <tr>
                <td className="py-2 border-b">Email</td>
                <td className="py-2 border-b">{payrollDetails.email}</td>
              </tr>
              <tr>
                <td className="py-2 border-b">Designation</td>
                <td className="py-2 border-b">{payrollDetails.designation}</td>
              </tr>
              <tr>
                <td className="py-2 border-b">Date of Joining</td>
                <td className="py-2 border-b">{new Date(payrollDetails.date_of_joining).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td className="py-2 border-b">Action</td>
                <td className="py-2 border-b">
                  <button 
                    className="text-blue-500 hover:underline" 
                    onClick={toggleSalaryDetails}>
                    View Salary
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="mt-4">
            <table className="min-w-full border border-black-300">
              <thead>
                <tr>
                  <th className="py-2 border-b">Field</th>
                  <th className="py-2 border-b">Value</th>
                </tr>
              </thead>
              <tbody><tr>
                  <td className="py-2 border-b">Salary Id</td>
                  <td className="py-2 border-b">{formatCurrency(payrollDetails.salary_id)}</td>
                </tr>
                <tr>
                  <td className="py-2 border-b">Basic Salary</td>
                  <td className="py-2 border-b">{formatCurrency(payrollDetails.basic_salary)}</td>
                </tr>
                <tr>
                  <td className="py-2 border-b">Deductions</td>
                  <td className="py-2 border-b">{formatCurrency(payrollDetails.deductions)}</td>
                </tr>
                <tr>
                  <td className="py-2 border-b">Net Pay</td>
                  <td className="py-2 border-b">{formatCurrency(payrollDetails.net_salary)}</td>
                </tr>
                <tr>
                  <td className="py-2 border-b">HRA</td>
                  <td className="py-2 border-b">{formatCurrency(payrollDetails.hra)}</td>
                </tr>
                <tr>
                  <td className="py-2 border-b">DA</td>
                  <td className="py-2 border-b">{formatCurrency(payrollDetails.da)}</td>
                </tr>
                <tr>
                  <td className="py-2 border-b">Bonus</td>
                  <td className="py-2 border-b">{formatCurrency(payrollDetails.bonus)}</td>
                </tr>
                <tr>
                  <td className="py-2 border-b">Net Pay</td>
                  <td className="py-2 border-b">{formatCurrency(payrollDetails.net_salary)}</td>
                </tr>
                <tr>
                  <td className="py-2 border-b">Gross Salary</td>
                  <td className="py-2 border-b">{formatCurrency(payrollDetails.gross_salary)}</td>
                </tr>
              </tbody>
            </table>
            <center>
            <button 
              className="mt-4 text-blue-500 hover:underline" 
              onClick={toggleSalaryDetails}>
              Back to Payroll Details
            </button>
            </center>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
