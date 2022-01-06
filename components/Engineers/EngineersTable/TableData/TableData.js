import Image from "next/image";
import Link from "next/link";
const TableData = ({engineer, index, deleteEngineerData}) => {
   const {_id, image, name, phone, email, salary, address } = engineer;

   const alertForDelete = id => {
       if(window.confirm("Are you sure want to delete this data?")){
        deleteEngineerData(id)
       }
   }
    return (
        <tr className="whitespace-nowrap">
            <td>
                <Image src={image} width={100} height={80} className="rounded-lg"/>
            </td>
            <td className="px-4 py-4 text-md text-gray-500">{name}</td>
            <td className="px-4 py-4 text-md text-gray-500">{phone}</td>
            <td className="px-4 py-4 text-md text-gray-500">{email}</td>
            <td className="px-4 py-4 text-md text-gray-500">${salary}</td>
            <td className="px-4 py-4 text-md text-gray-500">{address}</td>
            <td className="px-4 py-4 text-md text-gray-500">
            <button
            id="dropdownDividerButton"
            data-dropdown-toggle={`dropdownDivider+${index}`}
            className="text-white uppercase bg-red-700 hover:bg-red-800 font-medium rounded-lg text-2xs px-5 py-2.5 inline-flex items-center"
          >
            Actions{" "}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <div
            id={`dropdownDivider+${index}`}
            className="hidden uppercase text-sm font-bold bg-white divide-y divide-gray-100 rounded shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul className="list-none" aria-labelledby="dropdownDividerButton">
              <li>
                <Link href={`/dashboard/engineers/edit/${_id}`}>
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
                  onClick={() => alertForDelete(_id)}
                >
                  Delete
                </a>
              </li>
            </ul>
            </div>
            </td>
        </tr>
    );
}

export default TableData;