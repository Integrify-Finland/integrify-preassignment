import React from 'react';
import BreweryApi from '../interfaces/brewery_interface';
import BreweryBrief from './BreweryBrief';
import { Grid } from '@mui/material/';

function BreweriesList({ data, filter }: { data: Array<BreweryApi>, filter: string }) {

  const brewList: Array<JSX.Element> = [];

  const displayBreweries: Array<BreweryApi> = data.filter((element) => {
    let bool = false;
    let key: keyof typeof element;
    for (key in element) {
      if (element[key]) {
        if (element[key].toString().toLocaleLowerCase().match(filter.toLocaleLowerCase())) {
          bool = true;
        }
      }
    }
    return bool;
  });

  displayBreweries.forEach(element => {
    brewList.push(
      <Grid item xs={12} md={4} key={element.id}>
        <BreweryBrief data={element} />
      </Grid>);
  });
  return (
    <div style={{ margin: "auto", width: "80%" }}>
      <Grid container spacing={2}>
        {brewList}
      </Grid>
    </div>
  );
}

export default BreweriesList;