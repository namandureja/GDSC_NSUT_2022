import React, { useRef } from "react";
import Card from "./Card";
import "./events.css";
import { useState } from "react";
import upcomingEvents from "./events_upcoming.json";
import Image from "../../Assets/Images/events-workshop.jpg";
import { MdArrowBackIosNew, MdFilterList } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";

const Events = () => {
  const [events, setEvents] = useState("U");
  const [modalEvent, setModalEvent] = useState({});
  const modalOverlayRef = useRef();
  const modalRef = useRef();

  function showEventModal(event) {
    modalOverlayRef.current.classList.add("show");
    setModalEvent(event);
  }

  function hideEventModal(e) {
    modalOverlayRef.current.classList.remove("show");
  }

  return (
    <>
      <header></header>
      <main>
        <div className={'carousel-container'}>
          <div className={'carousel'}>
            <div className={'carousel-item'}>
              <img src={Image} alt="hello" />
              <div className={'carousel-item-content'}>
                <h1 className={'carousel-item-title'}>UX Tech 2022</h1>
                <p className={'carousel-item-desc'}>A user interface and experience workshop</p>
              </div>
            </div>
            <MdArrowBackIosNew className="carousel-arrow arrow-left" />
            <MdArrowBackIosNew className="carousel-arrow arrow-right" />
          </div>
          <div className={'carousel-dots'}>
            <div className={'carousel-dot active'}></div>
            <div className={'carousel-dot'}></div>
            <div className={'carousel-dot'}></div>
          </div>
        </div>
        <div className={'search-container'}>
          <div className="search-wrapper">
            <input type="text" className="search-input" placeholder="Search" />
            <div className="search-icon">
              <RiSearchLine />
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn">
              <div className="category-icon">
                <MdFilterList />
              </div>
              <span>Categories</span>
              <div className="dropdown-toggle">
                <IoIosArrowDown />
              </div>
            </button>
            <div className="dropdown-menu">
              <div className="dropdown-item">Category 1</div>
              <div className="dropdown-item">Category 2</div>
              <div className="dropdown-item">Category 3</div>
              <div className="dropdown-item">Category 4</div>
              <div className="dropdown-item">Category 5</div>
              <div className="dropdown-item">Category 6</div>
            </div>
          </div>
        </div>
        <div className={'events-container'}>
          <div className={'events-header'}>
            <h1>Upcoming Events</h1>
            <span>View All</span>
          </div>
          <div className="event-cards">
            {
              events === "U" &&
              upcomingEvents.map(event => {
                return <Card key={event.id} event={event} showEventModal={showEventModal} />
              })
            }
          </div>
        </div>
      </main>
      <div ref={modalOverlayRef} className="modal-overlay">
        <div ref={modalRef} className="modal" tabIndex={-1}>
          {
            Object.keys(modalEvent).length > 0 &&
            <>
              <div className="event-cover-image-container">
                <img className="event-cover-image" src={require(`../../Assets/Images/${modalEvent.coverImage}`)} alt={modalEvent.name} />
                <div className="modal-close" onClick={hideEventModal}>
                  <MdArrowBackIosNew />
                </div>
              </div>
              <div className="event-content-container">
                <div className="event-content-header">
                  <div>
                    <h2>{modalEvent.name}</h2>
                    <p style={{ fontSize: "1.4rem" }}>Organized By {modalEvent.organizer}</p>
                  </div>
                  <div className="event-register">
                    <button className="register-btn">Register</button>
                    <p>Registration ends on</p>
                    <p>{modalEvent.registrationEndDate}</p>
                  </div>
                </div>
                <div className="event-content-about">
                  <h3>About</h3>
                  <p>{modalEvent.description}</p>
                </div>
                <div className="event-content-info">
                  {
                    (modalEvent.info ?? []).map((info, index) => {
                      return (
                        <div key={index}>
                          <h3>{info.title}</h3>
                          {
                            info.title?.toLowerCase() === "location" ?
                              <p className="event-location"><HiLocationMarker /> {info.description}</p> :
                              info.title?.toLowerCase() === "contact" ?
                                <p className="event-contact">{info.description}</p> :
                                <p>{info.description}</p>
                          }
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </>
          }
        </div>
      </div>
    </>
  );
};

export default Events;
