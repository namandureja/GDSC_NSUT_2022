import React from 'react'
import { Link } from 'react-router-dom';

export default function Section(props) {
    if (props.align === 'center') {
        return (
            <section className="general-section home-section">
                <img src={props.img} alt="img" className="logo" />
                <div className="soceity-name">Google Developer Student Clubs</div>
                <div className="college-name">Netaji Subhash University of Technology</div>
                <div className="soceity-info">
                    {props.content}
                </div>
                <Link className="learn-more-button" to="/" style={{backgroundColor: props.color}}>Learn More</Link>
            </section>
        )
    }
    else if (props.align === 'right') {
        return (
            <section className='general-section'>
                <div className="container">
                    <div className="title">{props.title}</div>
                    <div className="content">
                        {props.content}
                    </div>
                    <Link className="learn-more-button" to={props.link} style={{backgroundColor: props.color}}>Learn More</Link>
                </div>
                <img src={props.img} alt="img"  style={{marginLeft: "auto"}}/>
            </section>
        )
    }
    else {
        return (
            <section className="general-section">
                <img src={props.img} alt="img" style={{marginRight: "auto"}} />
                <div className="container">
                    <div className="title">{props.title}</div>
                    <div className="content">
                        {props.content}
                    </div>
                    <Link className="learn-more-button" to={props.link} style={{backgroundColor: props.color}}>Learn More</Link>
                </div>
            </section>
        )
    }
}
