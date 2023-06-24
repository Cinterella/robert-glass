import * as React from 'react';
import  { Fragment , useState } from 'react';

import config from "../config";
import GetVidTipoCuadro from './GetVidTipoCuadro';
import GetVarillaTipo from './GetVarillaTipo';
import GetPaspartuTipo from './GetPaspartuTipo';
import ShowResultButtonCuadro from "./ShowResultButtonCuadro";

import Box, { BoxProps } from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';
import SendWABtnCuadros from "./SendWABtnCuadros";

const WIDTHINPUT = global.config.widths.input;

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


const ShowCuadrosTable = () => {  

    const [valueDesperdicioVid, setValueDesperdicioVid] = useState("0");
    const [valueDesperdicioVar, setValueDesperdicioVar] = useState("0");
    const [valueDesperdicioPas, setValueDesperdicioPas] = useState("0");

    const [valueGananciaCuadros, setValueGananciaCuadros] = useState("0");
    const [valueTerminacion, setValueTerminacion] = useState("0");

    return (
    <Fragment>

        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1, 1fr)', backgroundColor: '#fff', borderRadius: 2, p:2 }}>

            <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <Item>
                    <FormControl required sx={{ m: 0, width: WIDTHINPUT }}>
                        <InputLabel id="label-base">Base</InputLabel>
                        <OutlinedInput
                            id="base-vidrio"
                            label="base"
                            endAdornment={<InputAdornment position="end">metros</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text-base"
                            inputProps={{
                            'aria-label': 'base',
                            }}
                        />
                        <FormHelperText id="helper-text-valor-base">* Valor de vidrio x metro.</FormHelperText>
                    </FormControl>
                </Item>
                <Item>
                    <FormControl required sx={{ m: 0, width: WIDTHINPUT }}>
                        <InputLabel id="label-altura">Altura</InputLabel>
                        <OutlinedInput
                            id="altura-vidrio"
                            label="altura"
                            endAdornment={<InputAdornment position="end">metros</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text-altura"
                            inputProps={{
                            'aria-label': 'altura',
                            }}
                            />
                        <FormHelperText id="helper-text-valor-altura">* Valor de vidrio x metro.</FormHelperText>
                    </FormControl>
                </Item>
                <Item>
                    <GetVidTipoCuadro />  
                </Item>
                <Item>
                    <FormControl sx={{ m: 0, width: WIDTHINPUT }}>                
                        <TextField
                            id="desperdicio-vidrio"
                            label="desperdicio (%) VIDRIO"
                            type="number"
                            value={valueDesperdicioVid}
                            variant="outlined"
                            inputProps={{
                            maxLength: 10,
                            step: "1"
                            }}
                            onChange={ (e) => setValueDesperdicioVid(e.target.valueDesperdicioVid) }
                        />
                    </FormControl>
                </Item>
            </Box>

            <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <Item>
                    <FormControl required sx={{ m: 0, width: WIDTHINPUT }}>
                        <InputLabel id="label-base-varilla">Base</InputLabel>
                        <OutlinedInput
                            id="base-varilla"
                            label="base-varilla"
                            endAdornment={<InputAdornment position="end">metros</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text-base-varilla"
                            inputProps={{
                            'aria-label': 'base-varilla',
                            }}
                        />
                        <FormHelperText id="helper-text-valor-base-varilla">* Valor de vidrio x metro.</FormHelperText>
                    </FormControl>
                </Item>
                <Item>
                    <FormControl required sx={{ m: 0, width: WIDTHINPUT }}>
                        <InputLabel id="label-altura-varilla">Altura</InputLabel>
                        <OutlinedInput
                            id="altura-varilla"
                            label="altura-varilla"
                            endAdornment={<InputAdornment position="end">metros</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text-altura-varilla"
                            inputProps={{
                            'aria-label': 'altura-varilla',
                            }}
                            />
                        <FormHelperText id="helper-text-valor-altura-varilla">* Valor de vidrio x metro.</FormHelperText>
                    </FormControl>
                </Item>
                <Item>
                    <GetVarillaTipo />  
                </Item>
                <Item>
                    <FormControl sx={{ m: 0, width: WIDTHINPUT }}>                
                        <TextField
                            id="desperdicio-varilla"
                            label="desperdicio (%) VARILLA"
                            type="number"
                            value={valueDesperdicioVar}
                            variant="outlined"
                            inputProps={{
                            maxLength: 10,
                            step: "1"
                            }}
                            onChange={ (e) => setValueDesperdicioVar(e.target.valueDesperdicioVar) }
                        />
                    </FormControl>
                </Item>
            </Box>

            <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(4, 1fr)' }}>
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
                        <FormHelperText id="helper-text-valor-base">* Valor de vidrio x metro.</FormHelperText>
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
                        <FormHelperText id="helper-text-valor-altura">* Valor de vidrio x metro.</FormHelperText>
                    </FormControl>
                </Item>
                <Item>
                    <GetPaspartuTipo />  
                </Item>
                <Item>
                    <FormControl sx={{ m: 0, width: WIDTHINPUT }}>                
                        <TextField
                            id="desperdicio-paspartu"
                            label="desperdicio (%) PASPARTU"
                            type="number"
                            value={valueDesperdicioPas}
                            variant="outlined"
                            inputProps={{
                            maxLength: 10,
                            step: "1"
                            }}
                            onChange={ (e) => setValueDesperdicioPas(e.target.valueDesperdicioPas) }
                        />
                    </FormControl>
                </Item>
            </Box>

            <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <Item>
                    <FormControl sx={{ m: 0, width: WIDTHINPUT }}>                
                        <TextField
                            id="terminacion-cuadros"
                            label="terminacion (%)"
                            type="number"
                            value={valueTerminacion}
                            variant="outlined"
                            inputProps={{
                            maxLength: 10,
                            step: "1"
                            }}
                            onChange={ (e) => setValueTerminacion(e.target.valueTerminacion) }
                        />
                    </FormControl>
                </Item>
                <Item>
                    <FormControl sx={{ m: 0, width: WIDTHINPUT }}>                
                        <TextField
                            id="ganancia-cuadros"
                            label="ganancia (%)"
                            type="number"
                            value={valueGananciaCuadros}
                            variant="outlined"
                            inputProps={{
                            maxLength: 10,
                            step: "1"
                            }}
                            onChange={ (e) => setValueGananciaCuadros(e.target.valueGananciaCuadros) }
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
                <ShowResultButtonCuadro />
            </Box>

            <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1, 1fr)', }}>
                <Item>
                    <Alert id='error-cuadro-vidrio' severity="error">Debe seleccionar un valor de <strong>BASE</strong> y <strong>ALTURA</strong> válidos para poder realizar el cálculo de <strong>VIDRIO</strong>.</Alert>
                    <Alert id='error-cuadro-varilla' severity="error">Debe seleccionar un valor de <strong>BASE</strong> y <strong>ALTURA</strong> válidos para poder realizar el cálculo de <strong>VARILLA</strong>.</Alert>
                    <Alert id='error-cuadro-paspartu' severity="error">Debe seleccionar un valor de <strong>BASE</strong> y <strong>ALTURA</strong> válidos para poder realizar el cálculo de <strong>PASPARTÚ</strong>.</Alert>
                </Item>

                <Item>
                    <Alert size="lg" id='resultado-cuadro' variant="outlined" severity="success" sx={{ m: 0 }}></Alert>
                </Item>
            </Box>

            <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1, 1fr)', }}>
                <Item>            
                    <SendWABtnCuadros />
                </Item>
            </Box>

        </Box>
    </Fragment>
    );
};

export default ShowCuadrosTable;