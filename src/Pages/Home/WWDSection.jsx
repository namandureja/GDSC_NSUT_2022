import React from 'react'
import PropTypes from 'prop-types';
import '@lottiefiles/lottie-player';


function WWDCard(props) {
    const { Title, Content} = props;
    return (
        <div className={`home-card ${Title}`}>
            <lottie-player src={`/assets/${Title}-lottie.json`} background="transparent"  speed="1"  loop autoplay></lottie-player>
            <div className="title">{Title}</div>
            <div className="content">{Content}</div>
        </div>
    )
}

WWDCard.defaultProps = {
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
                    <WWDCard Title="Design" />
                    <WWDCard  Title="Code" />
                    <WWDCard Title="Develop" />
                </div>
            </div>
        </section>
    )
}
