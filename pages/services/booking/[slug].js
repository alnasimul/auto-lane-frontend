import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import BookAppointment from "@/components/BookAppointment";
import Layout from "@/components/Layout";
import { useState } from 'react';
import { withProtected } from "@/helpers/route";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import autolaneApi from "pages/api/autolane";

const BookingPage = ({ service }) => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const {user} = useContext(AuthContext)

    const handleDateChange = date => {
        setSelectedDate(date);
    }
    const { title, price } = service;

    const router = useRouter()

    const appointmentSaved = (data) => {
        if (data) {
            toast('✔️ Appointment saved successfully',{
                position: "top-right",
                autoClose: 8000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
            router.push(`/dashboard?email=${user.email}`)
        }
    }
    return (
        <Layout title='Book a service'>
            <ToastContainer/>
            <BookAppointment handleDateChange={handleDateChange} date={selectedDate} title={title} price={price} appointmentSaved={appointmentSaved} />
        </Layout>
    );
}

// export const getStaticPaths = () => {
//     const services = data;

//     const paths = services.map(service => ({
//         params: { slug: service.slug }
//     }))

//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps = ({ params: { slug } }) => {

//     const service = data.find(singleData => singleData.slug === slug);
//     return {
//         props: { service }
//     }
// }

export const getServerSideProps = async ({ params: { slug } }) => {

    const res = await autolaneApi.get(`/findService/${slug}`)

    const service = res.data;

    return {
        props: { service }
    }
}

export default withProtected(BookingPage);