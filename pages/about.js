import Layout from "@/components/Layout";
import Link from "next/link";

const AboutPage = () => {
    return (
        <Layout title="About AutoLane">
            <div className='text-center'>
                <h1 className='text-4xl border-b-4 pb-5 font-bold md:mx-10 text-purple-700'>About</h1>
                <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6 md:mx-10 text-purple-700">
                    <h3 className="text-3xl mb-5">
                        Auto Lane (Car Mechanic Service)
                    </h3>
                    <p className='mb-3 font-bold'>
                        This is a blog built with Next.js and Tailwind CSS.
                    </p>
                    <p className="mb-3">
                        <span className='font-bold '> Version 1.0.0 </span>
                    </p>
                    <Link href='/'>
                        <a className='text-indigo-700 hover:text-red-500 pointer'>{"<<"} Back to home</a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default AboutPage;