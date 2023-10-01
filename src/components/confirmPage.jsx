import RegisterCard from './registerCard';
import { Link } from 'react-router-dom';
import { goBackButton, yesButton, homeBackground, confirmHeader } from '../assets';
import Footer from './footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function ConfirmPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state.data;
    async function sendingData() {
        
        const result = await fetch(`https://coders-cup-db-private.vercel.app/submit`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                data: data,
            }),
        }).then((resp) => resp.json());
        if(result.acknowledged == true){
            alert("Your response has been recorded")
            navigate('/');
        }else{
            alert("There was some error in submitting your response")
        }
    }

    return (
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
            <div className="pt-8 flex flex-col justify-center items-center pb-20">
                <img src={confirmHeader} alt="confirmdetails" className="sm:w-2/5 sm:h-2/5 w-2/5 h-2/5 mt-[-20px] relative z-2" />
                <p
                    className="font-normal md:text-lg sm:text-small text-white lg:text-[1.5rem] dark:text-white w-4/12 text-center"
                    style={{ fontFamily: 'anonymousPro',  textTransform: "uppercase"}}
                >
                    Team Name: <span className="font-bold">{data.teamName}</span>
                </p>

                <div className="flex flex-col  scale-80 lg:scale-100 relative items-center justify-center ml-8">
                    <RegisterCard name={data.leaderName} id={data.leaderId} batch={data.teamBatch} email={data.leaderEmail} />
                    <RegisterCard name={data.mem1Name} id={data.mem1Id} batch={data.teamBatch} email={data.mem1Email} />
                    <RegisterCard name={data.mem2Name} id={data.mem2Id} batch={data.teamBatch} email={data.mem2Email} />
                </div>
                <div className="flex flex-row sm:flex-col md:flex-col lg:flex-row relative items-center justify-center ">
                    <Link to={'/register'} state={{data}}>
                        <img
                            src={goBackButton}
                            alt="goBack"
                            className="scale-[50%] z-10 hover:cursor-pointer hover:scale-[60%] transition"
                        />
                    </Link>
                    <img
                        src={yesButton}
                        alt="yes button"
                        className="scale-[50%] z-10 hover:cursor-pointer hover:scale-[60%] transition"
                        onClick={sendingData}
                        
                    />
                </div>
            </div>
        </div>
    );
}
