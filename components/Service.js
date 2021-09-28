import Link from 'next/link';
import Image from 'next/image';
const Service = ({ data }) => {
    const { title, image, excerpt, slug } = data;
    return (
        <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
            <Image src={image} alt="" height={420} width={600} className='mb-4 rounded' />
            <div className="flex justify-between items-center mt-5">
                <Link href={`/services/${slug}`}>
                    <a className="text-xl md:text-2xl text-gray-700 font-bold hover:underline">
                        {title}
                    </a>
                </Link>
                <p><span className='bg-purple-600 text-white lowercase font-bold pt-1 pb-2 px-2 rounded text-sm'>Powered by Auto Lane</span></p>
            </div>
            <p className="mt-2 text-gray-600">{excerpt}</p>
            <Link href={`/services/${slug}`}>
                <a className="text-gray-900 hover:text-blue-600 mt-5">Read More</a>
            </Link>
        </div>
    );
}

export default Service;