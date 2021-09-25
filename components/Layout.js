import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
const Layout = ({title, keywords, description, children}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords}/>
                <meta name='description' content={description}/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main className='container mx-auto my-7'>
                {children}
            </main>
            <Footer/>
        </div>
    );
}

Layout.defaultProps = {
    title: 'Welcome to Auto Lane',
    keywords: 'Car reparing service',
    description: 'Its all about car repairing service'
}

export default Layout;