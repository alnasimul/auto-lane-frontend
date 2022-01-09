import { useFieldArray, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import styles from "@/styles/Form.module.css";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa";
import autolaneApi from "pages/api/autolane";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";

const AddServiceForm = () => {

  const {user} = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const { fields, append,  remove } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "services", // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );

  const onSubmit = (data) => {
    const {serviceInput, ...rest} = data;

    if(typeof window !== 'undefined'){
     const token = sessionStorage.getItem('token')
    
     autolaneApi.post(`/addService/${user.email}`,{...rest, price: parseInt(rest.price)},{
      headers:{
        "Content-Type" : "application/json",
        authorization : `Bearer ${token}`
      }
    }).then( res => 
      {
        if(res.data){
          toast("New Service added successfully..")
          router.push('/dashboard/services')
        }
      }
    ) 
  }

   

    console.log({...rest, price: parseInt(rest.price)})
  };

  return (
    <div className={styles.form}>
      <ToastContainer />
      <h1 className="text-center text-xl font-bold mb-10"> Add a Service</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete={`on`}
        autoFocus="on"
      >
        <label htmlFor="slug" className="text-left font-bold mt-2">
          Service's slug
        </label>
        <input
          type="text"
          {...register("slug", { required: true })}
          className="border border-gray-400"
          placeholder="Name"
        />
        {errors.slug && (
          <span className="text-red-600 mt-2">This field is required</span>
        )}
        <label htmlFor="title" className="text-left font-bold mt-2">
          Service's Title
        </label>
        <input
          type="text"
          {...register("title", { required: true })}
          className="border border-gray-400"
          placeholder="Name"
        />
        {errors.title && (
          <span className="text-red-600 mt-2">This field is required</span>
        )}

        <label htmlFor="description" className="text-left font-bold mt-2">
          Service's Description
        </label>
        <textarea
          type="text"
          {...register("description", { required: true })}
          className="border border-gray-400"
          placeholder="Description"
          rows="4"
          cols="50"
        />
        {errors.description && (
          <span className="text-red-600 mt-2">This field is required</span>
        )}

        <label htmlFor="excerpt" className="text-left font-bold mt-2">
          Service's Excerpt
        </label>
        <textarea
          type="text"
          {...register("excerpt", { required: true })}
          className="border border-gray-400"
          placeholder="Excerpt"
          rows="4"
          cols="50"
        />
        {errors.excerpt && (
          <span className="text-red-600 mt-2">This field is required</span>
        )}

        <div className="bg-gray-200 p-5 rounded-lg mt-3">
          {
            fields.length > 0 &&   <label htmlFor="services" className="text-left font-bold mt-2">
            All services
          </label>
          }
         
         {fields.map((field, index) => {
            return (
              <ul className="flex items-center list-none">
                <li
                  type="text"
                  className="border-none bg-gray-200 mb-3"
                  key={field.id} // important to include key with field's id
                  {...register(`services.${index}.value`)}
                > ({index+1}) {field.value} </li>
                <FaTrash onClick={() => remove(index)} className="mb-2 ml-2 cursor-pointer" />
              </ul>
            );
          })}

          <label htmlFor="services" className="text-left font-bold mt-2">
            Add a service
          </label>

          <input type="text" {...register("serviceInput")} className="mb-5"/>

          <a
            onClick={() => append({ value: getValues("serviceInput") })}
            className="bg-black p-2 rounded-lg text-sm text-white font-medium cursor-pointer"
          >
            Add Service
          </a>
        </div>

        <label htmlFor="price" className="text-left font-bold mt-2">
          Services's Price
        </label>
        <input
          type="text"
          {...register("price", { required: true })}
          className="border border-gray-400"
          placeholder="Price"
        />
        {errors.price && (
          <span className="text-red-600 mt-2">This field is required</span>
        )}

        <label htmlFor="image" className="text-left font-bold mt-2">
          Services's Image
        </label>
        <input
          type="text"
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

export default AddServiceForm;
