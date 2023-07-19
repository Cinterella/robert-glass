import * as React from 'react';
import {Fragment , useState} from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import calcularPrecio from '../functions/calcularPrecio';
import { MuiTelInput } from 'mui-tel-input';
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
    const [phone, setPhone] = React.useState('');

    const handleChange = (newPhone) => {
        setPhone(newPhone);

        let formatPhoneNumber = newPhone.replaceAll(/\s/g,'');
        //console.log(formatPhoneNumber)
        
        
        
    }
    
    const mensajeWA = () => {
        alert('Hello!');
        console.log("asdasd")
        //window.location.href="pagelink"
        //window.mensajeWA = "https://api.whatsapp.com/send?phone="+formatPhoneNumber+"&text="+window.mensajeAEnviar;

    }

    //const handleInputBlur = event => {
        /* setPhone(newPhone)
        let formatPhoneNumber = newPhone.replaceAll(/\s/g,'');
        //console.log(formatPhoneNumber)

        window.encodeMsg0 = encodeURIComponent("🪟 *Robert Glass* - Taller de enmarcado, vidrios y espejos");
        window.encodeMsg1 = encodeURIComponent("📍 Virrey Aviles 2718 - Av. Francisco Beiró 3091 (CABA)");
        window.encodeMsg2 = encodeURIComponent("✅ " + window.presupuesto);
        window.mensajeAEnviar = window.encodeMsg0+"%0a"+window.encodeMsg1+"%0a%0a"+window.encodeMsg2+"%0a";
        window.mensajeWA = "https://api.whatsapp.com/send?phone="+formatPhoneNumber+"&text="+window.mensajeAEnviar; */
    //};

    return (
        <Fragment>
            <Stack id="enviarWABox" direction="column" spacing={1}>
                <Item>
                    {/* <MuiTelInput value={phone} onChange={handleChange} defaultCountry={'AR'} /> */}
                    <MuiTelInput value={phone} onChange={handleChange} defaultCountry={'AR'} />
                    {/* <Button id="enviarWA" target="_blank" onClick={this.sayHello} href={window.mensajeWA} sx={{ m: 0, p:1.5, backgroundColor: "#008069" }} variant="contained" color="secondary"> */}
                    <Button id="enviarWA" target="_blank" onClick={() => {
                            alert('clicked');
                        }} sx={{ m: 0, p:1.5, backgroundColor: "#008069" }} variant="contained" color="secondary">
                        <WhatsAppIcon sx={{ color: '#FFFFFF' }}/>
                        <Typography variant="p" sx={{ pl:2, color: '#FFFFFF'}}>Enviar por WhatsApp</Typography>
                    </Button>
                </Item>
            </Stack>
        </Fragment>
    )
}

export default SendWABtn;