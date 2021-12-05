import AdminPanelLayout from "@/components/AdminPanelLayout";
import Dashboard from "@/components/Dashboard";

const index = () => {
    return (
        <AdminPanelLayout>
           <Dashboard/>
        </AdminPanelLayout>
    );
}

export default index;