import AdminPanelLayout from "@/components/AdminPanelLayout";
import EditForm from "@/components/Engineers/EditForm/EditForm";
import autolaneApi from "pages/api/autolane";


const EditEngineerInfo = ({engineer}) => {
    return (
        <AdminPanelLayout>
            <div className="w-full md:ml-70 lg:ml-60 ml-0 items-center py-20">
                 <EditForm engineer={engineer}/>
            </div>
        </AdminPanelLayout>
    );
}

export const getServerSideProps = async ({params: {id}}) => {
    const res = await autolaneApi.get(`/findEngineer/${id}`)

    const engineer = res.data;

    return{
        props: {
            engineer
        }
    }
}

export default EditEngineerInfo;