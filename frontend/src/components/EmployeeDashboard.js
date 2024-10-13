import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { pdf} from '@react-pdf/renderer';
import Spinner from './Spinner';
import DataTable from './DataTable';
import MyDocument from './MyDocument';

const EmployeeDashboard = () => {
  const [payrollDetails, setPayrollDetails] = useState({
    employee: null,
    salary: null,
    leaves: [],
    taxes: [],
    bonuses: [],
    overtime: [],
    deductions: [],
  });
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

      const endpoints = [
        { key: 'employee', url: `http://localhost:5000/employee/${userId}` },
        { key: 'salary', url: `http://localhost:5000/salary/${userId}` },
        { key: 'leaves', url: `http://localhost:5000/leave/${userId}` },
        { key: 'taxes', url: `http://localhost:5000/tax/${userId}` },
        { key: 'bonuses', url: `http://localhost:5000/bonus/${userId}` },
        { key: 'overtime', url: `http://localhost:5000/overtime/${userId}` },
        { key: 'deductions', url: `http://localhost:5000/deduction/${userId}` },
      ];

      try {
        const responses = await Promise.all(endpoints.map(endpoint => axios.get(endpoint.url)));
        const newData = responses.reduce((acc, response, index) => {
          acc[endpoints[index].key] = response.data[endpoints[index].key] || response.data;
          return acc;
        }, {});

        setPayrollDetails(newData);
        console.log(newData);
      } catch (error) {
        console.error(error);
        setError('Error fetching payroll details');
      } finally {
        setLoading(false);
      }
    };

    fetchPayrollDetails();
  }, []);

  const { employee, salary, leaves, taxes, bonuses, overtime, deductions } = payrollDetails;
  console.log(bonuses);

  const handleDownloadPDF = async () => {
    const doc = <MyDocument employee={employee} salary={salary} />;
    const blob = await pdf(doc).toBlob();
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'payslip.pdf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto p-10 bg-white text-black">
      {loading ? (
        <Spinner />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>

          <button 
            onClick={handleDownloadPDF} 
            className="mt-4 p-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
            Download Payslip
          </button>

          <DataTable
            title="Employee Information"
            headers={['Name', 'Email', 'Designation']}
            data={[`${employee.first_name} ${employee.last_name}`, employee.email, employee.designation]}
          />
          
          <DataTable
            title="Salary Details"
            headers={['Basic Salary', 'HRA', 'DA', 'Deductions', 'Gross Salary', 'Net Salary']}
            data={[salary.basic_salary, salary.hra, salary.da, salary.deductions, salary.gross_salary, salary.net_salary]}
          />

          
          <DataTable
            title="Leave Details"
            headers={['Leave Type', 'Start Date', 'End Date', 'Status']}
            data={[leaves.leave_type, leaves.leave_start_date, leaves.leave_end_date, leaves.status]}
          />
          
          <DataTable
            title="Tax Details"
            headers={['Percentage', 'Amount', 'Month']}
            data={[taxes.tax_percentage, taxes.tax_amount, taxes.month]}
          />

          <DataTable
            title="Bonus Details"
            headers={['Amount', 'Date']}
            data={[bonuses.bonus_amount, bonuses.bonus_date]}
          />

          <DataTable
            title="Overtime Details"
            headers={['Hours', 'Rate', 'Amount']}
            data={[overtime.overtime_hours, overtime.overtime_rate, overtime.overtime_amount]}
          />

          <DataTable
            title="Deductions Details"
            headers={['Type', 'Amount', 'Month']}
            data={[deductions.deduction_type, deductions.deduction_amount, deductions.month]}
          />
          
        </>
      )}
    </div>
  );
};

export default EmployeeDashboard;
