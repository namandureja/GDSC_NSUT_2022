import React from 'react';
import TeamHeroImage from "../../Assets/Images/team-hero-image.png"; 

export default function TeamHeroSection() {
  return (
    <section className="team-section team-hero-section">
        <div className="left-container">
            <div className="title">Our Team</div>
            <div className="content">our teaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation consequatm.</div>
        </div>
        <div className="right-container">
            <img src={TeamHeroImage} alt="" />
        </div>
    </section>
  )
}
