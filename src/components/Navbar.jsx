import { acmLogo } from '../assets';
import { useEffect, useState } from 'react';
function Navbar() {
    const [isNavbarOpen, setNavbarOpen] = useState(false);

    const handleNavbarToggle = () => {
        setNavbarOpen((prevState) => !prevState);
    };
    useEffect(() => {
        if(window.location.pathname === "/register"){
            let button = document.getElementsByClassName("register-btn")[0]
            button.style.color = "#F44336"

        }
        else{
            let button = document.getElementsByClassName("home-btn")[0]
            button.style.color = "#F44336"
        }
    }
    )
    return (
        <nav class="bg-white border-black dark:bg-black">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center">
                    <img src={acmLogo} class="h-16 w-20 mr-3" alt="acm Logo" />
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    aria-controls="navbar-default"
                    aria-expanded={isNavbarOpen ? 'true' : 'false'}
                    onClick={handleNavbarToggle}
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div
                    className={`${isNavbarOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
                    class="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700">
                        <li>
                            <a
                                href="/"
                                class="home-btn block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                aria-current="page"
                                
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/register"
                                class="register-btn block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Register
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
