import React, { Fragment } from 'react';
import { useEffect, useState } from "react";
import config from "../config";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
//import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const WIDTHINPUT = global.config.widths.input;

const APIKEY = global.config.credentials.apiKey;
const SPREADSHEETID = global.config.credentials.spreadsheetId;
const RANGE = global.config.credentials.ranges.porcTerminado;

function GetPorcTerminado() {
  //const [selects, setSelects] = useState("");
  const [data, setData] = useState([]);

  const [selectedPorcTerminado, setSelectedPorcTerminado] = useState('');

  const handleSelectedPorcTerminadoChange = (event) => {
    setSelectedPorcTerminado(event.target.value);
    //let optionSelectedValue = event.target.value;
        //optionSelectedValue = optionSelectedValue.split('-');
        //document.getElementById('tipoPaspartu').innerText = optionSelectedValue[2];
  };

  /* const handleSelectChange = (event) => {
    setSelects(event.target.value);
    //let optionSelectedValue = event.target.value;
        optionSelectedValue = optionSelectedValue.split('-');
    //document.getElementById('terminado').innerText = optionSelectedValue[2];
  }; */

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const response = await fetch(
          "https://sheets.googleapis.com/v4/spreadsheets/"+SPREADSHEETID+"/values/"+RANGE+"?key="+APIKEY
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data from the spreadsheet.');
        }

        const data = await response.json();

        const transformedData = data.values.map((row) => ({
            KEY: row[0],
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

  return (
      
    <Fragment>
      <FormControl sx={{ m: 0, width: WIDTHINPUT }}>
        <InputLabel id="label-terminado">Precio x Terminado (%)</InputLabel>
        <Select
          id="selPorcTerminado"
          labelId="demo-simple-select-label"
          value={selectedPorcTerminado}
          label="Precio x Terminado (%)"
          onChange={handleSelectedPorcTerminadoChange}
          >
            <MenuItem key={10} value={10}>10%</MenuItem>
            <MenuItem key={20} value={20}>20%</MenuItem>
            <MenuItem key={30} value={30}>30%</MenuItem>
            <MenuItem key={40} value={40}>40%</MenuItem>
            <MenuItem key={50} value={50}>50%</MenuItem>
            <MenuItem key={60} value={60}>60%</MenuItem>
            <MenuItem key={70} value={70}>70%</MenuItem>
            <MenuItem key={80} value={80}>80%</MenuItem>
            <MenuItem key={90} value={90}>90%</MenuItem>
            <MenuItem key={100} value={100}>100%</MenuItem>
        </Select>
      </FormControl>
    </Fragment>

  );
}

export default GetPorcTerminado;