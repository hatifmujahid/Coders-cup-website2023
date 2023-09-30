import registerCard from '../assets/registerCard.png';
export default function RegisterCard() {
    return (
        <div className="flex items-center justify-center">
            <img src={registerCard} alt="registerCard" className="w-full max-w-[80%] sm:max-w-[80%] md:max-w-[80%] lg:max-w-[80%] xl:max-w-[80%]" />
            <p className="absolute">Name</p>
            <p className="absolute" style={{ marginTop: '50px', marginRight: '50px' }}>
                ID
            </p>
            <p className="absolute" style={{ marginTop: '50px', marginLeft: '170px' }}>
                Batch
            </p>
            <p className="absolute" style={{ marginTop: '120px' }}>
                Email
            </p>
        </div>
    );
}
