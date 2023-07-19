import * as React from 'react';
import  { Fragment , useState, useEffect } from 'react';
//import { useEffect, useState } from "react";
//import { createContext } from 'react';

//import { SelectedValueProvider } from '../components/SelectedValueContext';

import config from "../config";
//import GetVidTipo from './GetVidTipo';
//import selectedOption from './GetVidTipo';
//import GetVidTerminado from './GetVidTerminado';
//import GetPorcTerminado from './GetPorcTerminado';
import GetVarillaTipo from './GetVarillaTipo';
import GetPaspartuTipo from './GetPaspartuTipo';
//import ShowResultButton from "./ShowResultButton";
import Box, { BoxProps } from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
//import calcularPrecio from '../functions/calcularPrecio';
import { MuiTelInput } from 'mui-tel-input';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
//import Typography from '@mui/material/Typography';
//import SendWABtn from "./SendWABtn";

import { calcularPrecio } from '../functions/calcularPrecio'; 

const WIDTHINPUT = global.config.widths.input;
const APIKEY = global.config.credentials.apiKey;
const SPREADSHEETID = global.config.credentials.spreadsheetId;
const RANGE = global.config.credentials.ranges.vidrios;
const bkg1 = global.config.colors.bkg1;
const bkg2 = global.config.colors.bkg2;

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

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e6e6e6',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const ShowVidTable = () => {

  /* Tipo de Vidrio */
  const [selectedOption, setSelectedOption] = useState('');
  const [selectTerminado, setSelectedTerminado] = useState('');
  const [selectedPorcTerminado, setSelectedPorcTerminado] = useState('');
  /* Terminado */
  //const [selects, setSelects] = useState("");
  const [data, setData] = useState([]);
  const handleSelectChange = (event) => {
    // Update the state with the selected option
    setSelectedOption(event.target.value);
    let optionSelectedValue = event.target.value;
        optionSelectedValue = optionSelectedValue.split('-');
    document.getElementById('tipoVid').innerText = optionSelectedValue[2];
  };

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        // Use the Google Sheets API to fetch the data from your spreadsheet
        //apiKey: "AIzaSyAIxeepIrQjzBOW23khBcC8SltbHGxQFPQ",
        //spreadsheetId: "1aw-hW9nUVYyeL02lei1FoO7SxFKIOPgU5ovDQaMC5wk",
        //range: "puestos!A2:P8"
        const response = await fetch(
          "https://sheets.googleapis.com/v4/spreadsheets/"+SPREADSHEETID+"/values/"+RANGE+"?key="+APIKEY
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data from the spreadsheet.');
        }
        
        const data = await response.json();

        // Process the fetched data and transform it into the required format
        const transformedData = data.values.map((row) => ({
            //key	pasillo	local	nombre	categoria	detalle	icono	instagram	facebook	whatsapp	web	mail	imagen	description
            KEY: row[0],
            TIPOVIDRIO: row[1],
            PRECIOVIDRIO: row[2],
            TERMINADO: row[3],
            PRECIOTERMINADO: row[4],
          }));
       
        setData(transformedData);
      } catch (error) {
        console.error('Error fetching data from spreadsheet:', error);
      }
    };

    fetchSheetData();
  }, []);

  const [selectedDespVidrio, setSelectedDespVidrio] = useState('');
  const [selectedDespVarilla, setSelectedDespVarilla] = useState('');
  const [selectedDespPaspartu, setSelectedDespPaspartu] = useState('');
  const [selectedGanancia, setSelectedGanancia] = useState('');


  const handleSelectTerminado = (event) => {
    setSelectedTerminado(event.target.value);
    //let optionSelectedValue = event.target.value;
        //optionSelectedValue = optionSelectedValue.split('-');
        //document.getElementById('tipoPaspartu').innerText = optionSelectedValue[2];
  };

  const handleSelectedPorcTerminadoChange = (event) => {
    setSelectedPorcTerminado(event.target.value);
  };

  const handleSelectDespVidrioChange = (event) => {
    setSelectedDespVidrio(event.target.value);
  };

  const handleSelectDespVarillaChange = (event) => {
    setSelectedDespVarilla(event.target.value);
  };

  const handleSelectDespPaspartuChange = (event) => {
    setSelectedDespPaspartu(event.target.value);
  };

  const handleSelectGananciaChange = (event) => {
    setSelectedGanancia(event.target.value);
  };

  const [VarillaisChecked, setIsCheckedVarilla] = useState(false);
  const handleCheckboxChangeVarilla = (event) => {
    setIsCheckedVarilla(event.target.checked);
  };

  const [PaspartuisChecked, setIsCheckedPaspartu] = useState(false);
  const handleCheckboxChangePaspartu = (event) => {
    setIsCheckedPaspartu(event.target.checked);
  };

  const [phone, setPhone] = React.useState('');

  window.formatPhoneNumber = "";

  const handleChange = (newPhone) => {
        setPhone(newPhone);

        window.formatPhoneNumber = newPhone.replaceAll(/\s/g,'');
        //console.log(formatPhoneNumber)

        
  }

  return (
    <Fragment>

      <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1, 1fr)', backgroundColor: '#fff', borderRadius: 2, p:2 }}>
        
        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <Item>
            <FormControl required sx={{ m: 0, width: WIDTHINPUT }}>
              <InputLabel id="label-tipo">Tipo Vidrio</InputLabel>
              <Select
                id="selTipoVidSel"
                labelId="demo-simple-select-label"
                value={selectedOption}
                label="Tipo Vidrio"
                onChange={handleSelectChange}
                autoWidth
                >      
                {data.map((row, index) => (
                  <MenuItem key={index} value={row.KEY+'-'+row.TIPOVIDRIO+'-'+row.PRECIOVIDRIO}>{row.TIPOVIDRIO}</MenuItem>
                ))}
              </Select>
              <FormHelperText id="helper-text-precio-tipo">
                Precio de lista: $ <span id='tipoVid' className='highlight'></span> x m²
              </FormHelperText>
            </FormControl>
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
            <FormHelperText id="helper-text-valor-base">* Valor en metros. Usar . para decimales</FormHelperText>
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
              <FormHelperText id="helper-text-valor-altura">* Valor en metros. Usar . para decimales</FormHelperText>
            </FormControl>
          </Item>
        </Box>
        
        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <Item>
            <FormControl sx={{ m: 0, width: WIDTHINPUT }}>
              <InputLabel id="label-desp-vidrio">Terminado</InputLabel>
              <Select
                id="selTerminado"
                labelId="demo-simple-select-label"
                value={selectTerminado}
                label="terminado"
                onChange={handleSelectTerminado}
                >
                  <MenuItem key="N/A" value="N/A">N/A</MenuItem>
                  <MenuItem key="Cortado" value="Cortado">Cortado</MenuItem>
                  <MenuItem key="Pulido" value="Pulido">Pulido</MenuItem>
                  <MenuItem key="Colocado" value="Colocado">Colocado</MenuItem>
              </Select>
            </FormControl>
          </Item>

          <Item>
            <FormControl sx={{ m: 0, width: WIDTHINPUT }}>
              <InputLabel id="label-terminado">Precio x Terminado (%)</InputLabel>
              <Select
                id="selPorcTerminado"
                labelId="demo-simple-select-label"
                value={selectedPorcTerminado}
                label="Precio x Terminado (%)"
                onChange={handleSelectedPorcTerminadoChange}
                >
                  <MenuItem key={0} value={1}>0%</MenuItem>
                  <MenuItem key={10} value={1.1}>10%</MenuItem>
                  <MenuItem key={20} value={1.2}>20%</MenuItem>
                  <MenuItem key={30} value={1.3}>30%</MenuItem>
                  <MenuItem key={40} value={1.4}>40%</MenuItem>
                  <MenuItem key={50} value={1.5}>50%</MenuItem>
                  <MenuItem key={60} value={1.6}>60%</MenuItem>
                  <MenuItem key={70} value={1.7}>70%</MenuItem>
                  <MenuItem key={80} value={1.8}>80%</MenuItem>
                  <MenuItem key={90} value={1.9}>90%</MenuItem>
                  <MenuItem key={100} value={2}>100%</MenuItem>
              </Select>
            </FormControl>
          </Item>

          <Item>
            <FormControl sx={{ m: 0, width: WIDTHINPUT }}>
              <InputLabel id="label-desp-vidrio">Desperdicio VIDRIO (%)</InputLabel>
              <Select
                id="desperdicioVidrio"
                labelId="desperdicio-vidrio"
                value={selectedDespVidrio}
                label="desperdicio VIDRIO (%)"
                onChange={handleSelectDespVidrioChange}
                >
                  <MenuItem key={0} value={1}>0%</MenuItem>
                  <MenuItem key={10} value={1.10}>10%</MenuItem>
                  <MenuItem key={20} value={1.20}>20%</MenuItem>
                  <MenuItem key={30} value={1.30}>30%</MenuItem>
                  <MenuItem key={40} value={1.40}>40%</MenuItem>
                  <MenuItem key={50} value={1.50}>50%</MenuItem>
                  <MenuItem key={60} value={1.60}>60%</MenuItem>
                  <MenuItem key={70} value={1.70}>70%</MenuItem>
                  <MenuItem key={80} value={1.80}>80%</MenuItem>
                  <MenuItem key={90} value={1.90}>90%</MenuItem>
                  <MenuItem key={100} value={2}>100%</MenuItem>
              </Select>
            </FormControl>
          </Item>
        </Box>

        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <Box sx={{ display: 'grid', gap: 1, gridTemplateRows: 'repeat(3, 0.15fr)', backgroundColor: bkg1, borderRadius: "5px" }}>
            <Item>
              <FormGroup>
                <FormControlLabel required
                  control={<Checkbox checked={VarillaisChecked} onChange={handleCheckboxChangeVarilla} />}
                  label="Lleva varilla"
                />
              </FormGroup>
            </Item>
            <Item>
              <GetVarillaTipo />  
            </Item>
            <Item>
            <FormControl sx={{ m: 0, width: WIDTHINPUT }}>
                <InputLabel id="label-desp-varilla">Desperdicio VARILLA (%)</InputLabel>
                <Select
                  id="desperdicio-varilla"
                  labelId="desperdicio-varilla"
                  value={selectedDespVarilla}
                  label="desperdicio VARILLA (%)"
                  onChange={handleSelectDespVarillaChange}
                  >
                    <MenuItem key={0} value={1}>0%</MenuItem>
                    <MenuItem key={10} value={1.10}>10%</MenuItem>
                    <MenuItem key={20} value={1.20}>20%</MenuItem>
                    <MenuItem key={30} value={1.30}>30%</MenuItem>
                    <MenuItem key={40} value={1.40}>40%</MenuItem>
                    <MenuItem key={50} value={1.50}>50%</MenuItem>
                    <MenuItem key={60} value={1.60}>60%</MenuItem>
                    <MenuItem key={70} value={1.70}>70%</MenuItem>
                    <MenuItem key={80} value={1.80}>80%</MenuItem>
                    <MenuItem key={90} value={1.90}>90%</MenuItem>
                    <MenuItem key={100} value={2}>100%</MenuItem>
                </Select>
              </FormControl>
            </Item>
          </Box>

          <Box sx={{ display: 'grid', gap: 1, gridTemplateRows: 'repeat(3, 0.15fr)', backgroundColor: bkg1, borderRadius: "5px" }}>
            <Item>
              <FormGroup>
                {/* <FormControlLabel required control={<Checkbox />} label="Lleva paspartú" /> */}
                <FormControlLabel required
                  control={<Checkbox checked={PaspartuisChecked} onChange={handleCheckboxChangePaspartu} />}
                  label="Lleva paspartú"
                />
              </FormGroup>
            </Item>
            <Item>
              <GetPaspartuTipo />
            </Item>
            <Item>  
              <FormControl sx={{ m: 0, width: WIDTHINPUT }}>
                <InputLabel id="label-desp-paspartu">Desperdicio PASPARTÚ (%)</InputLabel>
                <Select
                  id="desperdicio-paspartu"
                  labelId="desperdicio-paspartu"
                  value={selectedDespPaspartu}
                  label="desperdicio PASPARTÚ (%)"
                  onChange={handleSelectDespPaspartuChange}
                  >
                    <MenuItem key={0} value={1.0}>0%</MenuItem>
                    <MenuItem key={10} value={1.10}>10%</MenuItem>
                    <MenuItem key={20} value={1.20}>20%</MenuItem>
                    <MenuItem key={30} value={1.30}>30%</MenuItem>
                    <MenuItem key={40} value={1.40}>40%</MenuItem>
                    <MenuItem key={50} value={1.50}>50%</MenuItem>
                    <MenuItem key={60} value={1.60}>60%</MenuItem>
                    <MenuItem key={70} value={1.70}>70%</MenuItem>
                    <MenuItem key={80} value={1.80}>80%</MenuItem>
                    <MenuItem key={90} value={1.90}>90%</MenuItem>
                    <MenuItem key={100} value={2.00}>100%</MenuItem>
                </Select>
              </FormControl>         
            </Item>
          </Box>
          
          <Box sx={{ display: 'grid', gap: 1, gridTemplateRows: 'repeat(3, 0.15fr)', backgroundColor: bkg2, borderRadius: "5px" }}>
            <Item>
              <FormControl required sx={{ m: 0, width: WIDTHINPUT }}>
                <InputLabel id="label-ganancia">Ganancia (%)</InputLabel>
                <Select
                  id="ganancia"
                  labelId="ganancia"
                  value={selectedGanancia}
                  label="Ganancia (%)"
                  onChange={handleSelectGananciaChange}
                  >
                    <MenuItem key={0} value={1}>0%</MenuItem>
                    <MenuItem key={10} value={1.1}>10%</MenuItem>
                    <MenuItem key={20} value={1.2}>20%</MenuItem>
                    <MenuItem key={30} value={1.3}>30%</MenuItem>
                    <MenuItem key={40} value={1.4}>40%</MenuItem>
                    <MenuItem key={50} value={1.5}>50%</MenuItem>
                    <MenuItem key={60} value={1.6}>60%</MenuItem>
                    <MenuItem key={70} value={1.7}>70%</MenuItem>
                    <MenuItem key={80} value={1.8}>80%</MenuItem>
                    <MenuItem key={90} value={1.9}>90%</MenuItem>
                    <MenuItem key={100} value={2}>100%</MenuItem>
                    <MenuItem key={120} value={2.12}>120%</MenuItem>
                    <MenuItem key={140} value={2.14}>140%</MenuItem>
                    <MenuItem key={160} value={2.16}>160%</MenuItem>
                    <MenuItem key={200} value={3.20}>200%</MenuItem>
                    <MenuItem key={220} value={3.22}>220%</MenuItem>
                    <MenuItem key={240} value={3.24}>240%</MenuItem>
                    <MenuItem key={280} value={3.28}>280%</MenuItem>
                    <MenuItem key={300} value={4.30}>300%</MenuItem>
                    <MenuItem key={320} value={4.32}>320%</MenuItem>
                    <MenuItem key={340} value={4.34}>340%</MenuItem>
                    <MenuItem key={360} value={4.36}>360%</MenuItem>
                    <MenuItem key={380} value={4.38}>380%</MenuItem>
                    <MenuItem key={400} value={5.40}>400%</MenuItem>
                </Select>
              </FormControl>              
            </Item>
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1, 1fr)' }}>
          <Item>
            <Typography variant="string" sx={{ m:1 }} >
              Fórmula: ( $VIDRIO_POR_METRO x BASE x ALTURA x %DESPERDICIO x %TERMINADO + VARILLA + PASPARTÚ ) x %GANANCIA
            </Typography>
          </Item>
        </Box>

        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1, 1fr)' }}>
          <Button onClick={ () => calcularPrecio( selectedOption, selectTerminado, selectedPorcTerminado, selectedDespVidrio, VarillaisChecked, PaspartuisChecked, selectedDespVarilla, selectedDespPaspartu, selectedGanancia ) } sx={{ m: 1, p:1 }} variant="contained">Calcular precio</Button>
        </Box>

        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1, 1fr)' }}>
          <Item>
            <Alert id='error' severity="error">
              <div id='message'></div>
              <div className='varillas'></div>
              <div className='paspartu'></div>
            </Alert>
              
          </Item>

          <Item>
            <Alert size="lg" id='resultado' variant="outlined" severity="success" sx={{ m: 0 }}></Alert>
          </Item>
        </Box>

        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1, 1fr)' }}>
          <Item>            
            <Fragment>
              <Stack id="enviarWABox" direction="column" spacing={1}>
                  <Item>
                      <MuiTelInput id="phoneValue" value={phone} onChange={handleChange} defaultCountry={'AR'} />
                      <Button id="enviarWA" target="_blank" onClick={() => {
                          window.encodeMsg0 = encodeURIComponent("🪟 *Robert Glass* - Taller de enmarcado, vidrios y espejos");
                          window.encodeMsg1 = encodeURIComponent("📍 Virrey Aviles 2718 - Av. Francisco Beiró 3091 (CABA)");

                          window.presupuestoDetalle = document.getElementsByClassName("MuiAlert-message css-1pxa9xg-MuiAlert-message")[1].innerText;
                          window.formatPhoneNumber = document.getElementById("phoneValue").value;
                          window.presupuesto = document.getElementsByClassName("resultado")[0].innerText;

                          window.encodeMsg2 = encodeURIComponent("✅ " + window.presupuestoDetalle);

                          window.mensajeAEnviar = window.encodeMsg0+"%0a"+window.encodeMsg1+"%0a%0a"+window.encodeMsg2+"%0a";

                          alert('Revise bien los datos antes de enviar por WhatsApp');
                          window.open("https://api.whatsapp.com/send?phone="+window.formatPhoneNumber+"&text="+window.mensajeAEnviar, '_blank');

                        }} href="#" sx={{ m: 0, p:1.5, backgroundColor: "#008069" }} variant="contained" color="secondary">
                          <WhatsAppIcon sx={{ color: '#FFFFFF' }}/>
                          <Typography variant="p" sx={{ pl:2, color: '#FFFFFF'}}>Enviar por WhatsApp</Typography>
                      </Button>
                  </Item>
              </Stack>
            </Fragment>
          </Item>
        </Box>

      </Box>
    </Fragment>

  );
};

export default ShowVidTable;