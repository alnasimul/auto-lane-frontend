import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import userPhoto from "../public/defaultUser.jpg";
import { FaEnvelope, FaUser } from "react-icons/fa";
import AppointmentsTable from "./Appointments/AppointmentsTable/AppointmentsTable";
import autolaneApi from "pages/api/autolane";
import { useRouter } from "next/router";

const Dashboard = ({appointments}) => {
  const { user } = useContext(AuthContext);

  const router = useRouter();

  const deleteAppointment = (id) => {
    // console.log(id)
     autolaneApi.delete(`/delete/${id}`)
     .then(res => {
         if(res.data){
            toast("Appointment deleted successfully")
            setTimeout(() => {
                router.reload();
            }, 4000 )
         }
     })
 }

  return (
    <div className="sm:flex items-center justify-center">
      <ToastContainer />
      <div className= "w-full sm:w-3/4 text-center sm:text-left px-3 sm:px-5 py-6 bg-white rounded-lg mt-10 md:mt-20 ml-64 mr-40 md:mx-auto md:mr-0 ">
        <div className="flex justify-around  shadow-md rounded-3xl md:w-3/4 md:ml-10">
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
      <div className="mt-20 sm:ml-0 ml-20 ">
          {
            appointments.length > 0 ?  <AppointmentsTable  appointments={appointments} user={true} deleteAppointment={deleteAppointment}/> : null
          }
           
        </div>
    </div>
  );
};

export default Dashboard;
