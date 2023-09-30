import RegisterCard from './registerCard';
import goBack from '../assets/goBack.png'
import YesBtn from '../assets/yesBtn.png';
import homeBackground from '../assets/homeBG.jpg';
import ConfirmHeader from '../assets/confirmHeader.png';
import { Link } from 'react-router-dom';


export default function ConfirmPage() {
    return (
        <div
            className="homeimg"
            style={{
                backgroundImage: `url(${homeBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                height: '100vh',
                width: '100vw',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="pt-8 flex flex-col justify-center items-center">
                <img src={ConfirmHeader} alt="confirmdetails" className="sm:w-2/5 sm:h-2/5 w-2/5 h-2/5 mt-[-20px] relative z-2" />
                <p
                    className="font-normal md:text-l sm:text-small text-white lg:text-[1.5rem] dark:text-white w-4/12 text-center"
                    style={{ fontFamily: 'spotifyMedium' }}
                >
                    Team Name: <span className="font-bold">TBD</span>
                </p>
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row relative items-center justify-center ml-5">
                    <RegisterCard />
                    <RegisterCard />
                    <RegisterCard />
                </div>
                <div className="flex flex-row sm:flex-col md:flex-col lg:flex-row relative items-center justify-center ">
                    <Link to={'/register'}>
                        <img
                            src={goBack}
                            alt="goBack"
                            className="relative scale-[50%] z-10 hover:cursor-pointer hover:scale-[60%] transition"
                        />
                    </Link>
                    <img src={YesBtn} alt="yes button" className="relative scale-[50%] z-10 hover:cursor-pointer hover:scale-[60%] transition" />
                </div>
            </div>
        </div>
    );
}
