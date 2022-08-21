import "./navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector,useDispatch } from 'react-redux'
import { setIndex } from "../../app/store";

const NavLinkWithUnderline = ({ to, text , index }) => {
    const dispatch = useDispatch();
    const navLinkState = useSelector(state => state.navLinkState.activeIndex)
    return (
        <div className={navLinkState===index? "active-link" : ""}>
            <NavLink to={to} onClick={() => dispatch(setIndex(index))}>
                {text}
            </NavLink>
        </div>
    );
};

function Navbar() {
    const [expanded, setExpanded] = useState(false);
    const [elevate,setElevate] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setExpanded(false);
    }, [location]);

    useEffect(()=>{
        window.addEventListener("scroll",scrollHandler);
        return ()=>{
            window.removeEventListener("scroll",scrollHandler);
        }
    },[])

    const navState = useSelector(state => state.navLogoState.logoState)

    const scrollHandler = (event)=>{
        (window.scrollY>0)?setElevate(true):setElevate(false)
    };

    return (
        <div className={`navbar ${elevate ? "elevate" : ""}`}>
            <div className={`navbar-container ${navState || location.pathname !== "/" ? "" : 'right'}`}>
                <div className="navbar-logo">
                    <img src="/gdsc-logo.png" alt="GDSC Logo" />
                    <div className="navbar-logo-text">
                        <span>Google Developer Student Clubs</span>
                        <span>Netaji Subhas University of Technology</span>
                    </div>
                </div>

                <div className={`navbar-links ${expanded ? "expanded" : ""}`}>
                    <NavLinkWithUnderline to="/" text="Home" index={0} />
                    <NavLinkWithUnderline to="/events" text="Events" index={1} />
                    <NavLinkWithUnderline to="/team" text="Our Team" index={2} />
                    <NavLinkWithUnderline to="/feed" text="Feed" index={3} />
                    <NavLinkWithUnderline to="/contact" text="Contact Us" index={4} />
                </div>
                {expanded ? (
                    <FaTimes onClick={() => setExpanded(false)} />
                ) : (
                    <FaBars onClick={() => setExpanded(true)} />
                )}
            </div>
        </div>
    );
}

export default Navbar;
