import { FaToolbox } from "react-icons/fa";
import Link from "next/link";

const TableData = ({
  appointment,
  index,
  updateCompletionStatus,
  updatePaymentStatus,
  updateDeliveryStatus,
  deleteAppointment,
  user,
}) => {
  const {
    _id,
    date,
    title,
    price,
    customername,
    phone,
    regNo,
    status,
    paid,
    delivered,
  } = appointment;

  const alertForUpdateCompletion = (id, status) => {
    if (window.confirm("Are you sure want to update completion status ?")) {
      updateCompletionStatus(id, status);
    }
  };

  const alertForUpdateDelivery = (id, status) => {
    if (window.confirm("Are you sure want to update delivery status ?")) {
      updateDeliveryStatus(id, status);
    }
  };

  const alertForUpdatePayment = (id, status) => {
    if (window.confirm("Are you sure want to update payment status ?")) {
      updatePaymentStatus(id, status);
    }
  };

  const alertForDeleteAppointment = (id) => {
    if (window.confirm("Are you sure want to delete this appointment ?")) {
      deleteAppointment(id);
    }
  };

  let engineer = "";

  if (title === "A/C Services") {
    engineer = "Brad Doe";
  } else if (title === "Brake Repair") {
    engineer = "John Smith";
  } else if (title === "Engine Repair") {
    engineer = "Evan Fletcher";
  } else if (title === "Oil Change") {
    engineer = "Morgan Dio";
  } else if (title === "Tire Repair") {
    engineer = "Morgan Dio";
  } else if (title === "Performance") {
    engineer = "Evan Fletcher";
  }

  return (
    <tr className="whitespace-nowrap">
      <td className="px-4 py-4 text-sm text-gray-500">
        {" "}
        <strong> {date} </strong>{" "}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500">
        {" "}
        <strong> {title} </strong> <br />{" "}
        <div className="flex mt-2 ">
          <FaToolbox className={user ? `mt-0.5 mr-2` : `mt-0.5 mr-2 ml-4`} />{" "}
          {engineer}{" "}
        </div>
      </td>
      {user && (
        <td className="px-4 py-4 text-sm text-gray-500">
          {" "}
          <strong> {price} </strong>{" "}
        </td>
      )}
      {user ? null : (
        <td className="px-4 py-4 text-sm text-gray-500">
          {" "}
          <strong> {customername} </strong>
        </td>
      )}
      <td className="px-4 py-4 text-sm text-gray-500">
        {" "}
        <strong> {phone} </strong>{" "}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500">
        {" "}
        <strong> {regNo} </strong>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500">
        {status ? <span> &#9989; </span> : <span> &#10060; </span>} |{" "}
        {paid ? <span> &#9989; </span> : <span> &#10060; </span>} |{" "}
        {delivered ? <span> &#9989; </span> : <span> &#10060; </span>}{" "}
      </td>
      {user ? (
        <td>
          <button
            className="text-white uppercase bg-red-700 hover:bg-red-800 font-medium rounded-lg text-2xs px-5 py-2.5 inline-flex items-center"
            onClick={() => alertForDeleteAppointment(_id)}
          >
            {" "}
            Delete{" "}
          </button>
        </td>
      ) : (
        <td className="px-6 py-4 text-sm text-gray-500">
          {/* <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Actions
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={() =>
                    alertForUpdateCompletion(_id, { status: true })
                  }
                >
                  Completed
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={() => {
                    alertForUpdatePayment(_id, { paid: true });
                  }}
                >
                  Paid
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={() =>
                    alertForUpdateDelivery(_id, { delivered: true })
                  }
                >
                  Delivered
                </a>
              </li>
              <li>
                <Link href={`/dashboard/appointments/edit/${_id}`}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={() => alertForDeleteAppointment(_id)}
                >
                  Delete
                </a>
              </li>
              <hr />
              <li>
                {" "}
                <a
                  href="#"
                  className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={() =>
                    alertForUpdateCompletion(_id, { status: false })
                  }
                >
                  Undo Completion
                </a>
              </li>

              <li>
                {" "}
                <a
                  href="#"
                  className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={() => alertForUpdatePayment(_id, { paid: false })}
                >
                  Undo Pay
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={() =>
                    alertForUpdateDelivery(_id, { delivered: false })
                  }
                >
                  {" "}
                  Undo Deliver{" "}
                </a>
              </li>
            </ul>
          </div> */}
          <button
            id="dropdownDividerButton"
            data-dropdown-toggle={`dropdownDivider+${index}`}
            className="text-white uppercase bg-red-700 hover:bg-red-800 font-medium rounded-lg text-2xs px-5 py-2.5 inline-flex items-center"
            onClick={() => console.log(`clicked ${index}`)} >
            Actions{" "}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <div
            id={`dropdownDivider+${index}`}
            className="hidden uppercase text-xs font-bold bg-white divide-y divide-gray-100 rounded shadow w-30 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul className="list-none" aria-labelledby="dropdownDividerButton">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={() =>
                    alertForUpdateCompletion(_id, { status: true })
                  }
                >
                  Completed
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={() => {
                    alertForUpdatePayment(_id, { paid: true });
                  }}
                >
                  Paid
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={() =>
                    alertForUpdateDelivery(_id, { delivered: true })
                  }
                >
                  Delivered
                </a>
              </li>
              <li>
                <Link href={`/dashboard/appointments/edit/${_id}`}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={() => alertForDeleteAppointment(_id)}
                >
                  Delete
                </a>
              </li>
            </ul>
            <hr />
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                onClick={() => alertForUpdateCompletion(_id, { status: false })}
              >
                Undo Completion
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                onClick={() => alertForUpdatePayment(_id, { paid: false })}
              >
                Undo Pay
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-2xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                onClick={() =>
                  alertForUpdateDelivery(_id, { delivered: false })
                }
              >
                {" "}
                Undo Deliver{" "}
              </a>
            </div>
          </div>
        </td>
      )}
    </tr>
  );
};

export default TableData;
