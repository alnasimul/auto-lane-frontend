import TableData from "./TableData/TableData";

const EngineersTable = ({ engineers, deleteEngineerData }) => {
  return (
    <table className="table-auto text-sm md:text-md border-b border-gray-200 shadow rounded">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-5 py-2  text-gray-500">Image</th>
          <th className="px-5 py-2  text-gray-500">Name</th>
          <th className="px-5 py-2  text-gray-500">Phone</th>
          <th className="px-5 py-2  text-gray-500">Email</th>
          <th className="px-5 py-2  text-gray-500">Salary</th>
          <th className="px-5 py-2  text-gray-500">Address</th>
          <th className="px-5 py-2  text-gray-500">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-300">
        {engineers.map((engineer, index) => (
          <TableData key={engineer._id} engineer={engineer} index={index} deleteEngineerData={deleteEngineerData} />
        ))}
      </tbody>
    </table>
  );
};

export default EngineersTable;
