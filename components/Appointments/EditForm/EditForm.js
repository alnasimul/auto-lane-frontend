import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import styles from '@/styles/EditForm.module.css';
import autolaneApi from 'pages/api/autolane';

const EditFrom = ({ appointment }) => {
    const {date,customername,customeremail, phone, regNo, address} = appointment

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [username, setUserName] = useState(customername);
    const [useremail, setUserEmail] = useState(customeremail);

    const onSubmit = data => {
        // if (typeof window !== 'undefined') {
        //     // Perform localStorage action
        //     const item = localStorage.getItem('key')
        //   }
        console.log("editform",data)
    };
    return (
        <div className={`${styles.appointment}`}>
             <h1 className='text-center text-xl font-bold mb-10'> Appoitment's Edit Form</h1>
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

                <label htmlFor="phone" className='text-left font-bold mt-2'>Customer's Phone</label>
                <input type='text' defaultValue={phone} {...register("phone", { required: true })} className='border border-gray-400' />
                {errors.phone && <span className='text-red-600 mt-2'>This field is required</span>}

                <label htmlFor="regNo" className='text-left font-bold mt-2'>Car's Reg Number</label>
                <input type='text' defaultValue={regNo} {...register("regNo", { required: true })} className='border border-gray-400' placeholder="for example Dhaka-Metro-Ga 15-2295" />
                {errors.regNo && <span className='text-red-600 mt-2'>This field is required</span>}
                
                <label htmlFor="address" className='text-left font-bold mt-2'>Customer's Address</label>
                <input type='text' defaultValue={address} {...register("address", { required: true })} className='border border-gray-400'  />
                {errors.address && <span className='text-red-600 mt-2'>This field is required</span>}

                <input type="submit" className='bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-3 border border-black hover:border-transparent rounded mt-3 cursor-pointer' />
            </form>
        </div>
    );
};

export default EditFrom;