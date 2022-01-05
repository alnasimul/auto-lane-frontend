import AdminPanelLayout from "@/components/AdminPanelLayout";
import AddEngineerForm from "@/components/Engineers/AddEngineerForm/AddEngineerForm";

const AddEngineer = () => {
    return (
        <AdminPanelLayout>
            <div className="w-full md:ml-60 lg:ml-60 ml-0 items-center py-20">
                <AddEngineerForm/>
            </div>
        </AdminPanelLayout>
    );
}

export default AddEngineer;