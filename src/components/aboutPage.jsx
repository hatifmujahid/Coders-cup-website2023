import Navbar from "./Navbar";
import Footer from "./footer";
import { acmLogo } from "../assets";
import AboutHeader from "../assets/aboutHeader.png";
import { homeBackground, registrationPlaceholder } from '../assets';
import './aboutPage.css'
import Ahmed from '../assets/ahmed.png';
import Hira from '../assets/hira.png';
import Shahmir from '../assets/shahmir.png';
import Sarim from '../assets/sarim.png';
import Usman from '../assets/usman.png';
import Sprite from '../assets/Sprite-0001.png';
import upcoming from '../assets/upcoming.png';


export default function AboutPage() {
    return (
        <div className="transition"> 
            <Navbar />
            <div
                className="homeimg transition "
                style={{
                    backgroundImage: `url(${homeBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat',
                    position: 'relative',
                    backgroundAttachment: 'fixed',
                    transition: 'all 0.5s ease-in-out',
                }}

            >
                <div className="flex flex-col lg:flex-row items-center justify-center ">
                    <div className="flex justify-center flex-col w-full lg:w-1/3 ">
                        <img src={AboutHeader} alt="about Us" className="lg:w-full md:w-3/6 w-5/6 mx-auto" />
                        <p className="text-white mt-4 p-6 font-normal md:text-xl" style={{ fontFamily: 'spotifyMedium' }}>
                        The Coders' Cup is an intra-FAST programming competition that
                        stands as the epitome of where rising minds polish and develop
                        their coding abilities while debugging their very own creations.
                        Riddled with challenging questions and mind-boggling problems,
                        Coders' Cup is one of its kind. With the extra motivation that
                        comes with the theme, Coders' Cup has the perfect recipe to remain
                        unparalleled.
                        </p>

                        <div className="hidden lg:flex w-80 m-auto">
                            <img src={upcoming} alt="upcoming" />
                        </div>
                    </div>



                    {/* Excome */}

                    {/* div for container */}
                    <div className="flex flex-col m-1">
                        {/* div for log */}
                        <div>
                        <div className="">
                            <img src={Sprite} alt="about Us" className="w-4/6 lg:w-2/6 mx-auto mb-4" />
                        </div>
                            <p className="text-white -mb-10 font-bold tracking-wider text-center text-xl md:text-2xl lg:text-3xl ">
                            EXECUTIVE COMMITEE '23-'24
                            </p>
                        </div>

                        {/* div for main excome */}
                        <div className="flex flex-col md:flex-row md:space-x-16 items-center m-auto">

                        <div className="flex m-8 relative ">
                            <div className="custom-bg-color absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-28 rounded-lg z-10 "></div>
                            <p className="absolute bottom-7 right-0 text-lg font-semibold text-white p-3 z-30">
                            President
                            </p>
                            <p className="absolute bottom-0 right-0 text-white text-4xl font-extrabold p-2 z-30 text-xl">
                            M. Ahmed
                            </p>
                            <img
                            src={Ahmed}
                            alt="Person"
                            className=" w-80 lg:w-80 relative z-20  right-12"
                            />
                        </div>

                        <div className="flex m-8 relative ">
                            <div className="custom-bg-color absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-28 rounded-lg z-10 "></div>
                            <p className="absolute bottom-7 right-0 text-lg font-semibold text-white p-3 z-30">
                            Vice-President
                            </p>
                            <p className="absolute bottom-0 right-0 text-white text-4xl font-extrabold p-2 z-30 text-xl">
                            Hira Rehman
                            </p>
                            <img
                            src={Hira}
                            alt="Person"
                            className=" w-80 lg:w-80 relative z-20  right-12"
                            />
                        </div>

                        </div>

                        {/* div for low profile */}
                        <div className="flex flex-col md:flex-row md:space-x-20 items-center m-auto">
                        <div className="flex relative">
                            <div className="custom-bg-color absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 md:w-56 lg:w-72 h-24 rounded-lg z-10 "></div>
                            <p className="absolute bottom-7 -right-6 text-lg font-semibold text-white p-3 z-30">
                            General Sec.
                            </p>
                            <p className="absolute bottom-0 -right-6 text-white text-2xl font-extrabold p-2 z-30 text-xl">
                            M. Shahmir
                            </p>
                            <img
                            src={Shahmir}
                            alt="Person"
                            className=" w-56 lg:w-64 relative z-20  right-14"
                            />
                        </div>

                        <div className="flex relative">
                            <div className="custom-bg-color absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 md:w-56 lg:w-72 h-24 rounded-lg z-10 "></div>
                            <p className="absolute bottom-5  -right-6 text-lg font-semibold text-white ml-2 p-4 z-30">
                            Treasurer
                            </p>
                            <p className="absolute bottom-0 -right-6 text-white text-2xl font-extrabold p-2 z-30 text-xl">
                            Sarim Latif
                            </p>
                            <img
                            src={Sarim}
                            alt="Person"
                            className=" w-56 lg:w-64 relative z-20  right-14"
                            />
                        </div>

                        <div className="flex relative ">
                            <div className="custom-bg-color absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 md:w-56 lg:w-72 h-24 rounded-lg z-10 "></div>
                            <p className="absolute bottom-5 -right-6 text-lg font-semibold text-white p-3 z-30">
                            Event Admin
                            </p>
                            <p className="absolute bottom-0 -right-6 text-white text-2xl font-extrabold p-2 z-30 text-xl">
                            Usman Nisar
                            </p>
                            <img
                            src={Usman}
                            alt="Person"
                            className=" w-56 lg:w-64 relative z-20  right-14"
                            />
                        </div>
                        </div>
                    </div>


                    <div className="flex lg:hidden w-80 mt-10 m-auto">
                        <img src={upcoming} alt="upcoming" />
                    </div>


                    </div>
            </div>

            <footer class="bg-transparent pt-3">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">

                            <img src={acmLogo} class="h-32 w-40 mr-3" alt="ACM Logo" />


                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Our Events</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <p>Coders Cup</p>
                                    </li>
                                    <li>
                                        <p>Developers Day</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="https://www.instagram.com/acmnuces/?hl=en" target="_blank" class="hover:underline ">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/acmnuceskhi" target="_blank" class="hover:underline">Facebook</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Meet the Developers</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="https://www.linkedin.com/in/muhammad-hatif/" target="_blank" class="hover:underline">Hatif Mujahid</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="https://www.linkedin.com/in/wahaj-javed-k200208/" target="_blank" class="hover:underline ">Wahaj Javed</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="https://www.linkedin.com/in/rayyan-minhaj-79663523a/" target="_blank" class="hover:underline">Rayyan Minhaj</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="https://www.linkedin.com/in/ahmad-aleem-45a2251bb/" target="_blank" class="hover:underline">Ahmad Aleem</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                  
                        <span class="flex flex-row text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023&nbsp;&nbsp; <p class="hover:underline">ACM™</p>. All Rights Reserved.
                        </span>
                    
                </div>
            </footer>
        </div>
    )
}