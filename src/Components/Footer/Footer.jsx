import React from 'react';
import  { Link } from 'react-router-dom';
import "./footer.css"; 

export default function Footer() {
  return (
    <footer class="footer">
        <div class="vertical-container">
            <div class="horizontal-container">
                <img class="footer-logo" src={require("../../Assets/Images/DSC-Logo.png")} alt="DSC Logo" />
                <div class="vertical-container">
                    <span class="soceity-name">Google Developer Student Clubs</span>
                    <span class="college-name">Netaji Subhas University of Technology</span>
                </div>
            </div>
            <div class="social">
                <a href="https://www.instagram.com/gdsc_nsut/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="https://www.instagram.com/gdsc_nsut/" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="https://www.instagram.com/gdsc_nsut/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="https://www.instagram.com/gdsc_nsut/" target="_blank"><ion-icon name="logo-behance"></ion-icon></a>
            </div>
        </div>
        <ul class="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/feed">Feed</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
    </footer>
  )
}
