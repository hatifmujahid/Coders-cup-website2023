import { fast,redGradient } from "../assets"
export default function Footer(){
    return(
        <div style={{backgroundImage: `url(${fast}),url(${redGradient})`, backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: '100vh',
        width: '100vw',
        backgroundAttachment: 'fixed',
        transition: 'all 0.5s ease-in-out',}}>
            <footer class="bg-white rounded-lg shadow m-3 dark:bg-black relative snap-end">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between relative">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{' '}
                    <a href="#" class="hover:underline">
                        ACM™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
        </div>
        
    )
}