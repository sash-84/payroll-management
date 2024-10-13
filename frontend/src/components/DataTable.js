const DataTable = ({ title, headers, data }) => {
    return (
    <div className="border rounded-lg shadow-md px-10 py-8 my-4">
      <h2 className="text-xl font-semibold mb-5 text-center text-indigo-500">{title}</h2>
      <table className="min-w-full border-collapse border border-gray-300 rounded-xl">
        <thead>
          <tr className='text-center'>
            {headers.map((header) => (
              <th key={header} className="border border-gray-300 p-2">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className='text-center'>
            {data.map((item, index) => (
              <td key={index} className="border border-gray-300 p-2">{item}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
)};

export default DataTable;