
import { registerCardIcon } from '../assets';
export default function RegisterCard(props) {
    
    return (
        <div style={{ fontFamily: 'anonymousPro' }} className="flex items-center justify-center">
            <img src={registerCardIcon} alt="registerCard" className="w-full max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[100%] xl:max-w-[100%]" />
            <p className="absolute mt-[-60px] scale-90 max-[400px]:scale-50">Name: <span className='bg-white pl-2 pr-2 pt-2 pb-2'>{props.name}</span></p>
            <p className="absolute mt-[5px] scale-90 max-[400px]:scale-50">
                ID: <span className='bg-white pl-2 pr-2 pt-2 pb-2'>{props.id}</span>
            </p>
            <p className="absolute mt-[70px] scale-90 max-[400px]:scale-50">
                Batch: <span className='bg-white pl-4 pr-4 pt-2 pb-2'>{props.batch}</span>
            </p>
            <p className="absolute mt-[135px] scale-90 max-[400px]:scale-50">
                Email: <span className='bg-white pl-4 pr-4 pt-2 pb-2'>{props.email}</span>
            </p>
        </div>
    );
}
