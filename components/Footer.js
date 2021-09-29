import Link from 'next/link';
import styles from '@/styles/Footer.module.css';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; Auto Lane {new Date().getFullYear()}</p>
            <p>
                <Link href='/about'>
                    <a className='text-indigo-600'>About This Project</a> 
                </Link>
            </p>
        </footer>
    );
}

export default Footer;