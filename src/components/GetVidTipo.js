import React, { Fragment } from 'react';
import { useEffect, useState } from "react";
import config from "../config";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const WIDTHINPUT = global.config.widths.input;

const APIKEY = global.config.credentials.apiKey;
const SPREADSHEETID = global.config.credentials.spreadsheetId;
const RANGE = global.config.credentials.ranges.vidrios;

function GetVidTipo() {
  //const [cards, setCards] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
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
    </Fragment>
    
  );

}

export default GetVidTipo;