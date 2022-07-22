import "./navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavLinkWithUnderline = ({ to, text }) => {
    const [linkOpen, setLinkOpen] = useState(false);

    return (
        <div className={linkOpen ? "active-link" : ""}>
            <NavLink to={to} className={({ isActive }) => setLinkOpen(isActive)}>
                {text}
            </NavLink>
        </div>
    );
};

function Navbar() {
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpanded(false);
    }, [location]);

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src="/gdsc-logo.png" alt="GDSC Logo" />
                    <div className="navbar-logo-text">
                        <span>Google Developer Student Clubs</span>
                        <span>Netaji Subhas University of Technology</span>
                    </div>
                </div>
                <div className={`navbar-links ${expanded ? "expanded" : ""}`}>
                    <NavLinkWithUnderline to="/" text="Home" />
                    <NavLinkWithUnderline to="/events" text="Events" />
                    <NavLinkWithUnderline to="/team" text="Our Team" />
                    <NavLinkWithUnderline to="/feed" text="Feed" />
                    <NavLinkWithUnderline to="/contact" text="Contact Us" />
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
