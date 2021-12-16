import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import AppointmentsTable from "./AppointmentsTable/AppointmentsTable";
const Appointments = ({appointments, handleDateChange}) => {
    return (
        <div className="grid md:grid-cols-2 sm:flex">
            <div className="w-full text-center sm:text-left px-3 sm:px-5 py-6 bg-white rounded-lg md:mt-12 lg:ml-20  sm:w-2/4">
                <h1 className='text-xl text-black font-bold mb-5 uppercase'>Pick a date to find appointments</h1>
                <Calendar onChange={handleDateChange} value={new Date()} />
            </div>
            <div className="w-full mt-5 sm:w-2/4 sm:px-5 bg-white rounded-lg  text-center lg:mt-20 lg:mr-20 md:mr-5 ">
                <h3 className="text-xl font-bold text-center mb-5 uppercase">Appointments</h3>
                <AppointmentsTable appointments={appointments}/>
            </div>
        </div>
    );
}

export default Appointments;