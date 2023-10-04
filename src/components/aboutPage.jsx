import Navbar from "./Navbar";
import Footer from "./footer";
import { acmLogo } from "../assets";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-black">
                <div
                    className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                    backgroundImage: `url('/bg.png')`,
                    }}
                >
                    {/* About Us Section */}
                    <div className='flex flex-col md:flex-row items-center justify-center m-5'>
                        <div className="flex justify-center flex-col w-full md:w-1/3 p-5 bg-white">
                            <img src="/aboutUs.png" alt="about Us" className="w-5/6 mx-auto" />
                            <p className="text-white mt-4 p-6 font-bold tracking-wide bg-black">
                            The Coders' Cup is an intra-FAST programming competition that
                            stands as the epitome of where rising minds polish and develop
                            their coding abilities while debugging their very own creations.
                            Riddled with challenging questions and mind-boggling problems,
                            Coders' Cup is one of its kind. With the extra motivation that
                            comes with the theme, Coders' Cup has the perfect recipe to remain
                            unparalleled.
                            </p>
                        </div>

                        

                        {/* Excom Section */}
                        <div className="flex items-start w-2/3 p-10">
                        <div className="container">
                        <div className="row">
                            <img src="/Sprite-0001.png" alt="about Us" className="w-5/6 mx-auto" />
                        </div>
                            <p className="text-white mb-10 font-bold tracking-wider bg-black text-3xl">
                            EXECUTIVE COMMITEE '23-'24
                            </p>

                            <div className="row mx-10">

                            <div className="row relative ">
                                <div className="custom-bg-color absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-24 rounded-lg z-10 "></div>
                                <p className="absolute bottom-5 right-0 text-white p-2 z-30">
                                President
                                </p>
                                <p className="absolute bottom-0 right-0 text-white p-2 z-30 text-xl">
                                Mr. Ahmed
                                </p>
                                <img
                                src="/Ahmed.png"
                                alt="Person"
                                className="w-40 h-25 relative z-20  right-10"
                                />
                            </div>

                            <div className="row relative">
                            <div className="custom-bg-color absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-24 rounded-lg z-10"></div>
                            <p className="absolute bottom-5 right-0 text-white p-2 z-30">
                            Vice-President
                            </p>
                            <p className="absolute bottom-0 right-0 text-white p-2 z-30 text-xl">
                            Hira rehman
                            </p>
                            <img
                                src="/hira.png"
                                alt="Person"
                                className="w-40 h-25 relative z-20  right-10"
                            />
                            
                            </div>
                            </div>



                        <div className="row">
                        <div className="row relative">
                            <div className="custom-bg-color absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-24 rounded-lg z-10"></div>
                            <p className="absolute bottom-5 right-0 text-white p-2 z-30">
                                General Sec.
                            </p>
                            <p className="absolute bottom-0 right-0 text-white p-2 z-30 text-xl">
                                Hamad Sami
                            </p>
                            <img
                                src="/hamd.png"
                                alt="Person"
                                className="w-40 h-25 relative z-20  right-10"
                            />                  
                            </div>
                            <div className="row relative">
                            <div className="custom-bg-color absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-24 rounded-lg z-10"></div>
                            <p className="absolute bottom-5 right-0 text-white p-2 z-30">
                                Treasurer
                            </p>
                            <p className="absolute bottom-0 right-0 text-white p-2 z-30 text-xl">
                                Sarim Latif Khan
                            </p>
                            <img
                                src="/sarim.png"
                                alt="Person"
                                className="w-40 h-25 relative z-20  right-10"
                            />                  
                            </div>
                            <div className="row relative">
                            <div className="custom-bg-color absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-24 rounded-lg z-10"></div>
                            <p className="absolute bottom-5 right-0 text-white p-2 z-30">
                                Event Admin
                            </p>
                            <p className="absolute bottom-0 right-0 text-white p-2 z-30 text-xl">
                                Usman Nisar
                            </p>
                            <img
                                src="/usman.png"
                                alt="Person"
                                className="w-40 h-25 relative z-20  right-10"
                            />                  
                            </div>


                        </div>
                        </div>

                        </div>
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
        </>
    )
}