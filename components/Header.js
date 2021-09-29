import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import {FaSignInAlt} from 'react-icons/fa'
const Header = () => {
  return (
    <header className='bg-gray-900 text-gray-100 shadow w-full '>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0' >
            <Image src={logo} width={200} height={60} alt='logo' />
            {/* <img src={logo.src} width={40} height={40} alt='logo' /> */}
          </a>
        </Link>
        <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
          <Link href='/'>
            <a className='mx-3 md:mx-5 cursor-pointer hover:text-indigo-300'> Home </a>
          </Link>
          <Link href="/#services">
            <a className='mx-3 md:mx-5 cursor-pointer hover:text-indigo-300' > Services </a>
          </Link>
          <Link href='/about'>
            <a className='mx-3 md:mx-5 cursor-pointer hover:text-indigo-300'> About </a>
          </Link>
          <Link href='/login'>
          <a className='mx-3 md:mx-5 flex items-center bg-white p-2 rounded cursor-pointer text-black hover:text-red-700'> <FaSignInAlt/>  <span className='mx-3'>Login</span>   </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;