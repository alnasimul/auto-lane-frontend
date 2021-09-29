import Image from "next/image";
const Mechanic = ({ mechanic }) => {
    const { name, email, phone, image } = mechanic;
    return (
        <div className='w-full px-10 py-6 rounded-lg border-2 mt-6'>
            <Image src={image} alt="" height={270} width={400} className='mb-4 rounded' />
            <div className='mt-5 text-center border rounded-xl p-5'>
                <h3 className='text-2xl text-red-600 font-bold'>{name}</h3>
                <h4 className='text-2md text-red-600 font-bold mt-3'>{email}</h4>
                <h5 className='text-2md text-red-600 font-bold'>{phone}</h5>
            </div>
        </div>
    );
}

export default Mechanic;