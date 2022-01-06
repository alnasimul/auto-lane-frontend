import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import autolaneApi from "pages/api/autolane";
import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EngineersTable from "./EngineersTable/EngineersTable";

const Engineers = ({engineers}) => {
    const {user} = useContext(AuthContext)

    const router = useRouter();

    const deleteEngineerData = id => {
      if(window !== 'undefined'){
        const token = sessionStorage.getItem('token')  
        try {
            autolaneApi.delete(`/deleteEngineer/${id}?email=${user.email}`,{
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                if(res.data){
                toast("Engineer data deleted sucessfully !")
                router.reload();
                }
            })
        } catch (error) {
            
        }
      }
    }
    return (
        <div className="w-full py-10 px-8 sm:px-6 bg-white rounded-lg  text-center lg:ml-80 lg:mr-20 md:mr-5 ">
            <ToastContainer/>
            {
                engineers.length > 0 ? <EngineersTable engineers={engineers} deleteEngineerData={deleteEngineerData}/> : <div>
                    <h1>No Engineer's data found</h1>
                </div>
            }
        </div>
    );
}

export default Engineers;