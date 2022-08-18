import React from 'react'
import home_events_img from '../../Assets/Images/home-events-img.png';
import home_feed_img from '../../Assets/Images/home-feed-img.png';
import home_projects_img from '../../Assets/Images/home-projects-img.png';
import { EFPCard } from "../Home/EFPSection";

export default function DepartmentsSection() {
    return (
        // Using "Home > EFPSection > EFPCard" here
        <section className="team-section efp-section" style={{padding: "70px"}}>
            <div className="title">Our Departments</div>
            <div className="wrapper">
                <div className="home-card-container" style={{justifyContent: "space-between"}}>
                    <EFPCard Image={home_events_img} Title="Web Development" />
                    <EFPCard Image={home_feed_img} Title="App Development" />
                    <EFPCard Image={home_projects_img} Title="Competitive Programming" />
                    <EFPCard Image={home_events_img} Title="Graphics" />
                    <EFPCard Image={home_feed_img} Title="Content" />
                    <EFPCard Image={home_projects_img} Title="Machine Learning" />
                    <EFPCard Image={home_events_img} Title="Operations" />
                </div>
            </div>
        </section>
    )
}
