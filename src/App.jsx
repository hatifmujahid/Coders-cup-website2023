import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import "./App.css"
import HomePage from "./components/HomePage"
import "./fonts/CircularSpotifyText-Black.otf"
import "./fonts/CircularSpotifyText-BlackItalic.otf"
import "./fonts/CircularSpotifyText-Bold.otf"
import "./fonts/CircularSpotifyText-Book.otf"
import "./fonts/CircularSpotifyText-Light.otf"
import "./fonts/CircularSpotifyText-Medium.otf"
import TeamPage from "./components/TeamPage"
import teamList from "./components/teamList"
import teambackground from "./assets/teamBackground.jpg"
import teamHeader from "./assets/teamHeader.png"
import fastbg from "./assets/fastbg.png"
import { useEffect, useRef } from "react"
function App() {
  const parallax = useRef();

    

    
  return (
    <div >
      <Parallax ref={parallax} pages={7} style={{overflow:"auto", top: 0, left: 0}}>
        <ParallaxLayer  offset={0} speed={0} >
          <HomePage />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-0.7}>
          <div className="flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url(${fastbg})`,
                backgroundSize: "cover",
                position: "relative",
                backgroundPosition: "center",
                backgroundRepeat: "round",
                height: "100%",
                width: "100%",
                
            }}>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1}>
          <div className="flex flex-col justify-center items-center"
            style={{
              backgroundImage: `url(${teambackground})`,
              backgroundSize: "cover",
              position: "relative",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
              
            }}>
            <img src={teamHeader} alt="logo" className="relative" ></img>
          </div>            
        </ParallaxLayer>
        {teamList.map((team,index) => {
          return (
            <ParallaxLayer offset={index + 2} speed={(index + 2) * (0.2/2)} style={{top:0, left:0,height:"100vh", width:"100vw",backgroundImage:team.backgroundImage}} >
              <TeamPage backgroundImageUrl={team.backgroundImage} teamNameImage={team.headerImage} description={team.description} />
            </ParallaxLayer>
          )

        })}
        <ParallaxLayer offset={8} speed={0} style={{top:0, left:0,height:"100vh", width:"100vw"}} >

        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
