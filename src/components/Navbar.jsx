import navLinks from "./navLinks";
import { useState } from "react";
import { acmLogo } from "../assets";
function Navbar(){
    const [active, setActive] = useState("");
    return(
        <div className="min-height-40 mt-5 mb-5 ml-10 flex flex-row ">
             <ul className='mt-4 list-none text-white flex flex-row '>
            {navLinks.map((nav) => (
                <li
                key={nav.id}
                className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                } hover:text-navbar-red text-[18px] font-medium cursor-pointer ml-8 lg:text-xl md:text-base sm:text-base`}
                onClick={() => setActive(nav.title)}
                >
                <a style={{fontFamily:"spotifyMedium"}} href={`#${nav.title}`}>{nav.title}</a>
                </li>
            ))}
        </ul>
        <img src={acmLogo}  className="lg:ml-[70%] md:ml-[50%] sm:ml-[40%] w-30 h-20" alt="logo"/>
        </div>
    );
}
export default Navbar;