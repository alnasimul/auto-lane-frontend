import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppointmentsTable from "./AppointmentsTable/AppointmentsTable";
import autolaneApi from "../../pages/api/autolane";
import { useRouter } from "next/router";
const Appointments = ({appointments, handleDateChange}) => {

    const router = useRouter();

    const updateCompletionStatus = (id, status) => {
       // console.log(id)
        autolaneApi.patch(`/updateCompletion/${id}`,status)
        .then(res => {
            if(res.data){
                router.reload();
            }
        })
    }

    const updateDeliveryStatus = (id, status) => {
        // console.log(id)
         autolaneApi.patch(`/updateDelivery/${id}`,status)
         .then(res => {
             if(res.data){
                 router.reload();
             }
         })
     }

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
        <div className="grid md:grid-cols-2 sm:flex">
            <ToastContainer/>
            <div className="w-full text-center sm:text-left px-3 sm:px-5 py-6 bg-white rounded-lg md:mt-12 lg:ml-20 sm:w-2/4">
                <h1 className='text-xl text-black font-bold mb-5 uppercase'>Pick a date to find appointments</h1>
                <Calendar onChange={handleDateChange} value={new Date()} />
            </div>
            {
                appointments.length > 0 ?  <div className="w-full mt-5 sm:w-2/4 sm:px-5 bg-white rounded-lg  text-center lg:mt-20 lg:mr-20 md:mr-5 ">
                <h3 className="text-xl font-bold text-center mb-5 uppercase">Appointments</h3>
                <AppointmentsTable appointments={appointments} updateCompletionStatus={updateCompletionStatus} updateDeliveryStatus={updateDeliveryStatus} deleteAppointment={deleteAppointment}/>
            </div> : <div className="w-full mt-10 sm:w-2/4 sm:px-5 bg-white rounded-lg  text-center lg:mt-20 lg:mr-20 md:mr-5 " >
            <h3 className="text-xl text-red-700 font-bold text-center mb-5 uppercase">No Appointments Available</h3>
            </div>
            }
           
        </div>
    );
}

export default Appointments;