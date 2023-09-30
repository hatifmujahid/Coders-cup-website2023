import React from 'react';
import { homeBackground, registrationPlaceholder } from '../assets';
import Navbar from './Navbar';
import './register.css'
import { Link } from 'react-router-dom';
import { redacted } from '../assets';

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
                    backgroundRepeat: 'repeat',
                    position: 'relative',
                    backgroundAttachment: 'fixed',
                }}
            >
                <div className="pt-8 flex flex-col justify-center items-center z-1 pb-40">
                    
                    <div style={{ fontFamily: 'anonymousPro',backgroundColor: "#D9D3CD" }}  id="clipboard" className='p-10 mt-[5%] border-4 border-dashed border-gray-800 w-[80%] h-[80%] z-2'>
                        <p
                        className="text-black md:text-2xl text-l lg:text-5xl  text-center mb-4"
                        style={{ fontFamily: 'circularStd' }}
                    >Coder's Cup - Sign Up Today!</p>
                        <div className='flex flex-col lg:flex-row sm:flex-col md:flex-col'>
                            <label className='lg:text-2xl md:text-xl sm:text-base' style={{ fontFamily: 'anonymousPro' }}>Team Name: </label>
                            <input type='text' className=' lg:ml-2 h-10' />
                            <label className='lg:ml-[40%] lg:text-2xl md:text-xl sm:text-base' style={{ fontFamily: 'anonymousPro' }}>Batch: </label>
                            <input type='text' className='lg:ml-2 h-10 w-20' />
                        </div>
                        <hr className='mt-4' />
                        <div className='flex flex-row mt-8'>
                            <div className='flex flex-col'>
                                <div className='flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16'>
                                    <label className='mt-2 lg:text-2xl md:text-xl sm:text-base' style={{ fontFamily: 'anonymousPro' }}>Leader Name:&nbsp;&nbsp;&nbsp; </label>
                                    <input type='text' className='lg:ml-2 h-10' />
                                </div>
                                <div className='flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16'>
                                    <label className='mt-2 lg:text-2xl md:text-xl sm:text-base' style={{ fontFamily: 'anonymousPro' }}>Leader ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                                    <input type='text' className='lg:ml-2 h-10' />
                                </div>
                                <div className='flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16'>
                                    <label className='mt-2 lg:text-2xl md:text-xl sm:text-base' style={{ fontFamily: 'anonymousPro' }}>Leader Email:&nbsp;&nbsp; </label>
                                    <input type='text' className='lg:ml-2 h-10' />
                                </div>
                            </div>
                            <img src={redacted} alt="redacted" className="lg:visible invisible ml-60" />
                        </div>
                        <hr className='mt-4' />
                        <div className='flex flex-row mt-8'>
                            <div className='flex flex-col'>
                                <div className='flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16'>
                                    <label className='mt-2 lg:text-2xl md:text-xl sm:text-base' style={{ fontFamily: 'anonymousPro' }}>Member 1 Name:&nbsp; </label>
                                    <input type='text' className='lg:ml-2 h-10' />
                                </div>
                                <div className='flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16'>
                                    <label className='mt-2 lg:text-2xl md:text-xl sm:text-base' style={{ fontFamily: 'anonymousPro' }}>Member 1 ID:&nbsp;&nbsp;&nbsp; </label>
                                    <input type='text' className='lg:ml-2 h-10' />
                                </div>
                                <div className='flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16'>
                                    <label className='mt-2 lg:text-2xl md:text-xl sm:text-base' style={{ fontFamily: 'anonymousPro' }}>Member 1 Email: </label>
                                    <input type='text' className='lg:ml-2 h-10' />
                                </div>
                            </div>
                            <img src={redacted} alt="redacted" className="lg:visible invisible ml-60" />
                        </div>
                        <hr className='mt-4' />
                        <div className='flex flex-row mt-8'>
                            <div className='flex flex-col'>
                                <div className='flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16'>
                                    <label className='mt-2 lg:text-2xl md:text-xl sm:text-base' style={{ fontFamily: 'anonymousPro' }}>Member 2 Name:&nbsp; </label>
                                    <input type='text' className='lg:ml-2 h-10' />
                                </div>
                                <div className='flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16'>
                                    <label className='mt-2 lg:text-2xl md:text-xl sm:text-base' style={{ fontFamily: 'anonymousPro' }}>Member 2 ID:&nbsp;&nbsp;&nbsp; </label>
                                    <input type='text' className='lg:ml-2 h-10' />
                                </div>
                                <div className='flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16'>
                                    <label className='mt-2 lg:text-2xl md:text-xl sm:text-base' style={{ fontFamily: 'anonymousPro' }}>Member 2 Email: </label>
                                    <input type='text' className='lg:ml-2 h-10' />
                                </div>
                            </div>
                            <img src={redacted} alt="redacted" className="lg:visible invisible ml-60" />
                          
                        </div>
                        <Link to={'confirm'}>
                            <button className='button-confirm lg:ml-[80%] ml-[40%] mt-8 lg:text-2xl md:text-xl  p-4 text-lg' >Confirm </button>
                        </Link>
                    </div>
                    </div>
            </div>
        </>
    );
}
