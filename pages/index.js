import Banner from "@/components/Banner";
import BusinessInfo from "@/components/BusinessInfo";
import Layout from "@/components/Layout";
import Service from "@/components/Service";
import { data } from "FakeData/Index";


export default function HomePage({ services }) {
  return (
    <Layout>
      <Banner />
      <BusinessInfo />
      <h1 className='text-4xl  p-5 font-bold text-center mt-5 text-red-600'>Our Services</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          services.map((service, index) => <Service data={service} key={index} />)
        }
      </div>
    </Layout>
  )
}

export const getStaticProps = () => {
  const services = data;

  return {
    props: { services }
  }
}