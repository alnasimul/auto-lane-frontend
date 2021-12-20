import Head from "next/head";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const AdminPanelLayout = ({ title, keywords, description, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords} />
                <meta name='description' content={description} />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css" />
            </Head>

            <main className='container'>
                <Sidebar />
                {children}
            </main>
        </div>
    );
}

AdminPanelLayout.defaultProps = {
    title: 'Welcome to AutoLane',
    keywords: 'Car reparing service',
    description: 'Its all about car repairing service'
}

export default AdminPanelLayout;