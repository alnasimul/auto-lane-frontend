import Link from 'next/link';
import styles from '@/styles/Sidebar.module.css';
import Image from 'next/image';
import {  FaCalendarAlt,   FaHome, FaUserPlus, FaUsers  } from 'react-icons/fa';
import {BiBarChartSquare} from 'react-icons/bi';
import logo from '../public/images/logo404.png'
const Sidebar = () => {
    return (
        <div className={`bg-gray-900 w-full md:w-1/4 lg:w-1/4 ${styles.sidebar}`}>
            <div className="my-10 mx-2 flex">
                <Image  src={logo} width={40} height={40}/>
                <div>
                <h2 className="text-white text-xl  italic font-bold ml-3">Auto Lane</h2>
                <p className="text-white ml-3 text-sm italic font-bold">Car Mechanic Service</p>
                </div>
            </div>
            <Link href="/">
                <div className={`ml-3 text-white flex items-center cursor-pointer `}>
                <FaHome/> <a>Home</a>
                </div>
            </Link>
            <Link href="/dashboard">
                <div className={`ml-3 text-white flex items-center cursor-pointer ${styles.active}`}>
                 <BiBarChartSquare/> <a>Dashboard</a>
                </div>
            </Link>
            <Link href="/dashboard/appointments">
                <div className='ml-3 text-white flex items-center cursor-pointer'>
                 <FaCalendarAlt/> <a>Appointments</a>
                </div>
            </Link>
            <Link href="/dashboard/engineers">
                <div className='ml-3 text-white flex items-center cursor-pointer'>
                 <FaUsers/> <a>Engineers</a>
                </div>
            </Link>
            <Link href="/dashboard/addEngineer">
                <div className='ml-3 text-white flex items-center cursor-pointer'>
                 <FaUserPlus/> <a>Add Engineer</a>
                </div>
            </Link>
        </div>
    );
}

export default Sidebar;