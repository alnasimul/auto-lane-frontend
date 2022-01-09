import TableData from "./TableData/TableData";

const ServicesTable = ({services, deleteService}) => {
    return (
        <table className="table-fixed border-collapse text-sm md:text-md border-b border-gray-200 shadow rounded">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-5 py-2 text-gray-500" > Image </th>
                    <th className="px-5 py-2 text-gray-500" > Title </th>
                    <th className="px-5 py-2 text-gray-500" > Price </th>
                    <th className="px-5 py-2 text-gray-500" > Services </th>
                    <th className="px-5 py-2 text-gray-500" > Actions </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
                {
                    services.map((service) => <TableData key={services._id} service={service} deleteService={deleteService} />)
                }
            </tbody>
        </table>
    );
}

export default ServicesTable;