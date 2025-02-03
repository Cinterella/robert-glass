import React from 'react';
import ShowVidTable from './components/ShowVidTable';
import ShowFrameTable from './components/ShowFrameTable';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import logo from './img/logo.svg';

const App = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Container maxWidth="lg">
      <div className="logoBox">
        <img className="logo" src={logo} alt="Robert Glass logo" />
      </div>

      <Box sx={{ width: '100%', typography: 'body1', marginTop: 4 }}>
        <Tabs value={currentTab} onChange={handleTabChange} centered>
          <Tab label="CUADROS" />
          <Tab label="VIDRIOS" />
        </Tabs>

        <Box sx={{ marginTop: 2, p:1, backgroundColor:"#f6f6f6", borderRadius: 2 }}>
          {currentTab === 0 && <ShowFrameTable />}
          {currentTab === 1 && <ShowVidTable />}
        </Box>
      </Box>
    </Container>
  );
};

export default App;
