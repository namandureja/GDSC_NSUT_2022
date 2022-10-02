import React from 'react'
import { Link } from "react-router-dom";

export default function HomeEventsSection() {
    return (
        <section className="home-section events-section">
            <div className="wrapper">
                <div className="home-triangle-box"></div>
                <div className="home-triangle-box-2"></div>
                <div className="home-events-inner-container">
                    <div className="content">
                        <h1 className="title">No upcoming events</h1>
                        <p className="info">Stay tuned with us for amazing events, workshops and other incredible opporutinities.</p>
                        <Link className="home-know-more-btn" to="/">Know More</Link>
                        <div className="home-events-host">
                            <p>Want to host an event with GDSC NSUT?</p>
                            <Link to="/">Connect with us</Link>
                        </div>
                    </div>
                    <img className="home-events-image" src={'/assets/images/calender.png'} alt="Events"></img>
                </div>
            </div>
        </section>
    )
}
