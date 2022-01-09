import AdminPanelLayout from "@/components/AdminPanelLayout";
import AddServiceForm from "@/components/Services/AddServiceForm/AddServiceForm";

const AddService = () => {
    return (
        <AdminPanelLayout>
            <div className="w-full md:ml-60 lg:ml-60 ml-0 items-center py-20">
                <AddServiceForm/>
            </div>
        </AdminPanelLayout>
    );
}

export default AddService;