import React from 'react';
import KPICard from '../../components/KPICard';
import { Grid } from '@mui/material';
import "./index.css";

const HomePage = () => {
  // Dummy data for KPIs
  const totalUsers = 1200;
  const totalPosts = 3500;
  const activeUsers = 300;
  const recentPosts = 150;

  return (
    <div className="homePage">
      <h1 className='heading'>Dashboard</h1>
      <Grid container spacing={2}>
        <KPICard title="Total Users" value={totalUsers} />
        <KPICard title="Total Posts" value={totalPosts} />
        <KPICard title="Active Users (24h)" value={activeUsers} />
        <KPICard title="Posts (24h)" value={recentPosts} />
      </Grid>
    </div>
  );
};

export default HomePage;
