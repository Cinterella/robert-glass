import React, { Fragment } from 'react';
import Button from '@mui/material/Button';
import calcularPrecio from '../functions/calcularPrecio';

function ShowResultButton () {
 
    return (
      <Fragment>
        <Button onClick={calcularPrecio} sx={{ m: 1, p:1 }} variant="contained">Calcular precio</Button>
      </Fragment>
    )

  }

  export default ShowResultButton;