import * as React from 'react';
import  { Fragment , useState } from 'react';

import config from "../config";
import GetVidTipo from './GetVidTipo';
import GetVidTerminado from './GetVidTerminado';
import ShowResultButton from "./ShowResultButton";
import logo from '../img/logo.svg';

import Box, { BoxProps } from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SendWABtn from "./SendWABtn";

const WIDTHINPUT = global.config.widths.input;
const colorsWa = global.config.colors.wa;

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        p: 1,
        m: 0,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

const ShowVidTable = () => {

  const [valueDesperdicio, setValueDesperdicio] = useState("0");
  const [valueGanancia, setValueGanancia] = useState("0");

  return (
    <Fragment>
      <div className='logoBox'>
        <img className='logo' src={logo} alt="Robert Glass logo" />
      </div>

      <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1, 1fr)', backgroundColor: '#fff', borderRadius: 2, p:2 }}>
        
        <Typography variant="h5" sx={{ m:1}} >Cálculo Vidriería</Typography>

        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <Item>
            <GetVidTipo />  
          </Item>

          <Item>
            <GetVidTerminado />
          </Item>

          <Item>
            <FormControl required sx={{ m: 0, width: WIDTHINPUT }}>
              <InputLabel id="label-base">Base</InputLabel>
              <OutlinedInput
                id="base"
                label="base"
                endAdornment={<InputAdornment position="end">metros</InputAdornment>}
                aria-describedby="outlined-weight-helper-text-base"
                inputProps={{
                  'aria-label': 'base',
                }}
              />
            <FormHelperText id="helper-text-valor-base">* Valor expresado en metros.</FormHelperText>
            </FormControl>
          </Item>

          <Item>
            <FormControl required sx={{ m: 0, width: WIDTHINPUT }}>
              <InputLabel id="label-altura">Altura</InputLabel>
              <OutlinedInput
                id="altura"
                label="altura"
                endAdornment={<InputAdornment position="end">metros</InputAdornment>}
                aria-describedby="outlined-weight-helper-text-altura"
                inputProps={{
                  'aria-label': 'altura',
                }}
                />
              <FormHelperText id="helper-text-valor-altura">* Valor expresado en metros.</FormHelperText>
            </FormControl>
          </Item>

          <Item>
            <FormControl sx={{ m: 0, width: WIDTHINPUT }}>                
              <TextField
                id="desperdicio"
                label="desperdicio (%)"
                type="number"
                value={valueDesperdicio}
                variant="outlined"
                inputProps={{
                  maxLength: 10,
                  step: "1"
                }}
                onChange={ (e) => setValueDesperdicio(e.target.valueDesperdicio) }
              />
            </FormControl>
          </Item>

          <Item>
            <FormControl sx={{ m: 0, width: WIDTHINPUT }}>                
              <TextField
                id="ganancia"
                label="ganancia (%)"
                type="number"
                value={valueGanancia}
                variant="outlined"
                inputProps={{
                  maxLength: 10,
                  step: "1"
                }}
                onChange={ (e) => setValueGanancia(e.target.valueGanancia) }
              />
            </FormControl>
          </Item>
        </Box>
        
        <Item>
          <Typography variant="string" sx={{ m:1 }} >
            <p>Fórmula:</p>[ ( $ VIDRIO x BASE x ALTURA x DESPERDICIO ) + TERMINADO ] x GANANCIA%
          </Typography>
        </Item>

        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1, 1fr)', }}>
          <ShowResultButton />
        </Box>

        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1, 1fr)', }}>
          <Item>
            <Alert id='error' severity="error">Debe seleccionar un <strong>TIPO</strong> de vidrio, valor de <strong>BASE</strong> y <strong>ALTURA</strong> válidos para poder realizar el cálculo.</Alert>
          </Item>

          <Item>
            <Alert size="lg" id='resultado' variant="outlined" severity="success" sx={{ m: 0 }}></Alert>
          </Item>
        </Box>

        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1, 1fr)', }}>
          <Item>
            
            <SendWABtn />
            
          </Item>
        </Box>

      </Box>
    </Fragment>

  );
};

export default ShowVidTable;