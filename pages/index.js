import Banner from "@/components/Banner";
import BusinessInfo from "@/components/BusinessInfo";
import Layout from "@/components/Layout";
import Mechanic from "@/components/Mechanic";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import { data } from "FakeData";
import { mechanics } from "FakeData/mechanics";


export default function HomePage({ services, mechanics, users}) {
  return (
    <Layout>
      <Banner />
      <BusinessInfo />

      <h1 className='text-4xl  p-5 font-bold text-center mt-5 text-red-600' id="services">Our Services</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5' >
        {
          services.map((service, index) => <Service data={service} key={index} />)
        }
      </div>

      <h1 className='text-4xl  p-5 font-bold text-center mt-5 text-red-600'>Our Mechanics</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-2 mx-3'>
        {
          mechanics.map((mechanic, index) => <Mechanic key={index} mechanic={mechanic}/>)
        }
      </div>

      <h1 className='text-4xl p-5 font-bold text-center mt-5 text-red-600'>Testimonials</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-3'>
        {
          users.map((user, index) => <Testimonial key={index} user={user}/>)
        }
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const services = data;
  const mechanicsData = mechanics;

  const res = await fetch('https://randomuser.me/api/?results=3')
  const users = await res.json();

  return {
    props: { services, mechanics: mechanicsData, users: users.results }
  }
}