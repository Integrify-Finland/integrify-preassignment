import React from 'react';
import Button from '@mui/material/Button';

function SearchBar({ filter, handleFilterChange }: { filter: string, handleFilterChange: any }) {

  return (
    <div>
      <Button variant="text">Search</Button>
      <input value={filter} onChange={handleFilterChange} />
    </div>
  );
}

export default SearchBar;