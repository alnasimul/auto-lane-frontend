import React from "react";
import BookAppointment from "@/components/BookAppointment";
import Layout from "@/components/Layout";
import { data } from "FakeData";
import { useState } from 'react';

const BookingPage = ({service}) => {
    const [selectedDate,setSelectedDate] = useState(new Date())
   
    const handleDateChange = date => {
        setSelectedDate(date);
        console.log(selectedDate);
    }
    const {title, price} = service;
    return (
        <Layout title='Book a service'>
            <BookAppointment handleDateChange={handleDateChange} date={selectedDate} title={title} price={price} />
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