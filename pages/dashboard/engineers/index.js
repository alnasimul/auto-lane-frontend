import AdminPanelLayout from "@/components/AdminPanelLayout";
import Engineers from "@/components/Engineers/Engineers";
import autolaneApi from "pages/api/autolane";

const EngineersPage = ({engineers}) => {
    return (
        <AdminPanelLayout>
            <div className="w-full md:ml-60 lg:ml-60 ml-0">
                <Engineers engineers={engineers}/>
            </div>
        </AdminPanelLayout>
    );
}

export const getServerSideProps = async () => {
  const res = await autolaneApi.get("/engineers")

  const engineers = res.data;

  return{
      props: {engineers}
  }
    
}

export default EngineersPage;