import React from 'react';
import { homeBackground, registerHeader } from '../assets';
import Navbar from './Navbar';
import './register.css'
import { Link } from 'react-router-dom';


export default function Register() {
    const [register, setRegister] = React.useState(false);
    function handleRegister() {
        setRegister(true);
    }
    function handleBack() {
        setRegister(false);
    }

    return (
        <>
            <Navbar />
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
                        <img src={registerHeader} alt="logo" className="sm:w-2/5 sm:h-2/5 w-2/5 h-2/5 mt-[-20px] relative" />
                        <Link to={'confirm'}>
                            <button className='button-confirm' >Confirm </button>
                        </Link>
                    </div>
                </div>
        </>
    );
}
