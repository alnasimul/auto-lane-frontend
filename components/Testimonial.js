import { FaQuoteRight } from "react-icons/fa";
const Testimonial = ({ user }) => {
    return (
        <div className='w-full px-10 py-6 rounded-lg shadow mt-6'>
            <div className="flex items-center">
                <div className='border-2 rounded-full p-2'>
                    <img
                        src={user.picture.medium}
                        alt=""
                        width={100}
                        height={100}
                        className="object-cover rounded-full sm:block "
                    />
                </div>
                <div className='ml-5 border-2 rounded p-5 '>
                    <div className='flex justify-between text-gray-700 font-bold '>
                    <h3 className="text-2xl ">{user.name.title} {user.name.first} {user.name.last}</h3>
                    <FaQuoteRight/>
                    </div>
                    <div className=" mt-4">
                        <p className='text-md font-bold text-gray-700 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum hic eius amet in. Quia, nobis?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;