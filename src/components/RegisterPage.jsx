import React from 'react';
import { homeBackground, registrationPlaceholder } from '../assets';
import Navbar from './Navbar';
import './register.css';
import { redacted } from '../assets';
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function Register() {
    // section, phone
    const navigate = useNavigate();
    const location = useLocation();
    const content = location.state.data ? location.state.data : {};
    const handleSuccess = () => navigate('/register/confirm',{ state: {data: formData} });
    const data = {
        teamName: content.teamName ? content.teamName : '',
        teamHouse: content.teamHouse ? content.teamHouse : 'Hawkings Hounds',
        teamBatch: content.teamBatch ? content.teamBatch : '',
        leaderName: content.leaderName ? content.leaderName : '',
        leaderId: content.leaderId ? content.leaderId : '',
        leaderEmail: content.leaderEmail ? content.leaderEmail : '',
        leaderSection: content.leaderSection ? content.leaderSection : '',
        leaderPhone: content.leaderPhone ? content.leaderPhone : '',
        mem1Name: content.mem1Name ? content.mem1Name : '',
        mem1Id: content.mem1Id ? content.mem1Id : '',
        mem1Section: content.mem1Section ? content.mem1Section : '',
        mem1Email: content.mem1Email ? content.mem1Email : '',
        mem2Name: content.mem2Name ? content.mem2Name : '',
        mem2Id: content.mem2Id ? content.mem2Id : '',
        mem2Section: content.mem2Section ? content.mem2Section : '',
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
        if(formData.leaderSection === ''){
            validationErrors.leaderSection = 'Leader Section is required';
        }
        if(formData.leaderPhone === ''){
            validationErrors.leaderPhone = 'Leader Phone is required';
        }else if(/^(\+92|0|92)[0-9]{10}$/gm.test(formData.leaderPhone) === false){
            validationErrors.leaderPhone = 'Please enter a valid phone number';
        }
        if (formData.leaderEmail === '') {
            validationErrors.leaderEmail = 'Leader Email is required';
        }else if(/^[plick]\d{6}@nu\.edu\.pk$/gm.test(formData.leaderEmail) === false){
            validationErrors.leaderEmail = 'Please enter a valid FAST-NU email';
        }
        if (formData.leaderId.length !== 7) {
            validationErrors.leaderId = 'ID should be 7 characters';
        }
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
        if(formData.mem1Section === ''){
            validationErrors.mem1Section = 'Member 1 Section is required';
        }
        if (formData.mem2Name !== '' || formData.mem2Id !== '' || formData.mem2Email !== '' || formData.mem2Section !== '') {
            if (formData.mem2Name === '') {
                validationErrors.mem2Name = 'Member 2 Name is required';
            }
            if(formData.mem2Section === ''){   
                validationErrors.mem2Section = 'Member 2 Section is required';
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
                        style={{ fontFamily: 'anonymousPro', backgroundColor: '#FFFFFF' }}
                        id="clipboard"
                        className="p-10 mt-[5%] border-4 border-dashed border-gray-800 w-[80%] h-[80%] z-2"
                    >
                        <p className="text-black md:text-2xl text-l lg:text-5xl  text-center mb-4" style={{ fontFamily: 'circularStd' }}>
                            Coder's Cup - Sign Up Today!
                        </p>
                        <p className="text-black md:text-xl text-md lg:text-xl  text-center mb-4" style={{ fontFamily: 'circularStd' }}>
                            A Minimum of 2 and a Maximum of 3 Members are allowed to form a team.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-16">
                                <label type="text" className="lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                    Team Name:{' '}
                                </label>
                                <div>
                                    <input value={formData.teamName} name="teamName" onChange={handleChange} type="text" className="border border-solid-2px border-black lg:ml-2 h-10" placeholder='Coders'/>
                                    {errors.teamName && <p className="text-red-500">&nbsp;{errors.teamName}</p>}
                                </div>
                                <label type="text" className="lg:ml-[10%] lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                    House Name:{' '}
                                </label>
                                <select name="teamHouse" value={formData.teamHouse} onChange={handleChange} className="lg:ml-2 h-10 w-50 border border-solid-2px border-black" >
                                    <option value="Hawkings Hounds">Hawkings Hounds</option>
                                    <option value="The Mindflayers">The Mindflayers</option>
                                    <option value="The Shadow Keepers">The Shadow Keepers</option>
                                    <option value="Veccnas Valkeries">Veccnas Valkeries</option>
                                </select>
                                <label className="lg:ml-[10%] lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                    Batch:{' '}
                                </label>
                                <div>
                                <input value={formData.teamBatch} required onChange={handleChange}
                                 name="teamBatch"
                                  type="text" className="lg:ml-2 h-10 w-20 border border-solid-2px border-black" placeholder="2020" />
                                {errors.teamBatch && <p className=" text-red-500">&nbsp;{errors.teamBatch}</p>}
                                </div>
                            </div>
                            <hr className="mt-4" />
                            <div className="flex flex-row mt-8">
                                <div className="flex flex-col">
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Leader Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input value={formData.leaderName} name="leaderName" required onChange={handleChange} type="text" className="border border-solid-2px border-black lg:ml-2 h-10" />
                                        {errors.leaderName && <p className="text-red-500">&nbsp;{errors.leaderName}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label required className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Leader ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.leaderId}
                                            name="leaderId"
                                            onChange={handleChange}
                                            type="text"
                                            className="lg:ml-2 h-10 border border-solid-2px border-black"
                                            placeholder="k201234"
                                            maxLength={7}
                                        />
                                        {errors.leaderId && <p className="text-red-500">&nbsp;{errors.leaderId}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Leader Email:&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.leaderEmail}
                                        name="leaderEmail" required onChange={handleChange} type="text" className="lg:ml-2 h-10 border border-solid-2px border-black" />
                                       {errors.leaderEmail && <p className="text-red-500">&nbsp;{errors.leaderEmail}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Leader Section:&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.leaderSection}
                                        name="leaderSection" required onChange={handleChange} type="text" className="lg:ml-2 h-10 border border-solid-2px border-black" />
                                       {errors.leaderSection && <p className="text-red-500">&nbsp;{errors.leaderSection}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Leader Phone #:&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.leaderPhone}
                                        name="leaderPhone" required onChange={handleChange} type="text" className="lg:ml-2 h-10 border border-solid-2px border-black" />
                                       {errors.leaderPhone && <p className="text-red-500">&nbsp;{errors.leaderPhone}</p>}
                                        </div>
                                    </div>
                                </div>
                                <img src={redacted} alt="redacted" className="lg:visible invisible pl-60 position-fixed h-60" />
                            </div>
                            <hr className="mt-4" />
                            <div className="flex flex-row mt-8">
                                <div className="flex flex-col">
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Member 1 Name:&nbsp;&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.mem1Name}
                                        name= "mem1Name" onChange={handleChange} type="text" className="lg:ml-2 h-10 border border-solid-2px border-black" />
                                        {errors.mem1Name && <p className="text-red-500">&nbsp;{errors.mem1Name}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Member 1 ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.mem1Id}
                                        name="mem1Id"
                                            onChange={handleChange}
                                            type="text"
                                            className="lg:ml-2 h-10 border border-solid-2px border-black"
                                            placeholder="k20xxxx"
                                            maxLength={7}
                                        />
                                        {errors.mem1Id && <p className="text-red-500">&nbsp;{errors.mem1Id}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Member 1 Email:&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.mem1Email}
                                        name="mem1Email" onChange={handleChange} type="text" className="lg:ml-2 h-10 border border-solid-2px border-black" />
                                        {errors.mem1Email && <p className="text-red-500">&nbsp;{errors.mem1Email}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Member 1 Section:{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.mem1Section}
                                        name="mem1Section" onChange={handleChange} type="text" className="lg:ml-2 h-10 border border-solid-2px border-black" />
                                        {errors.mem1Section && <p className="text-red-500">&nbsp;{errors.mem1Section}</p>}
                                        </div>
                                    </div>
                                </div>
                                <img src={redacted} alt="redacted" className="lg:visible invisible ml-60 h-60" />
                            </div>
                            <hr className="mt-4" />
                            <div className="flex flex-row mt-8">
                                <div className="flex flex-col">
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Member 2 Name:&nbsp;&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.mem2Name}
                                        name="mem2Name" onChange={handleChange} type="text" className="lg:ml-2 h-10 border border-solid-2px border-black" />
                                        {errors.mem2Name && <p className="text-red-500">&nbsp;{errors.mem2Name}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Member 2 ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.mem2Id}
                                        name="mem2Id"
                                            onChange={handleChange}
                                            type="text"
                                            className="lg:ml-2 h-10 border border-solid-2px border-black"
                                            placeholder="k201234"
                                            maxLength={7}
                                        />
                                        {errors.mem2Id && <p className="text-red-500">&nbsp;{errors.mem2Id}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Member 2 Email:&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.mem2Email}
                                        name="mem2Email" onChange={handleChange} type="text" className="lg:ml-2 h-10 border border-solid-2px border-black" />
                                       {errors.mem2Email && <p className="text-red-500">&nbsp;{errors.mem2Email}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Member 2 Section:{' '}
                                        </label>
                                        <div>
                                        <input
                                        value={formData.mem2Section}
                                        name="mem2Section" onChange={handleChange} type="text" className="lg:ml-2 h-10 border border-solid-2px border-black" />
                                       {errors.mem2Section && <p className="text-red-500">&nbsp;{errors.mem2Section}</p>}
                                        </div>
                                    </div>
                                </div>
                                <img src={redacted} alt="redacted" className="lg:visible invisible ml-60 h-60" />
                            </div>
                        </form>
                        <button type="submit" style={{fontFamily:"circularStd"}}className="button-confirm lg:ml-[80%] ml-[40%] mt-8 lg:text-2xl md:text-xl  p-4 text-lg" onClick={handleSubmit}>
                            Confirm{' '}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
