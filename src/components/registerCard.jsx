
import { registerCardIcon } from '../assets';
export default function RegisterCard(props) {
    
    return (
        <div style={{ fontFamily: 'anonymousPro' }} className="flex items-center justify-center">
            <img src={registerCardIcon} alt="registerCard" className="w-full max-w-[100%]" />
            <p className="absolute mt-[-60px] max-[400px]:scale-[80%] md:text-lg text-sm lg:text-lg">
                Name: <span className='md:text-lg text-sm lg:text-lg bg-white pl-2 pr-2 pt-2 '>{props.name}</span></p>
            <p className="absolute mt-[5px] scale-90 max-[400px]:scale-[80%] md:text-lg text-sm lg:text-lg">
                ID: <span className='bg-white pl-2 pr-2 pt-2  md:text-lg text-sm lg:text-lg'>{props.id}</span>
            </p>
            <p className="absolute mt-[70px] scale-90 max-[400px]:scale-[80%] md:text-lg text-sm lg:text-lg">
                Batch: <span className='bg-white pl-2 pr-2 pt-2  md:text-lg text-sm lg:text-lg'>{props.batch}</span>
            </p>
            <p className="ml-2 absolute mt-[135px] max-[400px]:scale-[80%]  md:text-lg text-sm lg:text-lg">
                Email: <span className='bg-white pl-2 pr-2 pt-2  md:text-lg text-sm lg:text-lg'>{props.email}</span>
            </p>
        </div>
    );
}
