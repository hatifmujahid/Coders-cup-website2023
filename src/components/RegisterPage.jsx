import React from 'react';
import { homeBackground, registrationPlaceholder } from '../assets';
import Navbar from './Navbar';
import './register.css';
import { redacted } from '../assets';
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { acmLogo } from '../assets';
export default function Register() {
    const [submitLoading, setSubmitLoading] = React.useState(false);
    
    const navigate = useNavigate();
    const location = useLocation();
    const content = location.state ? location.state.data ? location.state.data : {} : {};
    const handleSuccess = () => navigate('/register/confirm',{ state: {data: formData} });
    const data = content ? {
        teamName: content.teamName ? content.teamName : '',
        teamHouse: content.teamHouse ? content.teamHouse : 'Hawkings Hounds',
        teamBatch: content.teamBatch ? content.teamBatch : '2023',
        leaderName: content.leaderName ? content.leaderName : '',
        leaderId: content.leaderId ? content.leaderId : '',
        leaderEmail: content.leaderEmail ? content.leaderEmail : '',
        leaderSection: content.leaderSection ? content.leaderSection : '',
        leaderPhone: content.leaderPhone ? content.leaderPhone : '',
        leaderDepartment: content.leaderDepartment ? content.leaderDepartment : 'CS',
        mem1Name: content.mem1Name ? content.mem1Name : '',
        mem1Id: content.mem1Id ? content.mem1Id : '',
        mem1Section: content.mem1Section ? content.mem1Section : '',
        mem1Department: content.mem1Department ? content.mem1Department : 'CS',
        mem1Email: content.mem1Email ? content.mem1Email : '',
        mem2Name: content.mem2Name ? content.mem2Name : '',
        mem2Id: content.mem2Id ? content.mem2Id : '',
        mem2Section: content.mem2Section ? content.mem2Section : '',
        mem2Department: content.mem2Department ? content.mem2Department : 'CS',
        mem2Email: content.mem2Email ? content.mem2Email : '',
    } : {
        teamName: '',
        teamHouse: 'Hawkings Hounds',
        teamBatch: '2023',
        leaderName: '',
        leaderId: '',
        leaderEmail:  '',
        leaderSection:  '',
        leaderPhone:  '',
        leaderDepartment:  'CS',
        mem1Name: '',
        mem1Id:  '',
        mem1Section:  '',
        mem1Department: 'CS',
        mem1Email: '',
        mem2Name: '',
        mem2Id:  '',
        mem2Section: '',
        mem2Department:  'CS',
        mem2Email: '',
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
    async function idCheck (id){
        const response = await fetch(`https://coders-cup-db-private.vercel.app/id`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                id: id
            }),
        });
        
        const result = await response.json();
        return result;
    }     
    async function teamCheck (team){
        const response = await fetch(`https://coders-cup-db-private.vercel.app/team`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                team: team
            }),
        });

        const result = await response.json();
        return result;
    }
    async function emailCheck (email){
        const response = await fetch(`https://coders-cup-db-private.vercel.app/email`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email: email
            }),
        });

        const result = await response.json();
        return result;
    }

    const handleSubmit = async (e) => {
        setErrors({});
        setSubmitLoading(true);
        e.preventDefault();
        const validationErrors = {};
        if (formData.teamName === '') {
            validationErrors.teamName = 'Team Name is required';
        }
        if(/^[^'\",;:*]*$/gm.test(formData.teamName) === false){
            validationErrors.teamName = 'Please remove special characters ,;:*\'\"';
        }else{
            const check = await teamCheck(formData.teamName);
            if(check === true){
                validationErrors.teamName = 'Team name already registered';
            }
        }
        if (formData.leaderName === '') {
            validationErrors.leaderName = 'Leader Name is required';
        }
        if (formData.leaderId === '') {
            validationErrors.leaderId = 'Leader ID is required';
        }
        else if(/^(18|19|20|21|22|23)[KLPIF]\d{4}$/.test(formData.leaderId) === false){
            validationErrors.leaderId = 'Invalid ID. ID format: 20[K]1234';
        }else{
            const check = await idCheck(formData.leaderId);
            if(check === true){
                validationErrors.leaderId = 'ID already registered';
            }
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
        }else if(/^[klpif]\d{6}@nu\.edu\.pk$/gm.test(formData.leaderEmail) === false){
            validationErrors.leaderEmail = 'Correct format: [k]20XXXX@nu.edu.pk';
        }
        else {
            const check = await emailCheck(formData.leaderEmail);
            if(check === true){
                validationErrors.leaderEmail = 'Email already registered';
            }
        }
        if(formData.leaderDepartment === ''){
            validationErrors.leaderDepartment = 'Leader Department is required';
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
        else if(/^(18|19|20|21|22|23)[KLPIF]\d{4}$/.test(formData.mem1Id) === false){
            validationErrors.mem1Id = 'Invalid ID. ID format: 20[K]1234';
        }
        else {
            const check = await idCheck(formData.mem1Id);
            if(check === true){
                validationErrors.mem1Id = 'ID already registered';
            }
        }
        if(formData.mem1Department === ''){
            validationErrors.mem1Department = 'Member 1 Department is required';
        }
        if (formData.mem1Email === '') {
            validationErrors.mem1Email = 'Member 1 Email is required';
        }else if(/^[klpif]\d{6}@nu\.edu\.pk$/gm.test(formData.mem1Email) === false){
            validationErrors.mem1Email = 'Correct format: [k]20XXXX@nu.edu.pk';
        }
        else {
            const check = await emailCheck(formData.mem1Email);
            if(check === true){
                validationErrors.mem1Email = 'Email already registered';
            }
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
            else if(/^(18|19|20|21|22|23)[KLPIF]\d{4}$/.exec(formData.mem2Id) === false){
                validationErrors.mem2Id = 'Invalid ID. ID format: 20[K]1234';
            }
            else {
                const check = await idCheck(formData.mem2Id);
                if(check === true){
                    validationErrors.mem2Id = 'ID already registered';
                }
            }
            if(formData.mem2Department === ''){
                validationErrors.mem2Department = 'Member 2 Department is required';
            }
            if (formData.mem2Email === '') {
                validationErrors.mem2Email = 'Member 2 Email is required';
            }else if(/^[klpif]\d{6}@nu\.edu\.pk$/gm.test(formData.mem2Email) === false){
                validationErrors.mem2Email = 'Correct format: [k]20XXXX@nu.edu.pk';
            }
            else {
                const check = await emailCheck(formData.mem2Email);
                if(check === true){
                    validationErrors.mem2Email = 'Email already registered';
                }
            }
        }
        setErrors(validationErrors);
        if(Object.keys(validationErrors).length === 0){
            console.log("Sucess")
            handleSuccess();
        }
        setSubmitLoading(false);
        document.getElementById('clipboard').scrollIntoView();
    }
    function devs(){
        document.getElementById('devs').scrollIntoView()
    }
    return (
        <>
            <Navbar />
            <div
                className="homeimg transition"
                style={{
                    backgroundImage: `url(${homeBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat',
                    position: 'relative',
                    backgroundAttachment: 'fixed',
                }}

            >
                <div className="pt-2 flex flex-col justify-center items-center z-1 pb-20 scale-90">
                    <div
                        style={{ fontFamily: 'anonymousPro', backgroundColor: '#FFFFFF' }}
                        id="clipboard"
                        className="p-10 mt-[5%] border-4 border-dashed border-gray-800 w-[80%] h-[80%] z-2"
                    >
                        <p className="text-black md:text-2xl text-l lg:text-5xl  text-center mb-4" style={{ fontFamily: 'circularStd' }}>
                            Coder's Cup - Regisration closed! 
                        </p>
                        <p className="text-black md:text-xl text-md lg:text-xl  text-center mb-4" style={{ fontFamily: 'circularStd' }}>
                            Thank you to all 722 teams for registering. ~Web Dev Team ❤
                        </p>
                        <p className="text-gray-400 md:text-xl text-md lg:text-xl text-center mb-4" style={{ fontFamily: 'circularStd' }}>
                        To showcase our work, you can go through a mock registration process(DB has been disconnected 😄). While you're at it check out the creators of this site <span className="text-black font-normal cursor-pointer hover:scale-110" onClick={devs}>here:</span>
                        </p>
                        <form onSubmit={handleSubmit} >
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
                                <select name="teamBatch" value={formData.teamBatch} onChange={handleChange} className="lg:ml-2 h-10 w-50 border border-solid-2px border-black" >
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                </select>
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
                                        <input placeholder='mike' value={formData.leaderName} name="leaderName" required onChange={handleChange} type="text" className="border border-solid-2px border-black lg:ml-2 h-10" />
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
                                            placeholder="20Kxxxx"
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
                                        placeholder='k20xxxx@nu.edu.pk'
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
                                        placeholder='BCS-7E'
                                        value={formData.leaderSection}
                                        name="leaderSection" required onChange={handleChange} type="text" className="lg:ml-2 h-10 border border-solid-2px border-black" />
                                       {errors.leaderSection && <p className="text-red-500">&nbsp;{errors.leaderSection}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Lead Department:&nbsp;{' '}
                                        </label>
                                        <div>
                                        <select name="leaderDepartment" value={formData.leaderDepartment} onChange={handleChange} className="lg:ml-2 h-10 w-50 border border-solid-2px border-black" >
                                    <option value="CS">CS</option>
                                    <option value="SE">SE</option>
                                    <option value="AI">AI</option>
                                    <option value="CYS">CYS</option>
                                    <option value="BA">BA</option>
                                    <option value="EE">EE</option>
                                    <option value="FT">FT</option>
                                </select>
                                       {errors.leaderDepartment && <p className="text-red-500">&nbsp;{errors.leaderDepartment}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Leader Phone #:&nbsp;&nbsp;{' '}
                                        </label>
                                        <div>
                                        <input
                                        placeholder='0333xxxxxxx'
                                        value={formData.leaderPhone}
                                        name="leaderPhone" required onChange={handleChange} type="text" className="lg:ml-2 h-10 border border-solid-2px border-black" maxLength={11}/>
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
                                        placeholder='steve'
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
                                            placeholder="20Kxxxx"
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
                                        placeholder='k20xxxx@nu.edu.pk'
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
                                        placeholder='BCS-7E'
                                        value={formData.mem1Section}
                                        name="mem1Section" onChange={handleChange} type="text" className="lg:ml-2 h-10 border border-solid-2px border-black" />
                                        {errors.mem1Section && <p className="text-red-500">&nbsp;{errors.mem1Section}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Mem 1 Department:{' '}
                                        </label>
                                        <div>
                                        <select name="mem1Department" value={formData.mem1Department} onChange={handleChange} className="lg:ml-2 h-10 w-50 border border-solid-2px border-black" >
                                    <option value="CS">CS</option>
                                    <option value="SE">SE</option>
                                    <option value="AI">AI</option>
                                    <option value="CYS">CYS</option>
                                    <option value="BA">BA</option>
                                    <option value="EE">EE</option>
                                    <option value="FT">FT</option>
                                </select>
                                       {errors.mem1Department && <p className="text-red-500">&nbsp;{errors.mem1Department}</p>}
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
                                        placeholder='robin'
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
                                            placeholder="20Kxxxx"
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
                                        placeholder='k20xxxx@nu.edu.pk'
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
                                        placeholder='BCS-7E'
                                        value={formData.mem2Section}
                                        name="mem2Section" onChange={handleChange} type="text" className="lg:ml-2 h-10 border border-solid-2px border-black" />
                                       {errors.mem2Section && <p className="text-red-500">&nbsp;{errors.mem2Section}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mt-2 lg:ml-16">
                                        <label className="mt-2 lg:text-2xl md:text-xl sm:text-base" style={{ fontFamily: 'anonymousPro' }}>
                                            Mem 2 Department:{' '}
                                        </label>
                                        <div>
                                        <select name="mem2Department" value={formData.mem2Department} onChange={handleChange} className="lg:ml-2 h-10 w-50 border border-solid-2px border-black" >
                                    <option value="CS">CS</option>
                                    <option value="SE">SE</option>
                                    <option value="AI">AI</option>
                                    <option value="CYS">CYS</option>
                                    <option value="BA">BA</option>
                                    <option value="EE">EE</option>
                                    <option value="FT">FT</option>
                                </select>
                                       {errors.mem2Department && <p className="text-red-500">&nbsp;{errors.mem2Department}</p>}
                                        </div>
                                    </div>
                                </div>
                                <img src={redacted} alt="redacted" className="lg:visible invisible ml-60 h-60" />
                            </div>
                        </form>
                        <button type="submit" style={{fontFamily:"circularStd"}}className="button-confirm lg:ml-[80%] ml-[40%] mt-8 lg:text-2xl md:text-xl p-4 text-lg" onClick={handleSubmit}>
                            {submitLoading? <div role="status">
                                <svg aria-hidden="true" class="inline w-4 h-4 m-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-200" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div> : `Confirm` }
                        </button>
                    </div>
                </div>
                <footer id='devs' class="bg-black pt-3">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">

                            <img src={acmLogo} class="h-32 w-40 mr-3" alt="ACM Logo" />


                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Our Events</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <p>Coders Cup</p>
                                    </li>
                                    <li>
                                        <p>Developers Day</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="https://www.instagram.com/acmnuces/?hl=en" target="_blank" class="hover:underline ">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/acmnuceskhi" target="_blank" class="hover:underline">Facebook</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Meet the Developers</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="https://www.linkedin.com/in/muhammad-hatif/" target="_blank" class="hover:underline">Hatif Mujahid</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="https://www.linkedin.com/in/wahaj-javed-k200208/" target="_blank" class="hover:underline ">Wahaj Javed</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="https://www.linkedin.com/in/rayyan-minhaj-79663523a/" target="_blank" class="hover:underline">Rayyan Minhaj</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="https://www.linkedin.com/in/ahmad-aleem-45a2251bb/" target="_blank" class="hover:underline">Ahmad Aleem</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                  
                        <span class="flex flex-row text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023&nbsp;&nbsp; <p class="hover:underline">ACM™</p>. All Rights Reserved.
                        </span>
                    
                </div>
            </footer>
            </div>
        </>
    );
}
