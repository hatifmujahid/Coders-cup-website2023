import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import "./App.css"
import HomePage from "./components/HomePage"
import "./fonts/CircularSpotifyText-Black.otf"
import "./fonts/CircularSpotifyText-BlackItalic.otf"
import "./fonts/CircularSpotifyText-Bold.otf"
import "./fonts/CircularSpotifyText-Book.otf"
import "./fonts/CircularSpotifyText-Light.otf"
import "./fonts/CircularSpotifyText-Medium.otf"
function App() {

  return (
    <div >
      <Parallax pages={1} style={{overflow:"hidden", top: 0, left: 0}}>
        <ParallaxLayer offset={0} speed={1} >
          <HomePage />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
