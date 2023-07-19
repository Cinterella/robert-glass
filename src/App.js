import React from 'react';
//import * as React from 'react';
import ShowVidTable from './components/ShowVidTable';
import Container from '@mui/material/Container';

import logo from './img/logo.svg';

/* import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel'; */

//import Typography from '@mui/material/Typography';
//import ShowCuadrosTable from './components/ShowCuadrosTable';


const App = () => {


  return (
    <Container maxWidth="lg">

      <div className='logoBox'>
        <img className='logo' src={logo} alt="Robert Glass logo" />
      </div>
      
      <ShowVidTable /> 

    </Container>
  );
};

export default App;