function TeamPage({backgroundImageUrl, teamNameImage, description}){
    return <div className="flex flex-col justify-center items-center"
     style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
      position: "relative",
      backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
      }}>
        <img src={teamNameImage} alt="logo" className="relative" ></img>
        <p className="font-normal md:text-l sm:text-small text-white lg:text-[1.5rem] dark:text-white w-6/12 text-center  " style={{fontFamily:"spotifyMedium"}}>{description}</p></div>;
}
export default TeamPage;