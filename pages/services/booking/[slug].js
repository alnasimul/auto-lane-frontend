import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import BookAppointment from "@/components/BookAppointment";
import Layout from "@/components/Layout";
import { data } from "FakeData";
import { useState } from 'react';

const BookingPage = ({ service }) => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const handleDateChange = date => {
        setSelectedDate(date);
    }
    const { title, price } = service;

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
        }
    }
    return (
        <Layout title='Book a service'>
            <ToastContainer/>
            <BookAppointment handleDateChange={handleDateChange} date={selectedDate} title={title} price={price} appointmentSaved={appointmentSaved} />
        </Layout>
    );
}

export const getStaticPaths = () => {
    const services = data;

    const paths = services.map(service => ({
        params: { slug: service.slug }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = ({ params: { slug } }) => {

    const service = data.find(singleData => singleData.slug === slug);
    return {
        props: { service }
    }
}

export default BookingPage;