
import { registerCardIcon } from '../assets';
export default function RegisterCard(props) {
    
    return (
        <div style={{ fontFamily: 'anonymousPro' }} className="flex items-center justify-center">
            <img src={registerCardIcon} alt="registerCard" className="w-full max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[100%] xl:max-w-[100%]" />
            <p className="absolute -mt-10">Name: <span className='bg-white pl-4 pr-4 pt-2 pb-2'>{props.name}</span></p>
            <p className="absolute mt-[30px]">
                ID: <span className='bg-white pl-4 pr-4 pt-2 pb-2 '>{props.id}</span>
            </p>
            <p className="absolute mt-[100px]">
                Batch: <span className='bg-white pl-4 pr-4 pt-2 pb-2'>{props.batch}</span>
            </p>
            <p className="absolute mt-[180px]">
                Email: <span className='bg-white pl-4 pr-4 pt-2 pb-2'>{props.email}</span>
            </p>
        </div>
    );
}
