import React, { useState, useEffect } from 'react';
import BreweryApi from '../interfaces/brewery_interface';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Box } from '@mui/material';

function BreweryDetail() {
  const [breweries, setBreweries] = useState<BreweryApi[]>([]);
  const params = useParams();

  useEffect(() => {
    axios.get('https://api.openbrewerydb.org/breweries')
      .then(resposnse => {
        setBreweries(resposnse.data)
      })
  }, []);

  const data = breweries.find(element => element.id === params.id);

  if (data) {
    return (
      <div style={{ margin: "auto", width: "70%" }}>
        <Box sx={{ maxWidth: 800 }} style={{ backgroundColor: "grey" }}>
          <Card variant="outlined" style={{ margin: "auto", width: "70%", backgroundColor: "#ad8a1f" }} >
            Name: {data.name} <br />
            Brewery Type: {data.brewery_type} <br />
            Street: {data.street} <br />
            Address 2: {data.address_2} <br />
            Address 3: {data.address_3} <br />
            City: {data.city} <br />
            State: {data.state} <br />
            County/Province: {data.county_province} <br />
            Postal Code: {data.postal_code} <br />
            Country: {data.country} <br />
            Longtitude: {data.longitude} <br />
            Latitude: {data.latitude} <br />
            Phone: {data.phone} <br />
            Website: {data.website_url} <br />
            Updated at: {data.updated_at} <br />
            Created at: {data.created_at}
          </Card>
        </Box>
      </div >
    );

  } else {
    return (
      <div></div>
    )
  }

}

export default BreweryDetail;