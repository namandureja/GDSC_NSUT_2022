import React from 'react'
import { Link } from "react-router-dom";
import homeEventsImage from "../../Assets/Images/home-eventsSection-img.png";

export default function HomeEventsSection() {
    return (
        <section className="home-section events-section">
            <div className="wrapper">
                <div className="home-triangle-box"></div>
                <div className="home-events-inner-container">
                    <div className="content">
                        <div className="title">No upcoming events</div>
                        <div className="info">Stay tuned with us for amazing events, workshops and other incredible opporutinities.</div>
                        <Link className="home-know-more-btn" to="/">Know More</Link>
                        <div className="home-events-host">
                            <div>Want to host an event with GDSC NSUT?</div>
                            <Link to="/">Connect with us</Link>
                        </div>
                    </div>
                    <img className="home-events-image" src={homeEventsImage} alt="Events"></img>
                </div>
            </div>
        </section>
    )
}
