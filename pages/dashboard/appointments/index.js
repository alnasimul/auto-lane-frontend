import moment from "moment";
import AdminPanelLayout from "@/components/AdminPanelLayout";
import Appointments from "@/components/Appointments/Appointments";
import autolaneApi from "pages/api/autolane";
import { useState } from "react";
import { useRouter } from "next/router";

const AppointmentsPage = ({ appointments }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchForm, setSearhForm] = useState(false);
  const [appointmentsByDate, setAppointmentsByDate] = useState(appointments);

  const router = useRouter();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    findAppointmentByDate(date);
  };

  const handleSearchForm = (command) => {
    setSearhForm(command);

    if (!command) {
      router.reload();
    }
  };

  const findAppointmentByDate = (date) => {
    const formatedDate = moment(date).format("yyyy-MM-DD");

    autolaneApi
      .get(`/appointmentsByDate/${formatedDate}`)
      .then((res) => setAppointmentsByDate(res.data));
  };

  return (
    <AdminPanelLayout>
      <div className="w-full md:ml-60 lg:ml-60 ml-0">
        <Appointments
          date={selectedDate}
          handleDateChange={handleDateChange}
          appointments={appointmentsByDate ? appointmentsByDate : appointments}
          searchForm={searchForm}
          handleSearchForm={handleSearchForm}
        />
      </div>
    </AdminPanelLayout>
  );
};

export const getServerSideProps = async () => {
  const res = await autolaneApi.get("/appointments");

  const appointments = res.data;

  return {
    props: { appointments },
  };
};

export default AppointmentsPage;
