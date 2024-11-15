import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [tweets, setTweets] = useState([
        { id: 1, user: 'کاربر 1', content: 'این اولین توییت من است!', time: '1 دقیقه پیش', likes: 0, comments: [] },
        { id: 2, user: 'کاربر 2', content: 'توییت جدیدی از من!', time: '10 دقیقه پیش', likes: 0, comments: [] },
        { id: 3, user: 'کاربر 3', content: 'درباره موضوعات مختلف صحبت می‌کنم.', time: '30 دقیقه پیش', likes: 0, comments: [] },
    ]);
    
    const [newTweet, setNewTweet] = useState('');
    const [newComment, setNewComment] = useState('');
    const [showCommentInput, setShowCommentInput] = useState({});

    const handleLike = (id) => {
        setTweets(prevTweets => 
            prevTweets.map(tweet => 
                tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
            )
        );
    };

    const handleComment = (id) => {
        if (newComment.trim()) {
            setTweets(prevTweets => 
                prevTweets.map(tweet => 
                    tweet.id === id ? { ...tweet, comments: [...tweet.comments, newComment] } : tweet
                )
            );
            setNewComment(''); // Reset the comment input
            setShowCommentInput({ ...showCommentInput, [id]: false }); // Hide comment input
        }
    };

    const handleTweetSubmit = () => {
        if (newTweet.trim()) {
            const newTweetObject = {
                id: tweets.length + 1,
                user: 'کاربر جدید',
                content: newTweet,
                time: 'چند ثانیه پیش',
                likes: 0,
                comments: []
            };
            setTweets([...tweets, newTweetObject]);
            setNewTweet(''); // Reset the tweet input
        }
    };

    const toggleCommentInput = (id) => {
        setShowCommentInput({ ...showCommentInput, [id]: !showCommentInput[id] });
    };

    return (
        <div className="home-container">
            <div className="tweet-box">
                <textarea 
                    placeholder="چی فکر می‌کنید؟" 
                    className="tweet-input" 
                    value={newTweet}
                    onChange={(e) => setNewTweet(e.target.value)}
                ></textarea>
                <button className="tweet-button" onClick={handleTweetSubmit}>توییت کن</button>
            </div>
            <div className="tweets-list">
                {tweets.map(tweet => (
                    <div key={tweet.id} className="tweet-item">
                        <span className="tweet-user">{tweet.user}</span>
                        <p className="tweet-content">{tweet.content}</p>
                        <span className="tweet-time">{tweet.time}</span>
                        <button className="tweet-like-button" onClick={() => handleLike(tweet.id)}>❤️ {tweet.likes}</button>
                        <button className="comment-toggle-button" onClick={() => toggleCommentInput(tweet.id)}>
                            {showCommentInput[tweet.id] ? 'پنهان کردن کامنت' : 'کامنت'}
                        </button>
                        {showCommentInput[tweet.id] && (
                            <div className="comment-input-container">
                                <input 
                                    type="text" 
                                    className="comment-input"
                                    placeholder="نظر خود را بنویسید" 
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                />
                                <button className="comment-button" onClick={() => handleComment(tweet.id)}>ارسال نظر</button>
                            </div>
                        )}
                        <ul className="comments-list">
                            {tweet.comments.map((comment, index) => (
                                <li key={index} className="comment-item">{comment}</li>
                            ))}
                        </ul>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default Home;