
import { registerCardIcon } from '../assets';
export default function RegisterCard() {
    return (
        <div style={{ fontFamily: 'anonymousPro' }} className="flex items-center justify-center">
            
            <img src={registerCardIcon} alt="registerCard" className="w-full max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] xl:max-w-[90%]" />
            <p className="absolute">Name</p>
            <p className="absolute" style={{ marginTop: '50px', marginRight: '50px' }}>
                ID
            </p>
            <p className="absolute" style={{ marginTop: '50px', marginLeft: '170px' }}>
                Batch
            </p>
            <p className="absolute" style={{ marginTop: '120px' }}>
                Email
            </p>
        </div>
    );
}
