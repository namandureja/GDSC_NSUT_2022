import "./team.css";
import TeamCard from "./TeamCard";
import Footer from "../../Components/Footer/Footer";

function Team() {
  return (
    <>
    <div className="team-title">Web Team</div>
    <div className="team-card-container">
      <TeamCard color="#4285F4" 
                memberImage={require("../../Assets/Images/DSC-Logo.png")}
                 memberName="Adnan Hashmi"
                 memberStatus="Web Lead"
                 memberSocialPortfolioPath="/"
                 memberSocialGithubPath="/"
                 memberSocialLinkedinPath="/"
                 memberSocialInstagramPath="/"
      />
      <TeamCard color="#EA4335" 
                memberImage={require("../../Assets/Images/DSC-Logo.png")}
                 memberName="Adnan Hashmi"
                 memberStatus="Web Lead"
                 memberSocialPortfolioPath="/"
                 memberSocialGithubPath="/"
                 memberSocialLinkedinPath="/"
                 memberSocialInstagramPath="/"
      />
      <TeamCard color="#FBBC04" 
                memberImage={require("../../Assets/Images/DSC-Logo.png")}
                 memberName="Adnan Hashmi"
                 memberStatus="Web Lead"
                 memberSocialPortfolioPath="/"
                 memberSocialGithubPath="/"
                 memberSocialLinkedinPath="/"
                 memberSocialInstagramPath="/"
      />
      <TeamCard color="#0F9D58" 
                memberImage={require("../../Assets/Images/DSC-Logo.png")}
                 memberName="Adnan Hashmi"
                 memberStatus="Web Lead"
                 memberSocialPortfolioPath="/"
                 memberSocialGithubPath="/"
                 memberSocialLinkedinPath="/"
                 memberSocialInstagramPath="/"
      />
    </div>
    <Footer />
    </>
  );
}

export default Team;
