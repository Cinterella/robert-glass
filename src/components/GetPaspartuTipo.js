import React, { Fragment } from 'react';
import { useEffect, useState } from "react";
//import { gapi } from "gapi-script";
import config from "../config";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const WIDTHINPUT = global.config.widths.input;

const APIKEY = global.config.credentials.apiKey;
const SPREADSHEETID = global.config.credentials.spreadsheetId;
const RANGE = global.config.credentials.ranges.paspartu;

function GetVidTipo() {
  const [selectedOption, setSelectedOption] = useState('');
  const [data, setData] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    let optionSelectedValue = event.target.value;
        optionSelectedValue = optionSelectedValue.split('-');
        document.getElementById('tipoPaspartu').innerText = optionSelectedValue[2];
  };

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
            TIPOPASPARTU: row[7],
            PRECIOPASPARTU: row[8],
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
      <FormControl required sx={{ m: 0, width: WIDTHINPUT }}>
        <InputLabel id="label-tipo">Tipo Paspartu</InputLabel>
        <Select
          id="selTipoPaspartuSel"
          labelId="demo-simple-select-label"
          value={selectedOption}
          label="tipo"
          onChange={handleSelectChange}
          autoWidth
          >      
          {data.map((row, index) => (
            <MenuItem key={index} value={row.KEY+'-'+row.TIPOPASPARTU+'-'+row.PRECIOPASPARTU}>{row.TIPOPASPARTU}</MenuItem>
          ))}
        </Select>
        <FormHelperText id="helper-text-precio-tipo">
          Precio de lista: $ <span id='tipoPaspartu' className='highlight'></span> x m²
        </FormHelperText>
      </FormControl>
    </Fragment>
    
  );

}

export default GetVidTipo;