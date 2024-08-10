import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import "./index.css";

const KPICard = ({ title, value }) => {
  return (
    <Card className="kpiCard">
      <CardContent>
        <Typography variant="h5" component="div" className='kpi-card-title'>
          {title}
        </Typography>
        <Typography variant="h4" component="div" className='kpi-card-value'>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default KPICard;
