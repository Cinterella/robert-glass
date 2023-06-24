import React from 'react';
//import * as React from 'react';
import ShowVidTable from './components/ShowVidTable';
import Container from '@mui/material/Container';

import logo from './img/logo.svg';

import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

import Typography from '@mui/material/Typography';
import ShowCuadrosTable from './components/ShowCuadrosTable';


const App = () => {


  return (
    <Container maxWidth="lg">

      <div className='logoBox'>
        <img className='logo' src={logo} alt="Robert Glass logo" />
      </div>
      
      <Tabs
        size="sm"
        aria-label="Pricing plan"
        defaultValue={0}
        sx={(theme) => ({
          '--Tabs-gap': '0px',
          borderRadius: 'lg',
          boxShadow: 'sm',
          overflow: 'auto',
          border: `1px solid ${theme.vars.palette.divider}`,
        })}
      >
        <TabList
          sx={{
            '--ListItem-radius': '0px',
            borderRadius: 0,
            [`& .${tabClasses.root}`]: {
              padding: 2,
              fontWeight: 'lg',
              flex: 1,
              bgcolor: 'background.body',
              position: 'relative',
              [`&.${tabClasses.selected}`]: {
                color: 'primary.500',
              },
              [`&.${tabClasses.selected}:before`]: {
                content: '""',
                display: 'block',
                position: 'absolute',
                bottom: -1,
                width: '100%',
                height: 2,
                bgcolor: 'primary.400',
              },
              [`&.${tabClasses.focusVisible}`]: {
                outlineOffset: '-3px',
              },
            },
          }}
        >
          <Tab>Cálculo Cuadros</Tab>
          <Tab>Cálculo Vidriería</Tab>
        </TabList>

        <TabPanel value={0} sx={{ p: 0 }}>
          <ShowCuadrosTable />
        </TabPanel>
        <TabPanel value={1} sx={{ p: 0 }}>
          <ShowVidTable /> 
        </TabPanel>

      </Tabs>

    </Container>
  );
};

export default App;