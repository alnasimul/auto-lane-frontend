import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import styles from '@/styles/AppointmentForm.module.css';
import autolaneApi from '../pages/api/autolane';

const AppointmentForm = ({ date, appointmentSaved }) => {
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
    // const [buttonForName, setButtonForName] = useState(true);
    // const [buttonForEmail, setButtonForEmail] = useState(true);
    const [username, setUserName] = useState('');
    const [useremail, setUserEmail] = useState('');


    const onSubmit = data => {
        autolaneApi.post('/appointment',data)
        .then(res =>appointmentSaved(res.data))
    };
    return (
        <div className={styles.appointment}>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete={`on`} autoFocus='on'>
                <label htmlFor="date" className='text-left font-bold mt-2'>Appointment Date</label>
                <input type='text' {...register("date", { required: true })} value={moment(date).format('yyyy-MM-DD')} readOnly className='border border-gray-400' />
                {errors.date && <span className='text-red-600 mt-2'>This field is required</span>}

                <label htmlFor="customername" className='text-left font-bold mt-2'>Customer's Name</label>
                <input type='text' {...register("customername", { required: true })} value={username} onChange={(e) => setUserName(e.target.value)} className='border border-gray-400' />
                {errors.customername && <span className='text-red-600 mt-2'>This field is required</span>}

                <label htmlFor="customeremail" className='text-left font-bold mt-2'>Customer's Email</label>
                <input type='text' {...register("customeremail", { required: true })} value={useremail} onChange={(e) => setUserEmail(e.target.value)} className='border border-gray-400' />
                {errors.customeremail && <span className='text-red-600 mt-2'>This field is required</span>}

                {/* <label htmlFor="username" className='text-left font-bold mt-2'>Customer's Name</label>
                <input type='text' {...register("name", { required: false })} name="name" placeholder="Your Name" className='border border-gray-400' value={`${username}`} onChange={(e) => setUserName(e.target.value)} />
                {errors.name && <span className='text-red-600 mt-2'>This field is required</span> } 
                 {(user.name && buttonForName) && <button className='bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-3 border border-black hover:border-transparent rounded mt-3 cursor-pointer' onClick={() => {
                    setValue('name', username)
                    setUserName(user.name)
                    setButtonForName(false)
                    }}>Set {user.name}</button>}
                

                <label htmlFor="useremail" className='text-left font-bold mt-2'>Customer's Email</label>
                <input type='email' {...register("email", { required: false })} name="email" placeholder="Email" className='border border-gray-400' value={useremail} onChange={(e) => setUserEmail(e.target.value)}/>
                {errors.email && <span className='text-red-600 mt-2'>This field is required</span>}
                {(user.email && buttonForEmail) && <button className='bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-3 border border-black hover:border-transparent rounded mt-3 cursor-pointer' onClick={() => {
                    setValue('email', useremail)
                    setUserEmail(user.email)
                    setButtonForEmail(false)
                    }}>Set {user.email}</button>} */}

                <label htmlFor="phone" className='text-left font-bold mt-2'>Customer's Phone</label>
                <input type='text' {...register("phone", { required: true })} className='border border-gray-400' />
                {errors.phone && <span className='text-red-600 mt-2'>This field is required</span>}

                <label htmlFor="regNo" className='text-left font-bold mt-2'>Car's Reg Number</label>
                <input type='text' {...register("regNo", { required: true })} className='border border-gray-400' placeholder="for example Dhaka-Metro-Ga 15-2295" />
                {errors.regNo && <span className='text-red-600 mt-2'>This field is required</span>}
                
                <label htmlFor="address" className='text-left font-bold mt-2'>Customer's Address</label>
                <input type='text' {...register("address", { required: true })} className='border border-gray-400'  />
                {errors.address && <span className='text-red-600 mt-2'>This field is required</span>}

                <input type="submit" className='bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-3 border border-black hover:border-transparent rounded mt-3 cursor-pointer' />
            </form>
        </div>
    );
};

export default AppointmentForm;