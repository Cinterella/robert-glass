import React, { useState, useEffect } from "react";
import config from "../config";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const TipoVidrioFormControl = ({
  id,
  label,
  value,
  onChange,
  additionalMenuItems = [],
  width="100%",
  }) => {
  const [data, setData] = useState([]);
  const [helperText, setHelperText] = useState({
    precioLista: "",
    precioGanancia: "",
  });

  useEffect(() => {
    const fetchSheetData = async () => {
      const range = config.credentials.ranges.total;
      try {
        const response = await fetch(
          `/.netlify/functions/fetchSheetData?range=${range}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data from the server.');
        }

        const sheetData = await response.json();

        const transformedData = sheetData
        .map(({ KEY,TIPOVIDRIO, PRECIOVIDRIO, PRECIOVIDRIOGANANCIA }) => ({
          KEY,
          TIPOVIDRIO,
          PRECIOVIDRIO,
          PRECIOVIDRIOGANANCIA,
        }))
        .filter(
          (row) =>
            row.TIPOVIDRIO && row.PRECIOVIDRIO && row.PRECIOVIDRIOGANANCIA
        );

        setData(transformedData);
      } catch (error) {
        console.error("Error fetching data from spreadsheet:", error);
      }
    };

    fetchSheetData();
  }, []);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    onChange(event);

    const selectedData = data.find(
      (row) => `${row.KEY}-${row.TIPOVIDRIO}-${row.PRECIOVIDRIO}-${row.PRECIOVIDRIOGANANCIA}` === selectedValue
    );

    if (selectedData) {
      setHelperText({
        precioLista: selectedData.PRECIOVIDRIO,
        precioGanancia: selectedData.PRECIOVIDRIOGANANCIA,
      });
    }
  };

  return (
    <FormControl required sx={{ m: 0, width }}>
      <InputLabel id={`label-${id}`}>{label}</InputLabel>
      <Select
        id={id}
        labelId={`label-${id}`}
        value={value}
        onChange={handleSelectChange}
        label={label}
        autoWidth
      >
        {data.map((row, index) => (
          <MenuItem
            key={index}
            value={`${row.KEY}-${row.TIPOVIDRIO}-${row.PRECIOVIDRIO}-${row.PRECIOVIDRIOGANANCIA}`}
            data-price={`${row.PRECIOVIDRIOGANANCIA}`}
          >
            {row.TIPOVIDRIO}
          </MenuItem>
        ))}
        {additionalMenuItems.map((item, index) => (
          <MenuItem 
          key={`additional-${index}`} 
          value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>
        Precio lista: $ <span id="vidrio-precio" className="highlight">{helperText.precioLista}</span> x m²<br></br>
        Precio c/Ganancia: $ <span id="vidrio-precio-ganancia" className="highlight-secondary">{helperText.precioGanancia}</span> x m²
      </FormHelperText>
    </FormControl>
  );
};

export default TipoVidrioFormControl;
