import AdminPanelLayout from "@/components/AdminPanelLayout";
import Services from "@/components/Services/Services";
import autolaneApi from "pages/api/autolane";

const ServicesPage = ({services}) => {
    return (
        <AdminPanelLayout>
            <div className="w-full md:ml-60 lg:ml-60 ml-0">
                <Services services={services}/>
            </div>
        </AdminPanelLayout>
    );
}

export const getServerSideProps = async () => {
 const res = await autolaneApi.get("/services")

 const services = res.data;

 return {
    props: {services}
 }
}

export default ServicesPage;