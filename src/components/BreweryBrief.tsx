import React from 'react';
import { Link } from "react-router-dom";
import BreweryApi from '../interfaces/brewery_interface';
import { Card, Box } from '@mui/material';

function BreweryBrief({ data }: { data: BreweryApi }) {

  return (
    <div>
      <Box sx={{ maxWidth: 200 }}>
        <Card variant="outlined">
          {data.name} <br />
          {data.brewery_type} <br />
          {data.city}
        </Card>
        <Link to={data.id} >View Detail</Link>
      </Box>
    </div>
  );
}

export default BreweryBrief;