import React, { Fragment } from 'react';
import Button from '@mui/material/Button';
import calcularPrecioCuadro from '../functions/calcularPrecioCuadro';

function ShowResultButtonCuadro () {
 
    return (
      <Fragment>
        <Button onClick={calcularPrecioCuadro} sx={{ m: 1, p:1 }} variant="contained">Calcular precio</Button>
      </Fragment>
    )

  }

  export default ShowResultButtonCuadro;