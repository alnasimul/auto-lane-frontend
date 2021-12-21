import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import userPhoto from "../public/defaultUser.jpg";
import { FaEnvelope, FaUser } from "react-icons/fa";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="grid md:grid-cols-2 sm:flex">
      <ToastContainer />
      <div>
          
      </div>
      <div className="w-full text-center sm:text-left px-3 sm:px-5 py-6 bg-white rounded-lg mt-10 md:mt-20 sm:w-3/4 ml-40 mr-40 md:ml-10 md:mr-0">
        <div className="flex justify-around border-2 rounded-3xl md:w-2/4 md:ml-10">
          <div className="p-3">
            <Image
              src={user.photo ? user.photo : userPhoto}
              alt="User Photo"
              width={120}
              height={120}
              className="rounded-2xl"
            />
          </div>
          <div className="p-4">
            <p className="text-xl font-bold my-2 text-indigo-800 flex justify-around">
              <FaUser className="mt-1 mr-3" /> {user.name}
            </p>
            <p className="text-md font-bold text-gray-500 flex justify-around">
              <FaEnvelope className="mt-1 mr-2 ml-2" /> {user.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
