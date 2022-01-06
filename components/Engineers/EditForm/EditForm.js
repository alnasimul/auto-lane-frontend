import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import styles from "@/styles/Form.module.css";
import autolaneApi from "pages/api/autolane";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditForm = ({engineer}) => {
  const {_id, name, email, phone, salary, address, image} = engineer;

  const { user } = useContext(AuthContext);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
     
    if (typeof window !== 'undefined') {

        const token = sessionStorage.getItem('token');

        autolaneApi.patch(`/editEngineer/${_id}?email=${user.email}`, data, {
            headers: {
                "Content-Type" : "application/json",
                authorization: `Bearer ${token}`
            }
        }).then((res) => {
          if (res.data) {
            toast("Engineer data updated successfully");
            router.push('/dashboard/engineers')
          }
        });
    }
    console.log(data);
  };
  return (
    <div className={`${styles.form}`}>
      <ToastContainer />
      <h1 className="text-center text-xl font-bold mb-10">Edit Engineer information</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete={`on`}
        autoFocus="on"
      >
        <label htmlFor="name" className="text-left font-bold mt-2">
          Engineer's Name
        </label>
        <input
          type="text"
          defaultValue={name}
          {...register("name", { required: true })}
          className="border border-gray-400"
          placeholder="Name"
        />
        {errors.name && (
          <span className="text-red-600 mt-2">This field is required</span>
        )}

        <label htmlFor="email" className="text-left font-bold mt-2">
          Engineer's Email
        </label>
        <input
          type="text"
          defaultValue={email}
          {...register("email", { required: true })}
          className="border border-gray-400"
          placeholder="Email"
        />
        {errors.email && (
          <span className="text-red-600 mt-2">This field is required</span>
        )}

        <label htmlFor="phone" className="text-left font-bold mt-2">
          Engineer's Phone
        </label>
        <input
          type="text"
          defaultValue={phone}
          {...register("phone", { required: true })}
          className="border border-gray-400"
          placeholder="Phone"
        />
        {errors.phone && (
          <span className="text-red-600 mt-2">This field is required</span>
        )}

        <label htmlFor="salary" className="text-left font-bold mt-2">
          Engineer's Salary <span className="text-gray-500">(montly)</span>{" "}
        </label>
        <input
          type="text"
          defaultValue={salary}
          {...register("salary", { required: true })}
          className="border border-gray-400"
          placeholder="Salary"
        />
        {errors.salary && (
          <span className="text-red-600 mt-2">This field is required</span>
        )}

        <label htmlFor="address" className="text-left font-bold mt-2">
          Engineer's Address
        </label>
        <input
          type="text"
          defaultValue={address}
          {...register("address", { required: true })}
          className="border border-gray-400"
          placeholder="Address"
        />
        {errors.address && (
          <span className="text-red-600 mt-2">This field is required</span>
        )}

        <label htmlFor="image" className="text-left font-bold mt-2">
          Engineer's Image
        </label>
        <input
          type="text"
          defaultValue={image}
          {...register("image", { required: true })}
          className="border border-gray-400"
          placeholder="Image"
        />
        {errors.image && (
          <span className="text-red-600 mt-2">This field is required</span>
        )}

        <input
          type="submit"
          className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-3 border border-black hover:border-transparent rounded mt-3 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default EditForm;
