import AdminPanelLayout from "@/components/AdminPanelLayout";
import Dashboard from "@/components/Dashboard";
import autolaneApi from "pages/api/autolane";

const MainDashboardPage = ({ appointments }) => {
  return (
    <AdminPanelLayout>
      <div className="w-full md:ml-60 lg:ml-60 ml-0">
        <Dashboard appointments={appointments} />
      </div>
    </AdminPanelLayout>
  );
};

export const getServerSideProps = async ({ query: { email } }) => {
  const res = await autolaneApi.get(`/userAppointments/${email}`);

  const appointments = res.data;

  return {
    props: { appointments },
  };
};

export default MainDashboardPage;
