import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">خانه</Link>
      <Link to="/profile">پروفایل</Link>
      <Link to="/notifications">اعلان‌ها</Link>
      <button>توییت جدید</button>
    </div>
  );
}

export default Sidebar;