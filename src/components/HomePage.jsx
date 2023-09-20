import {codersCupLogo, homeBackground} from "../assets"
import "./homepage.css"
function HomePage(){
    return (
        <>
        // TODO: NAVBAR
        <div style={{fontFamily:"spotifyMedium"}}>navbar div</div>
        <div classname="homeimg" style={{
          backgroundImage: `url(${homeBackground})`,
          backgroundSize: "contain",
          backgroundPosition: "top 4em center",
            backgroundRepeat: "no-repeat",
          height: "100%",
    
        }}>
            <div className="flex flex-col justify-center items-center">
                <img src={codersCupLogo} alt="logo" style={{width:"40%",height:"40%", marginTop:"-20px",position:"relative", zIndex:2}} />
                <p class="font-normal md:text-sm sm:text-xs text-white lg:text-xl dark:text-white w-6/12 text-center " style={{fontFamily:"spotifyBold"}}>Prepare to embark on an extraordinary coding journey as we announce that registrations for the Coder's Cup, presented by ACM NUCES, are now open. In a world where coding meets the upside down, join us if you dare!</p>
            </div>
        </div>
        </>
    )
}
export default HomePage;