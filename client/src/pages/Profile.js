import React from 'react';
import './Profile.css';

<<<<<<< HEAD
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
=======
const Profile = () => {
    return (
        <div className="profile-container">
            <div className="header">
                <h1>نام کاربری</h1>
            </div>
            <div className="banner">
                {/* بنر پروفایل */}
            </div>
            <div className="profile-info">
                <img src="https://via.placeholder.com/120" alt="Profile" className="profile-picture" />
                <div className="profile-details">
                    <h2>نام و نام خانوادگی</h2>
                    <p>@username</p>
                    <p className="bio">این یک بیوگرافی نمونه است. اطلاعات بیشتری درباره من اینجا قرار دارد.</p>
                    <div className="stats">
                        <div className="stat">
                            <h4>100</h4>
                            <p>توییت‌ها</p>
                        </div>
                        <div className="stat">
                            <h4>200</h4>
                            <p>فالوورها</p>
                        </div>
                        <div className="stat">
                            <h4>150</h4>
                            <p>فالووینگ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tweets">
                <h3>توییت‌ها</h3>
                <div className="tweet">
                    <h4>توییت اول</h4>
                    <p>این یک نمونه توییت است.</p>
                </div>
                <div className="tweet">
                    <h4>توییت دوم</h4>
                    <p>این یک نمونه توییت دیگر است.</p>
                </div>
            </div>
            <div className="footer">
                <p>© 2023 نام کاربری</p>
            </div>
        </div>
    );
};
>>>>>>> dev

export default Profile;