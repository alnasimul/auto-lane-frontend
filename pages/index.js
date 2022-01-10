import Banner from "@/components/Banner";
import BusinessInfo from "@/components/BusinessInfo";
import Layout from "@/components/Layout";
import Mechanic from "@/components/Mechanic";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import { data } from "FakeData";
import { mechanics } from "FakeData/mechanics";
import autolaneApi from "./api/autolane";


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

      {/* <h1 className='text-4xl p-5 font-bold text-center mt-5 text-red-600'>Testimonials</h1> */}

      {/* <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-3'>
        {
          users.map((user, index) => <Testimonial key={index} user={user}/>)
        }
      </div> */}
    </Layout>
  )
}

export const getServerSideProps = async () => {
 

  const res1 = await autolaneApi.get('/services')
  const services = res1.data


  const mechanicsData = mechanics;

  const res2 = await autolaneApi.get('/engineers')

  const engineers = res2.data


  const res = await fetch('https://randomuser.me/api/?results=3')
  const users = await res.json();

  return {
    props: { services, mechanics: engineers, users: users.results }
  }
}