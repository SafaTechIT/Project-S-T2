import React from 'react';
<<<<<<< HEAD
import Tweet from '../components/Tweet';
import './Home.css';

function Home() {
  const tweets = [
    { id: 1, username: 'کاربر۱', content: 'این یک توییت نمونه است', likes: 10, retweets: 5 },
    { id: 2, username: 'کاربر۲', content: 'توییت نمونه دیگر', likes: 15, retweets: 7 },
  ];

  return (
    <div className="home">
      <h2>صفحه اصلی</h2>
      {tweets.map(tweet => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </div>
  );
}
=======
import './Home.css';

const Home = () => {
    const tweets = [
        { id: 1, user: 'کاربر 1', content: 'این اولین توییت من است!', time: '1 دقیقه پیش' },
        { id: 2, user: 'کاربر 2', content: 'توییت جدیدی از من!', time: '10 دقیقه پیش' },
        { id: 3, user: 'کاربر 3', content: 'درباره موضوعات مختلف صحبت می‌کنم.', time: '30 دقیقه پیش' },
        // سایر توییت‌ها
    ];

    return (
        <div className="home-container">
            <div className="tweet-box">
                <textarea placeholder="چی فکر می‌کنید؟" className="tweet-input"></textarea>
                <button className="tweet-button">توییت کن</button>
            </div>
            <div className="tweets-list">
                {tweets.map(tweet => (
                    <div key={tweet.id} className="tweet-item">
                        <span className="tweet-user">{tweet.user}</span>
                        <p className="tweet-content">{tweet.content}</p>
                        <span className="tweet-time">{tweet.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
>>>>>>> dev

export default Home;