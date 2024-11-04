import React from 'react';
import './Notifications.css';

<<<<<<< HEAD
function Notifications() {
  return (
    <div className="notifications">
      <h2>اعلان‌ها</h2>
      <ul>
        <li>کاربر۱ توییت شما را لایک کرد</li>
        <li>کاربر۲ شما را فالو کرد</li>
        <li>کاربر۳ توییت شما را ریتوییت کرد</li>
      </ul>
    </div>
  );
}
=======
const Notifications = () => {
    const notifications = [
        { id: 1, user: 'کاربر 1', action: 'شما را دنبال کرد.', time: '2 دقیقه پیش' },
        { id: 2, user: 'کاربر 2', action: 'پست شما را لایک کرد.', time: '10 دقیقه پیش' },
        { id: 3, user: 'کاربر 3', action: 'نظر جدیدی گذاشت.', time: '30 دقیقه پیش' },
        // سایر اعلان‌ها
    ];

    return (
        <div className="notifications-container">
            <h1>اعلان‌ها</h1>
            <div className="notifications-list">
                {notifications.map(notification => (
                    <div key={notification.id} className="notification-item">
                        <span className="notification-user">{notification.user}</span>
                        <span className="notification-action">{notification.action}</span>
                        <span className="notification-time">{notification.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
>>>>>>> dev

export default Notifications;