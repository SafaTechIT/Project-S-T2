import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // استایل‌های مربوط به نوار کناری

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="logo">شبکه اجتماعی سلمان</h2>
            <Link to="/" className="sidebar-option">
                <i className="fas fa-home"></i>
                <span>خانه</span>
            </Link>
            <Link to="/profile" className="sidebar-option">
                <i className="fas fa-user"></i>
                <span>پروفایل</span>
            </Link>
            <Link to="/notifications" className="sidebar-option">
                <i className="fas fa-bell"></i>
                <span>اطلاعیه‌ها</span>
            </Link>
            <Link to="/messages" className="sidebar-option">
                <i className="fas fa-envelope"></i>
                <span>پیام‌ها</span>
            </Link>
            <Link to="/bookmarks" className="sidebar-option">
                <i className="fas fa-bookmark"></i>
                <span>نشانه‌ها</span>
            </Link>
            <Link to="/lists" className="sidebar-option">
                <i className="fas fa-list-alt"></i>
                <span>لیست‌ها</span>
            </Link>
            <Link to="/more" className="sidebar-option">
                <i className="fas fa-ellipsis-h"></i>
                <span>بیشتر</span>
            </Link>
            <button className="tweet-button">توییت کنید</button>
        </div>
    );
};

export default Sidebar;