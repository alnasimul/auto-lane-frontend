const TableData = ({ appointment, index, updateCompletionStatus, updateDeliveryStatus, deleteAppointment }) => {
    const { _id, title, price, customername, phone, regNo, status, delivered } = appointment;

    const alertForUpdateCompletion = (id,status) => {
        if (window.confirm("Are you sure want to update completion status ?")) {
            updateCompletionStatus(id, status)
        }
    }

    const alertForUpdateDelivery = (id,status) => {
        if (window.confirm("Are you sure want to update delivery status ?")) {
            updateDeliveryStatus(id, status)
        }
    }

    const alertForDeleteAppointment = (id) => {
        if (window.confirm("Are you sure want to delete this appointment ?")) {
            deleteAppointment(id)
        }
    }

    return (
        <tr className="whitespace-nowrap">
            <td className="px-6 py-4 text-sm text-gray-500"> <strong> {title} </strong>  </td>
            <td className="px-6 py-4 text-sm text-gray-500"> <strong> {price} </strong> </td>
            <td className="px-6 py-4 text-sm text-gray-500"> <strong> {customername} </strong></td>
            <td className="px-6 py-4 text-sm text-gray-500"> <strong> {phone} </strong> </td>
            <td className="px-6 py-4 text-sm text-gray-500"> <strong> {regNo} </strong></td>
            <td className="px-6 py-4 text-sm text-gray-500">{status ? <span> &#9989; </span> : <span> &#10060; </span>} | {delivered ? <span> &#9989; </span> : <span> &#10060; </span>} </td>
            <td className="px-6 py-4 text-sm text-gray-500">
                <button id="dropdownDividerButton" data-dropdown-toggle={`dropdownDivider+${index}`} className="text-white uppercase bg-red-700 hover:bg-red-800 font-medium rounded-lg text-2xs px-5 py-2.5 inline-flex items-center">Actions <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                <div id={`dropdownDivider+${index}`} className="hidden uppercase text-xs font-bold bg-white divide-y divide-gray-100 rounded shadow w-30 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="list-none" aria-labelledby="dropdownDividerButton">
                        <li>
                            <a href="#" className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={() => alertForUpdateCompletion( _id, {status: true} )}> Completed </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"> Paid </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={ () => alertForUpdateDelivery(_id, {delivered: true}) }> Delivered </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={() => alertForDeleteAppointment(_id)}>Delete</a>
                        </li>
                    </ul>
                    <hr />
                    <div className="py-1">
                        <a href="#" className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"  onClick={() => alertForUpdateCompletion( _id, {status: false} )} >Undo Completion</a>
                        <a href="#" className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Undo Pay</a>
                        <a href="#" className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={ () => alertForUpdateDelivery(_id, {delivered: false}) } > Undo Deliver </a>
                    </div>
                </div>
            </td>
        </tr>
    );
}

export default TableData;