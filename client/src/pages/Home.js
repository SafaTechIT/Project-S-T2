import React from 'react';
import { Card, CardContent, Typography, Divider, Button } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Card style={{ marginBottom: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Typography variant="h5">Tweet Title</Typography>
          <Typography color="textSecondary">This is a sample tweet content.</Typography>
          <Button size="small" color="primary" style={{ marginTop: '10px' }}>Like</Button>
          <Button size="small" color="secondary" style={{ marginLeft: '10px' }}>Reply</Button>
        </CardContent>
      </Card>
      <Divider />
    </div>
  );
};

export default Home;