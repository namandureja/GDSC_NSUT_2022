import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DSC_Logo from '../../Assets/Images/DSC-Logo.png';
// import section_img from '../../Assets/Images/home-front-img.png';

export default function FrontSection(props) {
    const { content } = props;
    return (
        <section className='home-section front-section'>
            <div className="wrapper">
                <div className="home-custom-container">
                    <div className="horizontal-container">
                        <img src={DSC_Logo} alt="logo" className="logo" />
                        <div className="vertical-container">
                            <div className="soceity-name">Google Developer Student Clubs</div>
                            <div className="college-name">Netaji Subhash University of Technology</div>
                        </div>
                    </div>
                    <div className="soceity-info">{content}</div>
                    <Link className="lets-connect-button" to="/contacts">Lets Connect</Link>
                </div>
                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_qq5qecip.json"  background="transparent"  speed="1"  loop autoplay></lottie-player>
                {/* <img className="section-image" src={section_img} alt="Geeky" /> */}
            </div>
        </section>
    );
}

FrontSection.defaultProps = {
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quo, velit maxime ducimus recusandae quam consequuntur, quidem ipsa ex necessitatibus repellendus aliquid error assumenda doloribus tempora nobis, itaque inventore quae porro exercitationem. Molestiae, debitis voluptatem."
}

FrontSection.propTypes = {
    content: PropTypes.string
}