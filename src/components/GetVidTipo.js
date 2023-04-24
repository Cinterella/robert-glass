import React, { Fragment } from 'react';
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import config from "../config";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const WIDTHINPUT = global.config.widths.input;

const APIKEY = global.config.credentials.apiKey;
const SPREADSHEET_ID = global.config.credentials.spreadsheetId;
const RANGE = global.config.credentials.ranges.vidrios;

function GetVidTipo() {
  const [selectedOption, setSelectedOption] = useState('');
  const [data, setData] = useState([]);

  const handleSelectChange = (event) => {
    // Update the state with the selected option
    setSelectedOption(event.target.value);
    let optionSelectedValue = event.target.value;
        optionSelectedValue = optionSelectedValue.split('-');
    //console.log(optionSelectedValue);
    document.getElementById('tipoVid').innerText = optionSelectedValue[2];
  };

  useEffect(() => {
    // Load the Google API client library
    gapi.load("client", () => {
      gapi.client.init({
        apiKey: APIKEY,
        discoveryDocs: [
          "https://sheets.googleapis.com/$discovery/rest?version=v4",
        ]
      });

      // Authenticate the user and load the spreadsheet data
      gapi.client.load("sheets", "v4", () => {
        gapi.client.sheets.spreadsheets.values
          .get({
            spreadsheetId: SPREADSHEET_ID,
            range: RANGE,
          })          
          .then((response) => {
            setData(response.result.values);
          })
          .catch((error) => {
            console.log("Error loading data from Google Sheets:", error);
          });
      });
    });    
  }, []);
  
  return (

    <Fragment>
      <FormControl required sx={{ m: 0, width: WIDTHINPUT }}>
        <InputLabel id="label-tipo">Tipo</InputLabel>
        <Select
          id="selTipoVidSel"
          labelId="demo-simple-select-label"
          value={selectedOption}
          label="tipo"
          onChange={handleSelectChange}
          autoWidth
          >      
          {data.map((row, index) => (
            <MenuItem key={index} value={row[0]+'-'+row[1]+'-'+row[2]}>{row[1]}</MenuItem>
          ))}
        </Select>
        <FormHelperText id="helper-text-precio-tipo">
          Precio de lista: $ <span id='tipoVid' className='highlight'></span> x m²
        </FormHelperText>
      </FormControl>
    </Fragment>
    
  );

}

export default GetVidTipo;