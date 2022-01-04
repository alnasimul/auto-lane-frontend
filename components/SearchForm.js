import React from 'react';
import { useForm } from 'react-hook-form';
import styles from "@/styles/SearchForm.module.css"
import autolaneApi from '../pages/api/autolane';

const SearchForm = ({handleSearchForm, searchAppointments}) => {
    const { register, handleSubmit, watch, formState: { errors }} = useForm();

        const onSubmit = data => {
        
        searchAppointments(data)
        // autolaneApi.post('/appointment',data)
        // .then(res =>appointmentSaved(res.data))
    };
    return (
        <div className={`${styles.search}`}>
            <button className="bg-red-700 hover:bg-red-800 p-2 ml-96 rounded-lg text-sm font-bold text-white" onClick={() => handleSearchForm(false)}>Close</button>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete={`on`} autoFocus='on'>
                <label htmlFor="customername" className='text-left font-bold mt-2'>Customer's Name</label>
                <input type='text' {...register("customername", { required: false })}  className='border border-gray-400' />
                {errors.customername && <span className='text-red-600 mt-2'>This field is required</span>}

                <label htmlFor="customeremail" className='text-left font-bold mt-2'>Customer's Email</label>
                <input type='text' {...register("customeremail", { required: false })} className='border border-gray-400' />
                {errors.customeremail && <span className='text-red-600 mt-2'>This field is required</span>}

                <label htmlFor="phone" className='text-left font-bold mt-2'>Customer's Phone</label>
                <input type='text' {...register("phone", { required: false })} className='border border-gray-400' />
                {errors.phone && <span className='text-red-600 mt-2'>This field is required</span>}

                <label htmlFor="regNo" className='text-left font-bold mt-2'>Car's Reg Number</label>
                <input type='text' {...register("regNo", { required: false })} className='border border-gray-400' />
                {errors.regNo && <span className='text-red-600 mt-2'>This field is required</span>}

                <input type="submit" className='bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-3 border border-black hover:border-transparent rounded mt-3 cursor-pointer' />
            </form>
        </div>
    );
};

export default SearchForm;