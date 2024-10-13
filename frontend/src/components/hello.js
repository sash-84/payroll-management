export default function hello () {
    return (
        <div className="bg-white text-black p-5">
    <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Employee Dashboard</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit Profile</button>
    </div>
    

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold">Basic Information</h2>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john.doe@example.com</p>
            <p><strong>Phone:</strong> +1234567890</p>
            <p><strong>Department:</strong> Sales</p>
            <p><strong>Status:</strong> Active</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold">Salary Information</h2>
            <p><strong>Basic Salary:</strong> $5000</p>
            <p><strong>Gross Salary:</strong> $5500</p>
            <p><strong>Net Salary:</strong> $5000</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold">Attendance</h2>
            <p><strong>This Month:</strong> 22 Days Present</p>
            <p><strong>Leave Balance:</strong> 10 Days</p>
        </div>
    </div>

    <div className="bg-white p-4 shadow rounded-lg mb-6">
        <h2 className="text-xl font-semibold">Current Projects</h2>
        {/* Map through projects */}
        <ul>
            <li>Project A - In Progress</li>
            <li>Project B - Completed</li>
        </ul>
    </div>

    <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-xl font-semibold">Company Announcements</h2>
        {/* Map through announcements */}
        <ul>
            <li>New office opening next month.</li>
            <li>Annual company meeting on July 20th.</li>
        </ul>
    </div>
</div>

    )
}