import React from 'react';
import { homeBackground, registrationPlaceholder } from '../assets';
import Navbar from './Navbar';
import './register.css';
import { redacted } from '../assets';
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function Register() {
    const navigate = useNavigate();
    const location = useLocation();
    const content = location.state.data ? location.state.data : {};
    const handleSuccess = () => navigate('/register/confirm',{ state: {data: formData} });
    const data = {
        teamName: content.teamName ? content.teamName : '',
        teamBatch: content.teamBatch ? content.teamBatch : '',
        leaderName: content.leaderName ? content.leaderName : '',
        leaderId: content.leaderId ? content.leaderId : '',
        leaderEmail: content.leaderEmail ? content.leaderEmail : '',
        mem1Name: content.mem1Name ? content.mem1Name : '',
        mem1Id: content.mem1Id ? content.mem1Id : '',
        mem1Email: content.mem1Email ? content.mem1Email : '',
        mem2Name: content.mem2Name ? content.mem2Name : '',
        mem2Id: content.mem2Id ? content.mem2Id : '',
        mem2Email: content.mem2Email ? content.mem2Email : '',
    };
    const [errors, setErrors] = React.useState({});
    const [formData, setFormData] = React.useState(data);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        setErrors({});
        e.preventDefault();
        const validationErrors = {};
        if (formData.teamName === '') {
            validationErrors.teamName = 'Team Name is required';
        }
        if (formData.teamBatch === '') {
            validationErrors.teamBatch = 'Team Batch is required';
        }else if(formData.teamBatch.length !== 4){
            validationErrors.teamBatch = 'Batch should be 4 characters long';
        }else if(formData.teamBatch > 2023 || formData.teamBatch < 2018){
            validationErrors.teamBatch = 'Batch should be between 2018 and 2023';
        }
        if (formData.leaderName === '') {
            validationErrors.leaderName = 'Leader Name is required';
        }
        if (formData.leaderId === '') {
            validationErrors.leaderId = 'Leader ID is required';
        }
        if (formData.leaderEmail === '') {
            validationErrors.leaderEmail = 'Leader Email is required';
        }else if(/^[plick]\d{6}@nu\.edu\.pk$/gm.test(formData.leaderEmail) === false){
            validationErrors.leaderEmail = 'Please enter a valid FAST-NU email';
        }
        if (formData.leaderId.length !== 7) {
            validationErrors.leaderId = 'ID should be 7 characters';
        }
        if (formData.mem1Name !== '' || formData.mem1Id !== '' || formData.mem1Email !== '') {
            if (formData.mem1Name === '') {
                validationErrors.mem1Name = 'Member 1 Name is required';
            }
            if (formData.mem1Id === '') {
                validationErrors.mem1Id = 'Member 1 ID is required';
            }
            if (formData.mem1Id.length !== 7) {
                validationErrors.mem1Id = 'ID should be 7 characters';
            }
            if (formData.mem1Email === '') {
                validationErrors.mem1Email = 'Member 1 Email is required';
            }else if(/^[plick]\d{6}@nu\.edu\.pk$/gm.test(formData.mem1Email) === false){
                validationErrors.mem1Email = 'Please enter a valid FAST-NU email';
            }
        }
        if (formData.mem2Name !== '' || formData.mem2Id !== '' || formData.mem2Email !== '') {
            if (formData.mem2Name === '') {
                validationErrors.mem2Name = 'Member 2 Name is required';
            }
            if (formData.mem2Id === '') {
                validationErrors.mem2Id = 'Member 2 ID is required';
            }
            if (formData.mem2Id.length !== 7) {
                validationErrors.mem2Id = 'ID should be 7 characters';
            }
            if (formData.mem2Email === '') {
                validationErrors.mem2Email = 'Member 2 Email is required';
            }else if(/^[plick]\d{6}@nu\.edu\.pk$/gm.test(formData.mem2Email) === false){
                validationErrors.mem2Email = 'Please enter a valid FAST-NU email';
            }
        }
        setErrors(validationErrors);
        if(Object.keys(validationErrors).length === 0){
            console.log("Sucess")
            handleSuccess();
        }

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
                    <div
                        style={{ fontFamily: 'anonymousPro', backgroundColor: '#D9D3CD' }}
                        id="clipboard"
                        className="p-10 mt-[5%] border-4 border-dashed border-gray-800 w-[80%] h-[80%] z-2"
                    >
                        <p className="text-black md:text-2xl text-l lg:text-5xl  text-center mb-4" style={{ fontFamily: 'circularStd' }}>
                            Coder's Cup - Sign Up Today!
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col">
                                <label type="text" className="lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                    Team Name:{' '}
                                </label>
                                <div>
                                    <input value={formData.teamName} name="teamName" onChange={handleChange} type="text" className=" lg:ml-2 h-10" placeholder='Coders'/>
                                    {errors.teamName && <p className="text-red-500">&nbsp;{errors.teamName}</p>}
                                </div>
                                
                                <label className="lg:ml-[40%] lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                    Batch:{' '}
                                </label>
                                <div>
                                <input value={formData.teamBatch} required onChange={handleChange}
                                 name="teamBatch"
                                  type="text" className="lg:ml-2 h-10 w-20" placeholder="2020" />
                                {errors.teamBatch && <p className="text-red-500">&nbsp;{errors.teamBatch}</p>}
                                </div>
                            </div>
                            <hr className="mt-4" />
                            <div className="flex flex-row mt-8">
                                <div className="flex flex-col">
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Leader Name:&nbsp;&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input value={formData.leaderName} name="leaderName" required onChange={handleChange} type="text" className="lg:ml-2 h-10" />
                                        {errors.leaderName && <p className="text-red-500">&nbsp;{errors.leaderName}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label required className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Leader ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.leaderId}
                                            name="leaderId"
                                            onChange={handleChange}
                                            type="text"
                                            className="lg:ml-2 h-10"
                                            placeholder="k201234"
                                            maxLength={7}
                                        />
                                        {errors.leaderId && <p className="text-red-500">&nbsp;{errors.leaderId}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Leader Email:&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.leaderEmail}
                                        name="leaderEmail" required onChange={handleChange} type="text" className="lg:ml-2 h-10" />
                                       {errors.leaderEmail && <p className="text-red-500">&nbsp;{errors.leaderEmail}</p>}
                                        </div>
                                    </div>
                                </div>
                                <img src={redacted} alt="redacted" className="lg:visible invisible pl-60 position-fixed" />
                            </div>
                            <hr className="mt-4" />
                            <div className="flex flex-row mt-8">
                                <div className="flex flex-col">
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Member 1 Name:&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.mem1Name}
                                        name= "mem1Name" onChange={handleChange} type="text" className="lg:ml-2 h-10" />
                                        {errors.mem1Name && <p className="text-red-500">&nbsp;{errors.mem1Name}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Member 1 ID:&nbsp;&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.mem1Id}
                                        name="mem1Id"
                                            onChange={handleChange}
                                            type="text"
                                            className="lg:ml-2 h-10"
                                            placeholder="k201234"
                                            maxLength={7}
                                        />
                                        {errors.mem1Id && <p className="text-red-500">&nbsp;{errors.mem1Id}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Member 1 Email:{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.mem1Email}
                                        name="mem1Email" onChange={handleChange} type="text" className="lg:ml-2 h-10" />
                                        {errors.mem1Email && <p className="text-red-500">&nbsp;{errors.mem1Email}</p>}
                                        </div>
                                    </div>
                                </div>
                                <img src={redacted} alt="redacted" className="lg:visible invisible ml-60" />
                            </div>
                            <hr className="mt-4" />
                            <div className="flex flex-row mt-8">
                                <div className="flex flex-col">
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Member 2 Name:&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.mem2Name}
                                        name="mem2Name" onChange={handleChange} type="text" className="lg:ml-2 h-10" />
                                        {errors.mem2Name && <p className="text-red-500">&nbsp;{errors.mem2Name}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Member 2 ID:&nbsp;&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.mem2Id}
                                        name="mem2Id"
                                            onChange={handleChange}
                                            type="text"
                                            className="lg:ml-2 h-10"
                                            placeholder="k201234"
                                            maxLength={7}
                                        />
                                        {errors.mem2Id && <p className="text-red-500">&nbsp;{errors.mem2Id}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Member 2 Email:{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.mem2Email}
                                        name="mem2Email" onChange={handleChange} type="text" className="lg:ml-2 h-10" />
                                       {errors.mem2Email && <p className="text-red-500">&nbsp;{errors.mem2Email}</p>}
                                        </div>
                                    </div>
                                </div>
                                <img src={redacted} alt="redacted" className="lg:visible invisible ml-60" />
                            </div>
                        </form>
                        <button type="submit" className="button-confirm lg:ml-[80%] ml-[40%] mt-8 lg:text-2xl md:text-xl  p-4 text-lg" onClick={handleSubmit}>
                            Confirm{' '}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
