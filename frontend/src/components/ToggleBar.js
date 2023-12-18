// components/ToggleBar.js
import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

function ToggleBar({ value, onChange }) {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={onChange}
      aria-label="view toggle"
      sx={{ marginTop: '10px' }}
    >
      <ToggleButton value="myProducts" aria-label="my products">
        My Products
      </ToggleButton>
      <ToggleButton value="allProducts" aria-label="all products">
        All Products
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleBar;
