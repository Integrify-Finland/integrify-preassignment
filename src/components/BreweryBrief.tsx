import React from 'react';
import { Link } from "react-router-dom";
import BreweryApi from '../interfaces/brewery_interface';
import { Card, Box } from '@mui/material';

function BreweryBrief({ data }: { data: BreweryApi }) {

  return (
    <div>
      <Box sx={{ maxWidth: 300 }} style={{ backgroundColor: "#ad8a1f" }}>
        <Card variant="outlined" >
          Name        : {data.name} <br />
          Brewery Type: {data.brewery_type} <br />
          City        : {data.city}
        </Card>
        <Link to={data.id} >View Detail</Link>
      </Box>
    </div>
  );
}

export default BreweryBrief;