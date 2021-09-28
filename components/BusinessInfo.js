
import { faDirections, faSearchLocation, faToolbox } from "@fortawesome/free-solid-svg-icons";
import InfoCard from "./InfoCard";

const BusinessInfo = () => {
    const infosData = [
        {
            title: 'Location Details',
            description: '346 Woodbridge Lane Seattle, 3030 Washington. ',
            icon: faSearchLocation,
        },
        {
            title: 'Emergency Repair',
            description: 'Low rates emergency service available 24 hours a day every day of the year.',
            icon: faToolbox,
        },
        {
            title: 'Get Directions',
            description: 'Get direction to Autolane Repair in Seattle and have your car checked today ?',
            icon: faDirections,
        }
    ]
    return (
        <section className='container block items-center sm:flex sm:flex-wrap rounded mt-5'>
            <div className='w-full bg-black md:mx-5 rounded'>
                <div className='grid lg:grid-cols-3'>
                {
                    infosData.map((info, index) => <InfoCard key={index} info={info}/>)
                }
                </div>
            </div>
        </section>
    );
}

export default BusinessInfo;