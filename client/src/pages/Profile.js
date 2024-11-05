import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="header">
                <h1>گروه سلمان فارسی</h1>
            </div>
            <div className="banner">
                <img src="https://uploadkon.ir/uploads/637605_2427-0x0.jpg" alt="Banner" className="banner-image" />
            </div>
            <div className="profile-info">
                <img src="https://uploadkon.ir/uploads/1f9405_24لوگو-گروه-4-فیروزه-ای.png" alt="Profile" className="profile-picture" />
                <div className="profile-details">
                    <h2>صفا 27</h2>
                    <p>@Salman_Farsi</p>
                    <p className="bio">این کاری از بخش فرانت تیم 2 گروه برنامه نویسی سلمان است</p>
                    <div className="stats">
                        <div className="stat">
                            <h4>1.438 K</h4>
                            <p>توییت‌ها</p>
                        </div>
                        <div className="stat">
                            <h4>27.2 M</h4>
                            <p>فالوورها</p>
                        </div>
                        <div className="stat">
                            <h4>20</h4>
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

export default Profile;