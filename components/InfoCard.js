import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = ({info}) => {
    const {icon, title, description} = info
     return (
        <div className='w-full px-10 py-6 text-white mt-6 block items-center'>
          <p className='text-center'> <FontAwesomeIcon icon={icon} className={`info-icon mb-5`}/></p>
            <h2 className='text-center text-2xl mb-3 font-bold text-yellow-400'>{title}</h2>
            <p className='text-center font-bold '>{description}</p>
        </div>
    );
}

export default InfoCard;