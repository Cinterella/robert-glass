import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const DesperdicioPaspartuFormControl = ({
  id = "desperdicio-paspartu",
  label = "Desperdicio PASPARTÚ (%)",
  value,
  onChange,
  width = "100%",
}) => {
  const menuItems = [
    { value: 1.0, label: "0%" },
    { value: 1.10, label: "10%" },
    { value: 1.20, label: "20%" },
    { value: 1.30, label: "30%" },
    { value: 1.40, label: "40%" },
    { value: 1.50, label: "50%" },
    { value: 1.60, label: "60%" },
    { value: 1.70, label: "70%" },
    { value: 1.80, label: "80%" },
    { value: 1.90, label: "90%" },
    { value: 2.00, label: "100%" },
  ];

  return (
    <FormControl sx={{ marginTop: 1.5, width }}>
      <InputLabel id={`label-${id}`}>{label}</InputLabel>
      <Select
        id={id}
        labelId={`label-${id}`}
        value={value}
        label={label}
        onChange={onChange}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DesperdicioPaspartuFormControl;
