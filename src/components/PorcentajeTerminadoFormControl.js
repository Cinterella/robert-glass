import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const PorcentajeTerminadoFormControl = ({
  id = "porcentaje-terminado",
  label = "Porcentaje CLIENTE (%)",
  value,
  onChange,
  width="100%",
  options = [
    { label: "0%", value: 1 },
    { label: "10%", value: 1.10 },
    { label: "20%", value: 1.20 },
    { label: "30%", value: 1.30 },
    { label: "40%", value: 1.40 },
    { label: "50%", value: 1.50 },
    { label: "60%", value: 1.60 },
    { label: "70%", value: 1.70 },
    { label: "80%", value: 1.80 },
    { label: "90%", value: 1.90 },
    { label: "100%", value: 2 },
    { label: "110%", value: 2.10 },
    { label: "120%", value: 2.20 },
    { label: "130%", value: 2.30 },
    { label: "140%", value: 2.40 },
    { label: "150%", value: 2.50 },
    { label: "160%", value: 2.60 },
    { label: "170%", value: 2.70 },
    { label: "180%", value: 2.80 },
    { label: "190%", value: 2.90 },
    { label: "200%", value: 3 },
  ],
}) => {
  return (
    <FormControl sx={{ m: 0, width }}>
      <InputLabel id={`label-${id}`}>{label}</InputLabel>
      <Select
        id={id}
        labelId={`label-${id}`}
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PorcentajeTerminadoFormControl;
