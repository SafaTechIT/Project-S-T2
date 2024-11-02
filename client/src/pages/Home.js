import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  // آرایه‌ای از توییت‌ها
  const tweets = [
    { id: 1, title: "توییت 1", content: "این یک محتوای نمونه توییت 1 است." },
    { id: 2, title: "توییت 2", content: "این یک محتوای نمونه توییت 2 است." },
    { id: 3, title: "توییت 3", content: "این یک محتوای نمونه توییت 3 است." },
  ];

  // ایجاد state برای مدیریت لایک‌ها
  const [likes, setLikes] = useState(Array(tweets.length).fill(0));
  const [liked, setLiked] = useState(Array(tweets.length).fill(false));

  // تابع برای مدیریت کلیک روی دکمه لایک
  const handleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);

    const newLikes = [...likes];
    newLikes[index] = newLiked[index] ? newLikes[index] + 1 : newLikes[index] - 1;
    setLikes(newLikes);
  };

  return (
    <div>
      {tweets.map((tweet, index) => (
        <motion.div key={tweet.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card style={{ marginBottom: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5">{tweet.title}</Typography>
              <Typography color="textSecondary">{tweet.content}</Typography>
              <div style={{ marginTop: '10px' }}>
                <Button
                  size="small"
                  color={liked[index] ? "primary" : "default"}
                  onClick={() => handleLike(index)}
                >
                  {liked[index] ? "لغو لایک" : "لایک"} ({likes[index]})
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Home;