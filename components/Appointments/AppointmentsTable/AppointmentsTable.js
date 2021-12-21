import TableData from "./TableData/TableData";

const AppointmentsTable = ({ appointments, updateCompletionStatus, updatePaymentStatus, updateDeliveryStatus, deleteAppointment }) => {
   
    return (
        <div className="">
            <table className='table-auto text-xs border-b border-gray-200 shadow  rounded"'>
            <thead className='bg-gray-50'>
                <tr>
                    <th className="px-5 py-2  text-gray-500"> Date </th>
                    <th className="px-5 py-2  text-gray-500"> Title </th>
                    <th className="px-5 py-2 text-gray-500"> Name </th>
                    <th className="px-5 py-2 text-gray-500"> Phone </th>
                    <th className="px-5 py-2 text-gray-500"> Car No</th>
                    <th className="px-5 py-2 text-gray-500"> Status (Completion, Payment, Delivery )</th>
                    <th className="px-5 py-2 text-gray-500"> Actions </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
              {
                  appointments.map( (appointment, index) => <TableData key={appointment._id} appointment={appointment} index={index} updateCompletionStatus={updateCompletionStatus} updatePaymentStatus={updatePaymentStatus} updateDeliveryStatus={updateDeliveryStatus}  deleteAppointment={deleteAppointment}/>)
              }
            </tbody>
        </table>
        </div>
    );
}

export default AppointmentsTable;