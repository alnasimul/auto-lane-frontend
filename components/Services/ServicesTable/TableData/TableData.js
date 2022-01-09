import Image from "next/image";
import Link from "next/link";
const TableData = ({service, deleteService}) => {
    const {_id, title, image, description, excerpt, services, price} = service;

    const alertForDelete = (id) => {
        if(window.confirm('Are you sure want to delete this service? ')){
            deleteService(id)
        }
    }
    return (
        <tr>
            <td>
                <Image src={image} width={100} height={80} className="rounded-lg"/>
            </td>
            <td className="px-4 py-4 text-md text-gray-500" > {title} </td>
            <td className="px-4 py-4 text-md text-gray-500" > {price} </td>
            <td className="px-6 py-4 text-gray-500 text-sm">
                <ul className="list-none text-left">
                    {
                        services.map( (singleservice, index) => <li key={index}>{index + 1}. {singleservice.value}</li> )
                    }
                </ul>
            </td>
            <td>
                <button className="bg-red-700 hover:bg-red-800 p-3 text-white rounded font-medium" onClick={() => alertForDelete(_id)}>Delete</button>
            </td>
        </tr>
    );
}

export default TableData;