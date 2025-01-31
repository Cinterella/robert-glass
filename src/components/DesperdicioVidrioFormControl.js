import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const DesperdicioVidrioFormControl = ({
  id = "desperdicio-vidrio",
  label = "Desperdicio VIDRIO (%)",
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
          <MenuItem 
          key={index} 
          value={option.value}
          data-price={`${option.value}`}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DesperdicioVidrioFormControl;
