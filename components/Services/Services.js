import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import autolaneApi from "pages/api/autolane";
import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServicesTable from "./ServicesTable/ServicesTable";
const Services = ({services}) => {

    const {user} = useContext(AuthContext);

    const router = useRouter();

    const deleteService = id => {
        if( typeof window !== 'undefined'){
            const token = sessionStorage.getItem('token')
            try {
                autolaneApi.delete(`/deleteService/${id}?email=${user.email}`,{
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                .then(res => {
                    if(res.data){
                        toast('This service deleted successfully !')
                        router.reload();
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
    console.log(services)
    return (
        <div className="w-full py-10 px-8 sm:px-6 bg-white rounded-lg  text-center lg:ml-80 lg:mr-20 md:mr-5">
            <ToastContainer/>
            {
                services.length > 0 ? <ServicesTable services={services} deleteService={deleteService}/> : <div></div>
            }
        </div>
    );
}

export default Services;