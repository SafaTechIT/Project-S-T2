import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>X</h1>
      <input type="text" placeholder="جستجو در X" />
      <nav>
        <Link to="/">خانه</Link>
        <Link to="/profile">پروفایل</Link>
        <Link to="/notifications">اعلان‌ها</Link>
      </nav>
    </header>
  );
}

export default Header;