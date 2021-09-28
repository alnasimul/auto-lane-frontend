import styles from '@/styles/Banner.module.css';
const Banner = () => {
    return (
        <div className={styles.banner}>
            <h1>Car repair services for affordable prices !</h1>
            <h2 className='text-yellow-300'>The best in town</h2>
           
        </div>
    );
}

export default Banner;