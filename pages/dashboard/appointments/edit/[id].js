import AdminPanelLayout from '@/components/AdminPanelLayout';
import EditFrom from '@/components/Appointments/EditForm/EditForm';
import autolaneApi from 'pages/api/autolane';
import React from 'react';

const EditAppointmentPage = ({appointment}) => {

    console.log(appointment)
    
    return (
        <AdminPanelLayout>
        <div className='w-full md:ml-60 lg:ml-60 ml-0 items-center py-20'>
            <EditFrom appointment={appointment} />  
        </div>
        </AdminPanelLayout>
    );
};

export const getServerSideProps = async ({params: {id}}) => {
    // const res = await fetch(`${API_URL}/events/${id}`);
    // const event = await res.json();
    const res = await autolaneApi.get(`/findAppointment/${id}`);
    const appointment = res.data

    return {
        props: {appointment}
    }
}

export default EditAppointmentPage;