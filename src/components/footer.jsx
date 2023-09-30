export default function Footer(){
    return(
        <footer class="bg-white rounded-lg shadow m-3 dark:bg-black">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{' '}
                    <a href="#" class="hover:underline">
                        ACM™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}