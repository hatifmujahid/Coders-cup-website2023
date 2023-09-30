import './App.css';
import HomePage from './components/HomePage';
import './fonts/CircularSpotifyText-Black.otf';
import './fonts/CircularSpotifyText-BlackItalic.otf';
import './fonts/CircularSpotifyText-Bold.otf';
import './fonts/CircularSpotifyText-Book.otf';
import './fonts/CircularSpotifyText-Light.otf';
import './fonts/CircularSpotifyText-Medium.otf';
import "./fonts/AnonymousPro-Regular.ttf"
import "./fonts/circular-std.ttf"
import TeamPage from './components/TeamPage';
import teamList from './components/teamList';
import teambackground from './assets/teamBackground.jpg';
import teamHeader from './assets/teamHeader.png';
import Navbar from './components/Navbar';

function App() {
    
    return (
        <>
            <a id="button" href="#">
                &#8593;
            </a>
            <Navbar />
            <HomePage />
            <div
                
                className="flex flex-col justify-center items-center duration-10 ease-in-out"
                style={{
                    backgroundImage: `url(${teambackground})`,
                    backgroundSize: 'cover',
                    position: 'relative',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    width: '100vw',
                    backgroundAttachment: 'fixed',
                }}
            >
                <img src={teamHeader} alt="logo" className="relative mt-[-50px]"></img>
            </div>
            {teamList.map((team, index) => {
                return (
                    <div style={{ top: 0, left: 0, height: '100vh', width: '100vw' }}>
                        <TeamPage backgroundImageUrl={team.backgroundImage} teamNameImage={team.headerImage} description={team.description} />
                    </div>
                );
            })}

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
        </>
    );
}

export default App;
