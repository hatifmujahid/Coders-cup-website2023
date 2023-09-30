import React from 'react';
import homeBackground from '../assets/homeBG.jpg';
import RegisterHeader from '../assets/registerHeader.png';
import ClipboardRegister from '../assets/clipboardRegister.png';
import Navbar from './Navbar';

export default function Register() {
    const [register, setRegister] = React.useState(true);
    function handleRegister() {
        setRegister((register) => !register);
    }
    const [back, setBack] = React.useState(false);
    function handleBack() {
        setBack((back) => !back);
    }
    return (
        <>
            <Navbar />
            {register ? (
                <div
                    className="homeimg"
                    style={{
                        backgroundImage: `url(${homeBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                        height: '100vh',
                        width: '100vw',
                        backgroundAttachment: 'fixed',
                    }}
                >
                    <div className="pt-8 flex flex-col justify-center items-center">
                        <img src={RegisterHeader} alt="logo" className="sm:w-2/5 sm:h-2/5 w-2/5 h-2/5 mt-[-20px] relative z-2" />
                    </div>
                </div>
            ) : (
                <p>das</p>
            )}
        </>
    );
}
