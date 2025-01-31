import React from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from "@mui/material";

const BaseInputFormControl = ({
  id = "base",
  label = "Base",
  value,
  onChange,
  adornment = "cm",
  helperText,
  width="100%",
}) => {
  return (
    <FormControl required sx={{ m: 0, width }}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        label={label}
        value={value}
        onChange={onChange}
        endAdornment={<InputAdornment position="end">{adornment}</InputAdornment>}
        aria-describedby={`helper-text-${id}`}
        inputProps={{
          "aria-label": label,
        }}
      />
      <FormHelperText id={`helper-text-${id}`}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default BaseInputFormControl;
