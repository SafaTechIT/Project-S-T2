import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <h1>S</h1> {/* می‌توانید این قسمت را با لوگوی واقعی جایگزین کنید */}
            </div>
            <div className="navbar-links">
                <a href="/" className="navbar-link">خانه</a>
                <a href="/notifications" className="navbar-link">اعلان‌ها</a>
                <a href="/profile" className="navbar-link">پروفایل</a>
                {/* سایر لینک‌ها */}
            </div>
            <button className="navbar-button">توییت کن</button>
        </div>
    );
};

export default Navbar;