import React, { useState, useEffect } from "react";
import config from "../config";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const TerminadoFormControl = ({
  id,
  label,
  value,
  onChange,
  additionalMenuItems = [],
  helperText,
  width="100%",
}) => {
  const [data, setData] = useState([]); // Estado para almacenar los datos

  // Fetch los datos de Google Sheets
  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const range = config.credentials.ranges.total;
        const response = await fetch(
          `/.netlify/functions/fetchSheetData?range=${range}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data from the server.');
        }

        const sheetData = await response.json();

        const transformedData = sheetData
        .map(({ KEY, TIPOTERMINADO, PRECIOTERMINADO }) => ({
          KEY, 
          TIPOTERMINADO,
          PRECIOTERMINADO,
        }))
        .filter(
          (row) =>
            row.TIPOTERMINADO && row.PRECIOTERMINADO
        );

        setData(transformedData);
        // console.log("Datos transformados:", transformedData);
      } catch (error) {
        console.error("Error fetching data from spreadsheet:", error);
      }
    };

    fetchSheetData();
  }, []); // Dependencias para volver a ejecutar el fetch si cambian

  return (
    <FormControl sx={{ m: 0, width }}>
      <InputLabel id={`label-${id}`}>{label}</InputLabel>
      <Select
        id={id}
        labelId={`label-${id}`}
        value={value}
        onChange={onChange}
        label={label}
      >
        {data.map((row, index) => (
          <MenuItem
            key={index}
            value={`${row.KEY}-${row.PRECIOTERMINADO}`}
          >
            {row.TIPOTERMINADO}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TerminadoFormControl;
