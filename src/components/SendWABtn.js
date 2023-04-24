import * as React from 'react';
import {Fragment , useState} from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import calcularPrecio from '../functions/calcularPrecio';
import {
  MuiTelInput,
  MuiTelInputCountry,
  MuiTelInputContinent,
  matchIsValidTel
} from 'mui-tel-input';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e6e6e6',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));


function SendWABtn () {

    //console.log("window.presupuesto"+window.presupuesto)
    const [phone, setPhone] = React.useState('')

    const handleChange = (newPhone) => {
        setPhone(newPhone)
        window.str = newPhone.substring(3, newPhone.length);
        window.str = window.str.replace(/\s/g, "");

        //console.log(window.presupuesto)
        window.encodeMsg0 = encodeURIComponent('Buenos días , nos comunicamos de Robert Glass 🪟');
        window.encodeMsg1 = encodeURIComponent('Le comunicamos los precios del presupuesto solicitado:');
        window.encodeMsg2 = encodeURIComponent('✅ ' + window.presupuesto);
        window.encodeMsg3 = encodeURIComponent('Muchas gracias!');
        window.mensajeAEnviar = window.encodeMsg0+"%0a"+window.encodeMsg1+"%0a%0a"+window.encodeMsg2+"%0a%0a"+window.encodeMsg3;
        window.mensajeWA = "https://api.whatsapp.com/send?phone="+window.str+"&text="+window.mensajeAEnviar;
    }

    return (
        <Fragment>
            <Stack id="enviarWABox" direction="column" spacing={1}>
                <Item>
                    <MuiTelInput value={phone} onChange={handleChange} defaultCountry={'AR'} />
                    <Button id="enviarWA" target="_blank" href={window.mensajeWA} sx={{ m: 0, p:1.5, backgroundColor: "#008069" }} variant="contained" color="secondary">
                        <WhatsAppIcon sx={{ color: '#FFFFFF' }}/>
                        <Typography variant="p" sx={{ pl:2, color: '#FFFFFF'}}>Enviar por WhatsApp</Typography>
                    </Button>
                </Item>
            </Stack>
        </Fragment>
    )
}

export default SendWABtn;