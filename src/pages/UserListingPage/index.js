import React from 'react';
import KPICard from '../../components/KPICard';
import UserTable from '../../components/UserTable';
import { Grid } from '@mui/material';
import "./index.css";

const UserListingPage = () => {
  // Dummy data for KPIs
  const totalUsers = 1200;
  const activeUsers = 300;

  return (
    <div className="userPage">
      <h1>User Listing</h1>
      <Grid container spacing={2}>
        <KPICard title="Total Users" value={totalUsers} />
        <KPICard title="Active Users (24h)" value={activeUsers} />
      </Grid>
      <UserTable />
    </div>
  );
};

export default UserListingPage;
