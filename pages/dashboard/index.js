import AdminPanelLayout from "@/components/AdminPanelLayout";
import Dashboard from "@/components/Dashboard";

const index = () => {
    return (
        <AdminPanelLayout>
             <div className="w-full md:ml-60 lg:ml-60 ml-0">
                 <Dashboard/>
            </div>
        </AdminPanelLayout>
    );
}

export default index;