import React from "react";
import styles from "./events.module.css";
import image from "../../Assets/Images/hello.png";
import bg from "../../Assets/Images/bg.png";
// import { IoLocation } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
// import {IoTicket} from 'react-icons/io';
import { AiTwotoneCalendar } from "react-icons/ai";

const Card = ({ date, venue, name }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <div className={styles.content}>
          <div className={styles.heading}>{name}</div>
          {/* <div className={styles.date}>18 August 2022</div> */}
          <div className={styles.location}>
            <div className={styles.locationIcon}>
              <MdLocationPin className={styles.pin} size={20} />
            </div>
            <div className={styles.locationContent}>{venue}</div>
          </div>
          <div className={styles.ticket}>
            <div className={styles.ticketIcon}>
              <AiTwotoneCalendar className={styles.calendar} size={20} />
            </div>
            <div className={styles.ticketContent}>{date}</div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button1}>
              <div className={styles.buttonText}>Join</div>
            </button>
            <button className={styles.button2}>
              <div className={styles.buttonText2}>Details</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
