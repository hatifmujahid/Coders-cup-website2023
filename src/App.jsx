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
import { useEffect, useRef } from "react"
function App() {
  const parallax = useRef();

  const handleClick = () => {
    if (parallax.current) {
      console.log(parallax.current.offset)
    }
}
  return (
    <div >
      <Parallax ref={parallax} pages={6} style={{overflow:"auto", top: 0, left: 0}}>
        <ParallaxLayer offset={0} speed={0} >
          <HomePage />
        </ParallaxLayer>
        {teamList.map((team,index) => {
          return (
            <ParallaxLayer onClick={handleClick} offset={index + 1} speed={(index + 1) * 0.2} style={{top:0, left:0}} >
              <TeamPage backgroundImageUrl={team.backgroundImage} teamNameImage={team.headerImage} description={team.description} />
            </ParallaxLayer>
          )
        })}
        <ParallaxLayer offset={7} speed={0} style={{top:0, left:0}} >neaoun</ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
