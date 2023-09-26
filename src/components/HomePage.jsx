import {codersCupLogo, homeBackground, hawkingsLogo} from "../assets"
import "./homepage.css"
function HomePage(){
    return (
        <>
        // TODO: NAVBAR
        <div style={{fontFamily:"spotifyMedium"}}>navbar div</div>
        <div className="homeimg" style={{
          backgroundImage: `url(${homeBackground})`,
          backgroundSize: "contain",
          backgroundPosition: "top 4em center",
            backgroundRepeat: "no-repeat",
          height: "100%",
    
        }}>
            <div className="flex flex-col justify-center items-center">
                <img src={codersCupLogo} alt="logo" className=" sm:w-2/5 sm:h-2/5 w-2/5 h-2/5 mt-[-20px] relative z-2" />
                <p className="font-normal md:text-l sm:text-small text-white lg:text-[1.5rem] dark:text-white w-6/12 text-center  " style={{fontFamily:"spotifyMedium"}}>Prepare to embark on an extraordinary coding journey as we announce that registrations for the Coder's Cup, presented by ACM NUCES, are now open. In a world where coding meets the upside down, join us if you dare!</p>
                <div>
                  <button id= "glow" style={{fontFamily:"spotifyMedium"}} className=" hover:scale-105 z-2 mt-16 bg-white text-black py-3 px-10 rounded-full text-xl relative hover:bg-black hover:text-red-600  transition duration-300"> Register Today
                  </button>
                  <img src={hawkingsLogo} alt="logo" className="relative mt-[-50%] w-[50%] ml-[80%] z-10" />
                </div>
            </div>
        </div>
        </>
    )
}
export default HomePage;