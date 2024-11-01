import React from 'react';
import './Tweet.css';

function Tweet({ username, content, likes, retweets }) {
  return (
    <div className="tweet">
      <h3>{username}</h3>
      <p>{content}</p>
      <div className="tweet-actions">
        <button>پاسخ</button>
        <button>ریتوییت ({retweets})</button>
        <button>لایک ({likes})</button>
      </div>
    </div>
  );
}

export default Tweet;