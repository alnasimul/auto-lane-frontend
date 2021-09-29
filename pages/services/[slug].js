import Layout from "@/components/Layout";
import Link from "next/link";
import { data } from "FakeData";

const ServicePage = ({ service }) => {
    const { title, description, image, price, services } = service;
    return (
        <Layout title={title}>
            <Link href='/'>
                <a className='text-gray-900 hover:text-blue-600 ml-9 md:mx-5'>
                  {"<<"}  Go Back
                </a>
            </Link>
            <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
                <div className="flex justify-between items-center mt-4">
                <h1 className="text-xl font-bold mb-7 md:text-5xl">{title}</h1>
                    <p className='mb-5'><span className='bg-purple-600 text-white lowercase font-bold pt-1 pb-2 px-2 rounded text-sm '>Powered by Auto Lane</span></p>
                </div>
                <div className='block justify-between md:flex'>
                    <img src={image} alt="" className='w-full rounded'/>
                    <div className='m-5'>
                        
                        <p className="text-justify text-gray-600 font-bold">{description}</p>
                        {
                            services && <div className='mt-5'>
                                  <h3 className='text-2xl font-bold text-gray-600'>Services we are providing</h3>
                                  <ul className="mt-3 ml-5">
                                      {services.map((service, index) => 
                                          <li key={index} className='mb-3 text-gray-600'>{service}</li>
                                      )}
                                  </ul>
                            </div>
                        }
                        <p className="text-red-500 mt-5 font-bold">Pricing: $ {price}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const getStaticPaths = async () => {
    const services = data;

    const paths = services.map(service => ({
        params: { slug: service.slug }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {

    const service = data.find(singleData => singleData.slug === slug);

    return {
        props: { service }
    }
}

export default ServicePage;