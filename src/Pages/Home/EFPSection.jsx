import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import home_events_img from '../../Assets/Images/home-events-img.png';
import home_feed_img from '../../Assets/Images/home-feed-img.png';
import home_projects_img from '../../Assets/Images/home-projects-img.png';
import { VscArrowRight } from "react-icons/vsc";

function EFPCard(props) {
    const {Image, Title, Content} = props;
    return (
        <div className='home-card'>
            <img src={Image} alt={Title} />
            <div className="title">{Title}</div>
            <div className="content">{Content}</div>
            <div className="arrow"><Link to={`/${Title.toLowerCase()}`}><VscArrowRight /></Link></div>
        </div>
    )
}

EFPCard.defaultProps = {
    Image: home_events_img,
    Title: "Events",
    Content: "Lorem ipsum dolor sit, sjhd lawb jhwfgebhifs b aufgeprug egfhapji bghjbgv chid nwe maxime ducimus debitis voluptatem."
}

EFPCard.propTypes = {
    Title: PropTypes.string,
    Content: PropTypes.string
}

export default function EFPSection() {
    return (
        <section className="home-section efp-section">
            <div className="wrapper">
                <div className="home-card-container">
                    <EFPCard Image={home_events_img} Title="Events" />
                    <EFPCard Image={home_feed_img} Title="Feed" />
                    <EFPCard Image={home_projects_img} Title="Projects" />
                </div>
            </div>
        </section>
    )
}
