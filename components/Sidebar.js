import Link from "next/link";
import styles from "@/styles/Sidebar.module.css";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaHome,
  FaList,
  FaPlus,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import { BiBarChartSquare } from "react-icons/bi";
import logo from "../public/images/logo404.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import autolaneApi from "pages/api/autolane";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);

  if( typeof window !== 'undefined'){
    var admin = sessionStorage.getItem("admin");
  }

  const checkAdmin = () => {
    if (typeof window !== "undefined") {
      const userInfo = sessionStorage.getItem("userInfo");

      autolaneApi
        .get(`/checkAdmin/${user ? user.email : userInfo.email}`)
        .then((res) => {
          if (res.data) {
            setIsAdmin(true);
            sessionStorage.setItem("admin", true);
          }
        });
    }
  };

  useEffect(() => checkAdmin(), []);
  return (
    <div
      className={`bg-gray-900 w-full sm:w-1/4 md:w-1/4 lg:w-1/4 ${styles.sidebar}`}
    >
      <div className="my-10 mx-2 flex">
        <Image src={logo} width={40} height={40} />
        <div>
          <h2 className="text-white text-xl  italic font-bold ml-3">
            Auto Lane
          </h2>
          <p className="text-white ml-3 text-sm italic font-bold">
            Car Mechanic Service
          </p>
        </div>
      </div>
      <Link href="/">
        <div className={`ml-3 text-white flex items-center cursor-pointer `}>
          <FaHome /> <a>Home</a>
        </div>
      </Link>
      <Link href={user.email ? `/dashboard?email=${user.email}` : `/dashboard`}>
        <div
          className={`ml-3 text-white flex items-center cursor-pointer ${styles.active}`}
        >
          <BiBarChartSquare /> <a>Dashboard</a>
        </div>
      </Link>
      {(isAdmin || admin) && (
        <div>
          <Link href="/dashboard/appointments">
            <div className="ml-3 text-white flex items-center cursor-pointer">
              <FaCalendarAlt /> <a>Appointments</a>
            </div>
          </Link>
          <Link href="/dashboard/services">
            <div className="ml-3 text-white flex items-center cursor-pointer">
              <FaList /> <a>Services</a>
            </div>
          </Link>
          <Link href="/dashboard/services/add">
            <div className="ml-3 text-white flex items-center cursor-pointer">
              <FaPlus /> <a>Add Service</a>
            </div>
          </Link>
          <Link href="/dashboard/engineers">
            <div className="ml-3 text-white flex items-center cursor-pointer">
              <FaUsers /> <a>Engineers</a>
            </div>
          </Link>
          <Link href="/dashboard/engineers/add">
            <div className="ml-3 text-white flex items-center cursor-pointer">
              <FaUserPlus /> <a>Add Engineer</a>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
