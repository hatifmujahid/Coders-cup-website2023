import { codersCupLogo, homeBackground, hawkingsLogo } from '../assets';
import { Link } from 'react-router-dom';
import './homepage.css';
import Navbar from './Navbar';
function HomePage() {
    return (
        <>
            <div
                className="homeimg snap-start"
                style={{
                    backgroundImage: `url(${homeBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    height: '100vh',
                    width: '100vw',
                    backgroundAttachment: 'fixed',
                    transition: 'all 0.5s ease-in-out',
                    
                }}
            >
                <Navbar />
                <div className="pt-8 flex flex-col justify-center items-center relative ">
                    <img src={codersCupLogo} alt="logo" className="sm:w-2/5 sm:h-2/5 w-4/5 h-4/5 mt-[20px] relative z-2 " />
                    <p
                        className="font-normal max-[400px]:text-sm md:text-l lg:text-[1.5rem] text-white w-6/12 text-center"
                        style={{ fontFamily: 'spotifyMedium' }}
                    >
                        Prepare to embark on an extraordinary coding journey as we announce that registrations for the Coder's Cup, presented by ACM
                        NUCES, are now open. In a world where coding meets the upside down, join us if you dare!
                    </p>

                    <div className='scale-75 lg:scale-90'>
                        <Link to={'register'} state={{}}>
                            <button
                                id="glow"
                                style={{ fontFamily: 'spotifyMedium' }}
                                className=" hover:scale-105 z-2 mt-8 bg-white text-black py-3 px-10 rounded-full text-xl relative hover:bg-black hover:text-red-600  transition duration-300"
                            >
                                {' '}
                                Register Today
                            </button>
                        </Link>
                        <img src={hawkingsLogo} alt="logo" className="relative mt-[-50%] w-[50%] ml-[80%] z-10" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomePage;
