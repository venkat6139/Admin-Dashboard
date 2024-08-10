import React from 'react';
import KPICard from '../../components/KPICard';
import PostTable from '../../components/PostTable';
import { Grid } from '@mui/material';
import "./index.css";

const PostListingPage = () => {
  // Dummy data for KPIs
  const totalPosts = 3500;
  const recentPosts = 150;

  return (
    <div className="postPage">
      <h1>Post Listing</h1>
      <Grid container spacing={2}>
        <KPICard title="Total Posts" value={totalPosts} />
        <KPICard title="Posts (24h)" value={recentPosts} />
      </Grid>
      <PostTable />
    </div>
  );
};

export default PostListingPage;
