import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <h2>پروفایل</h2>
      <img src="avatar.jpg" alt="عکس پروفایل" />
      <h3>نام کاربری</h3>
      <p>بیوگرافی کاربر</p>
      <p>تعداد فالوورها: 1000</p>
      <p>تعداد فالووینگ‌ها: 500</p>
    </div>
  );
}

export default Profile;