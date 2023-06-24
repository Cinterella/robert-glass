import React from 'react';
import * as React from 'react';
import ShowCuadrosTable from './components/ShowCuadrosTable';
import Container from '@mui/material/Container';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const [alignment, setAlignment] = React.useState('web');

const handleChange = (
  event: React.MouseEvent<HTMLElement>,
  newAlignment: string,
) => {
  setAlignment(newAlignment);
};

const AppCuadros = () => {
  return (

    <Container maxWidth="md">

    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton>
    </ToggleButtonGroup>

      <ShowCuadrosTable />  
    </Container>
  );
};

export default AppCuadros;