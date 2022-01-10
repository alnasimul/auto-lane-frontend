import Layout from "@/components/Layout";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import autolaneApi from "pages/api/autolane";

const ServicePage = ({ service }) => {
    const {user} = useContext(AuthContext);
    const { title, description, image, price, services, slug } = service;
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
                                          <li key={index} className='mb-3 text-gray-600'>{service.value}</li>
                                      )}
                                  </ul>
                            </div>
                        }
                        <p className="text-red-500 mt-5 font-bold">Pricing: $ {price}</p>
                        {
                            user.email ?   <Link href={`/services/booking/${slug}`}>
                            <button className='bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-3 border border-black hover:border-transparent rounded mt-5'>Book Service</button>
                        </Link> :
                        <Link href="/account/login">
                            <button className='bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-3 border border-black hover:border-transparent rounded mt-5'>Login to Book Service</button>
                        </Link>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}

// export const getStaticPaths = async () => {
//     const services = data;

//     const paths = services.map(service => ({
//         params: { slug: service.slug }
//     }))

//     return {
//         paths,
//         fallback: false
//     }
// }

export const getServerSideProps = async ({ params: { slug } }) => {

    const res = await autolaneApi.get(`/findService/${slug}`)

    const service = res.data;

    return {
        props: { service }
    }
}

export default ServicePage;