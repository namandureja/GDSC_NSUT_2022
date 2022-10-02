import React from 'react'
import PropTypes from 'prop-types';
import home_wwd_design_img from "../../Assets/Images/home-wwd-design-img.png";
import home_wwd_code_img from "../../Assets/Images/home-wwd-code-img.png";
// import home_wwd_develop_img from "../../Assets/Images/home-wwd-develop-img.png";

function WWDCard(props) {
    const {Image, Title, Content} = props;
    return (
        <div className='home-card'>
            <img src={Image} alt={Title} />
            <div className="title">{Title}</div>
            <div className="content">{Content}</div>
        </div>
    )
}

WWDCard.defaultProps = {
    Image: home_wwd_design_img,
    Title: "Design",
    Content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quo, velit defehi geyi ugfuiwef gdfsjhd lawb jhwfgebhifs b jhlafbpertiuwe rqwui fbjhewe by aufgeprug egfhapji bghjbgv chid nwe maxime ducimus debitis voluptatem."
}

WWDCard.propTypes = {
    Title: PropTypes.string,
    Content: PropTypes.string
}

export default function WWDSection() {
    return (
        <section className="home-section wwd-section">
            <div className="wrapper">
                <div className="heading">What we do</div>
                <div className="home-card-container">
                    <WWDCard Image={home_wwd_design_img} Title="Design" />
                    <WWDCard Image={home_wwd_code_img} Title="Code" />
                    <WWDCard Title="Develop" />
                </div>
            </div>
        </section>
    )
}
