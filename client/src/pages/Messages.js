import React from 'react';
import './Messages.css';

const Messages = () => {
    const messages = [
        { id: 1, user: 'کاربر 1', content: 'سلام! چطوری؟', time: '10 دقیقه پیش' },
        { id: 2, user: 'کاربر 2', content: 'چه خبر؟', time: '20 دقیقه پیش' },
        { id: 3, user: 'کاربر 3', content: 'می‌خواهی ملاقات کنیم؟', time: '1 ساعت پیش' },
        // سایر پیام‌ها
    ];

    return (
        <div className="messages-container">
            <div className="search-bar">
                <input type="text" placeholder="جستجوی پیام‌ها..." className="search-input" />
            </div>
            <div className="messages-list">
                {messages.map(message => (
                    <div key={message.id} className="message-item">
                        <span className="message-user">{message.user}</span>
                        <p className="message-content">{message.content}</p>
                        <span className="message-time">{message.time}</span>
                    </div>
                ))}
            </div>
            <div className="new-message-box">
                <textarea placeholder="پیام جدید..." className="new-message-input"></textarea>
                <button className="send-button">ارسال</button>
            </div>
        </div>
    );
};

export default Messages;