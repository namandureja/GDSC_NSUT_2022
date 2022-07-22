import "./team.css";
import TeamCard from "./TeamCard";
import DSC_Logo from "../../Assets/Images/DSC-Logo.png";

export default function Team() {
  return (
    <>
    <div className="team-title">Web Team</div>
    <div className="team-card-container">
      <TeamCard color="#4285F4" 
                memberImage={DSC_Logo}
                memberName="Adnan Hashmi"
                memberStatus="Web Lead"
                memberSocialPortfolioPath="/"
                memberSocialGithubPath="/"
                memberSocialLinkedinPath="/"
                memberSocialInstagramPath="/"
      />
      <TeamCard color="#EA4335" 
                memberImage={DSC_Logo}
                memberName="Aryav Bhola"
                memberStatus="Web Mentee"
                memberSocialPortfolioPath="/"
                memberSocialGithubPath="/"
                memberSocialLinkedinPath="/"
                memberSocialInstagramPath="/"
      />
      <TeamCard color="#FBBC04" 
                memberImage={DSC_Logo}
                memberName="Adnan Hashmi"
                memberStatus="Web Lead"
                memberSocialPortfolioPath="/"
                memberSocialGithubPath="/"
                memberSocialLinkedinPath="/"
                memberSocialInstagramPath="/"
      />
      <TeamCard color="#0F9D58" 
                memberImage={DSC_Logo}
                memberName="Aryav Bhola"
                memberStatus="Web Mentee"
                memberSocialPortfolioPath="/"
                memberSocialGithubPath="/"
                memberSocialLinkedinPath="/"
                memberSocialInstagramPath="/"
      />
    </div>
    </>
  );
}