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
            <div className="department-card-container">
                <EFPCard Image={home_events_img} Title="All Development" To="/team/all-departments" />
                <EFPCard Image={home_events_img} Title="Web Development" To="/team/web-development" />
                <EFPCard Image={home_feed_img} Title="App Development" To="/team/app-development" />
                <EFPCard Image={home_projects_img} Title="Competitive Programming" To="/team/competitive-programming" />
                <EFPCard Image={home_events_img} Title="Graphics" To="/team/graphics" />
                <EFPCard Image={home_feed_img} Title="Content" To="/team/content" />
                <EFPCard Image={home_projects_img} Title="Machine Learning" To="/team/machine-learning" />
                <EFPCard Image={home_events_img} Title="Operations" To="/team/operations" />
            </div>
        </section>
    )
}
