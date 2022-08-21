import React from 'react'
import { Link } from "react-router-dom";

export default function HomeEventsSection() {
    return (
        <section className="home-section events-section">
            <div class="wrapper">
                <div class="home-triangle-box"></div>
                <div class="home-triangle-box-2"></div>
                <div class="home-events-inner-container">
                    <div class="content">
                        <div class="title">No upcoming events</div>
                        <div class="info">Stay tuned with us for amazing events, workshops and other incredible opporutinities.</div>
                        <Link class="home-know-more-btn" to="/">Know More</Link>
                        <div class="home-events-host">
                            <p>Want to host an event with GDSC NSUT?</p>
                            <Link to="/">Connect with us</Link>
                        </div>
                    </div>
                    <img class="home-events-image" src={'/assets/images/calender.png'} alt="Events"></img>
                </div>
            </div>
        </section>
    )
}
