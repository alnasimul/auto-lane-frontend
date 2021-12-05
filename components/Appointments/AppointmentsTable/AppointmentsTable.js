const AppointmentsTable = ({ appointments }) => {
    return (
        <div className="border-b border-gray-200 shadow p-3 rounded">
            <table className='table-auto text-xs'>
            <thead className='bg-gray-50'>
                <tr>
                    <th className="px-5 py-2  text-gray-500"> Title </th>
                    <th className="px-5 py-2 text-gray-500"> Price </th>
                    <th className="px-5 py-2 text-gray-500"> Name </th>
                    <th className="px-5 py-2 text-gray-500"> Phone </th>
                    <th className="px-5 py-2 text-gray-500"> Car No</th>
                    <th className="px-5 py-2 text-gray-500"> Status (Completion, Delivery )</th>
                    <th className="px-4 py-2 text-gray-500"> Actions </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Hello</td>
                    <td>Hello</td>
                    <td>Hello</td>
                    <td>Hello</td>
                    <td>Hello</td>
                    <td>Hello</td>
                    <td>Hello</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
}

export default AppointmentsTable;