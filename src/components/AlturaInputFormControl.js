import React from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from "@mui/material";

const AlturaInputFormControl = ({
  id = "altura",
  label = "Altura",
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
        value={value}
        onChange={onChange}
        label={label}
        endAdornment={<InputAdornment position="end">cm</InputAdornment>}
        aria-describedby={`helper-text-${id}`}
        inputProps={{
          "aria-label": label,
        }}
      />
      <FormHelperText id={`helper-text-${id}`}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default AlturaInputFormControl;
