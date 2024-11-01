import React from 'react';
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

export default Home;