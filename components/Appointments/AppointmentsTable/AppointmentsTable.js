import TableData from "./TableData/TableData";

const AppointmentsTable = ({
  appointments,
  updateCompletionStatus,
  updatePaymentStatus,
  updateDeliveryStatus,
  deleteAppointment,
  user,
}) => {

  console.log(appointments)  
  return (
    <>
      {appointments.length > 0 ? (
        <table className="table-auto text-xs border-b border-gray-200 shadow rounded">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-5 py-2  text-gray-500"> Date </th>
              <th className="px-5 py-2  text-gray-500"> Title </th>
              {user && <th className="px-5 py-2  text-gray-500"> Price </th>}
              {user ? null : (
                <th className="px-5 py-2 text-gray-500"> Name </th>
              )}
              <th className="px-5 py-2 text-gray-500"> Phone </th>
              <th className="px-5 py-2 text-gray-500"> Car No</th>
              <th className="px-5 py-2 text-gray-500">
                {" "}
                Status (Completion, Payment, Delivery )
              </th>
              <th className="px-5 py-2 text-gray-500"> Actions </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {appointments.map((appointment, index) => (
              <TableData
                key={appointment._id}
                appointment={appointment}
                index={index}
                updateCompletionStatus={updateCompletionStatus}
                updatePaymentStatus={updatePaymentStatus}
                updateDeliveryStatus={updateDeliveryStatus}
                deleteAppointment={deleteAppointment}
                user={user}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="w-full mt-10 sm:w-2/4 sm:px-5 bg-white rounded-lg  text-center lg:mt-20 lg:mr-20 md:mr-5 ">
          <h3 className="text-xl text-red-700 font-bold text-center mb-5 uppercase">
            No Appointments Available
          </h3>
        </div>
      )}
    </>
  );
};

export default AppointmentsTable;
