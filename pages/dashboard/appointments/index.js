import AdminPanelLayout from "@/components/AdminPanelLayout";
import Appointments from "@/components/Appointments/Appointments";
import autolaneApi from "pages/api/autolane";
import { useState } from "react";

const AppointmentsPage = ({appointments}) => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    console.log(selectedDate)

    return (
        <AdminPanelLayout>
            <div className="w-full md:ml-60 lg:ml-60 ml-0">
                <Appointments date={selectedDate} handleDateChange={handleDateChange} appointments={appointments}/> 
            </div>
        </AdminPanelLayout>
    );
}

export const getServerSideProps = async () => {
    const res = await autolaneApi.get('/appointments');
    
    const appointments = res.data

   return {
       props: { appointments }
   }
}

export default AppointmentsPage;