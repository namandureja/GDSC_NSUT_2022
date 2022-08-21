import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { VscArrowRight } from "react-icons/vsc";

const images = ["/assets/images/home-events-img.png","/assets/images/home-feed-img.png","/assets/images/home-projects-img.png"];

function EFPCard(props) {
    const {Image, Title, Content} = props;
    return (
        <div className='home-card'>
            <div style={{backgroundImage:`url("${Image}")`}} className="img" ></div>
            <div className="title">{Title}</div>
            <div className="content">{Content}</div>
            <div className="arrow"><Link to={`/${Title.toLowerCase()}`}><VscArrowRight /></Link></div>
        </div>
    )
}

EFPCard.defaultProps = {
    Image: "",
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
                    <EFPCard Image={images[0]} Title="Events" />
                    <EFPCard Image={images[1]} Title="Feed" />
                    <EFPCard Image={images[2]} Title="Projects" />
                </div>
            </div>
        </section>
    )
}
