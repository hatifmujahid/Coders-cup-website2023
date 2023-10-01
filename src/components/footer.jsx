import { fast, redGradient, acmLogo } from "../assets"
export default function Footer() {
    return (
        <div className="snap-start flex flex-col justify-end" style={{
            backgroundImage: `url(${fast}),url(${redGradient})`, backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            height: '100vh',
            width: '100vw',
            backgroundAttachment: 'fixed',
            transition: 'all 0.5s ease-in-out'
        }}>

            <footer class="bg-transparent">
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
                                        <p class="hover:underline">Coders Cup</p>
                                    </li>
                                    <li>
                                        <p class="hover:underline">Developers Day</p>
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