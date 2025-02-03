import * as React from 'react';
import  { Fragment , useState } from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

import TipoVidrioFormControl from "./TipoVidrioFormControl";
import BaseInputFormControl from "./BaseInputFormControl";
import AlturaInputFormControl from "./AlturaInputFormControl";
import TerminadoFormControl from "./TerminadoFormControl";
import PorcentajeTerminadoFormControl from "./PorcentajeTerminadoFormControl";
import DesperdicioVidrioFormControl from "./DesperdicioVidrioFormControl";
import TipoVarillaFormControl from './TipoVarillaFormControl';
import TipoPaspartuFormControl from './TipoPaspartuFormControl';
import DesperdicioPaspartuFormControl from './DesperdicioPaspartuFormControl';

const bkg1 = global.config.colors.bkg1;

const Item = (props) => {
  return (
    <Box
      sx={{
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        p: 1,
        m: 0,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...props.sx,
      }}
      {...props}
    />
  );
};

const ShowFrameTable = () => {
  const [selectedTipoVidrio, setSelectedTipoVidrio] = useState("");
  const handleSelectTipoVidrio = (event) => {
    setSelectedTipoVidrio(event.target.value);
  };

  const [baseValue, setBaseValue] = useState("");
  const handleBaseChange = (event) => {
    setBaseValue(event.target.value);
  };

  const [alturaValue, setAlturaValue] = useState("");
  const handleAlturaChange = (event) => {
    setAlturaValue(event.target.value);
  };

  const [selectTerminado, setSelectedTerminado] = useState('');
  const handleSelectTerminado = (event) => {
    setSelectedTerminado(event.target.value);
  };
  
  const [selectedPorcentajeTerminado, setSelectedPorcentajeTerminado] = useState(1);
  const handleSelectPorcentajeTerminadoChange = (event) => {
    setSelectedPorcentajeTerminado(event.target.value);
  };

  const [selectedTipoVarilla, setSelectedTipoVarilla] = useState("");
  const handleSelectTipoVarilla = (event) => {
    setSelectedTipoVarilla(event.target.value);
  };

  const [selectedTipoPaspartu, setSelectedTipoPaspartu] = useState("");
  const handleSelectTipoPaspartu = (event) => {
    setSelectedTipoPaspartu(event.target.value);
  };
  const [selectedDespPaspartu, setSelectedDespPaspartu] = useState(1.0);
  const handleSelectDespPaspartuChange = (event) => {
    setSelectedDespPaspartu(event.target.value);
  };
  
  const [selectedDespVidrio, setSelectedDespVidrio] = useState(1);
  const handleSelectDespVidrioChange = (event) => {
    setSelectedDespVidrio(event.target.value);
  };

  const handleShowPrice = () => {
    var resultadoDiv = document.getElementById("resultado");
    var errorDiv = document.getElementById("error");
    
    var msgOK = "";
    var vidrioSelectInput = "";
    var vidrioPrecioGananciaInput = "";
    var desperdicioVidrioInput = "";
    var baseInput = "";
    var alturaInput = "";
    var varillaSelectInput = "";
    var varillaPrecioGananciaInput = "";
    var paspartuSelectInput = "";
    var paspartuPrecioGananciaInput = "";
    var desperdicioPaspartuInput = "";
    var terminadoSelectInput = "";
    var terminadoTapaColganteSelectInput = "";
    var porcentajeTerminadoInput = "";

    function getNextSiblingInputValue(currentDivId) {
      let currentDiv = document.getElementById(currentDivId);
      if (!currentDiv) {
        console.error("Element with the provided ID not found.");
        return null;
      }
      let nextSibling = currentDiv.nextElementSibling;
      if (nextSibling && nextSibling.tagName.toLowerCase() === 'input') {
        let inputValue = nextSibling.value;
    
        if (!inputValue || inputValue.includes("N/A")) {
          return null;
        }
        return inputValue;
      } else {
        console.error("Next sibling is not an input element.");
        return null;
      }
    }

    vidrioSelectInput = document.getElementById("tipo-vidrio-select").innerText;
    vidrioPrecioGananciaInput = document.getElementById("vidrio-precio-ganancia").innerText;
    desperdicioVidrioInput = getNextSiblingInputValue("desperdicio-vidrio");
    baseInput = document.getElementById("base").value;
    alturaInput = document.getElementById("altura").value;
    varillaSelectInput = document.getElementById("tipo-varilla-select").innerText;
    varillaPrecioGananciaInput = document.getElementById("varilla-precio-ganancia").innerText;
    paspartuSelectInput = document.getElementById("tipo-paspartu-select").innerText;
    paspartuPrecioGananciaInput = document.getElementById("paspartu-precio-ganancia").innerText;
    desperdicioPaspartuInput = getNextSiblingInputValue("desperdicio-paspartu");
    porcentajeTerminadoInput = getNextSiblingInputValue("porcentaje-terminado");
    terminadoSelectInput = document.getElementById("terminado-select").innerText;
    terminadoTapaColganteSelectInput = document.getElementById("precio-terminado-tapa-colgante");
    terminadoTapaColganteSelectInput = terminadoTapaColganteSelectInput.getAttribute("value");
    
    var msgErrorVidrio = "";
    var msgErrorBase = "";
    var msgErrorAltura = "";

    resultadoDiv.innerText = "";
    errorDiv.innerText = "";
    
    if (getNextSiblingInputValue("tipo-vidrio-select") === null){
      msgErrorVidrio = "Seleccione el TIPO DE VIDRIO. ";
      errorDiv.innerHTML += msgErrorVidrio;
    }
    if ( baseInput === "" ) {
      msgErrorBase = "Ingrese BASE mayor a 0 cm. ";
      errorDiv.innerHTML += msgErrorBase;
    }
    if ( alturaInput === "" ) {
      msgErrorAltura = "Ingrese ALTURA mayor a 0 cm. ";
      errorDiv.innerHTML += msgErrorAltura;
    }

    if (getNextSiblingInputValue("tipo-varilla-select") !== null){
      varillaPrecioGananciaInput = Number(varillaPrecioGananciaInput)
    }
    if(getNextSiblingInputValue("tipo-paspartu-select") !== null){
      paspartuPrecioGananciaInput = Number(paspartuPrecioGananciaInput)
    }
    if (getNextSiblingInputValue("desperdicio-paspartu") !== null){
      desperdicioPaspartuInput = Number(desperdicioPaspartuInput)
    }

    if ( msgErrorVidrio === "" && msgErrorBase === "" && msgErrorAltura === "" ){
      let baseEnMetros = Number(baseInput) / 100;
      let alturaEnMetros = Number(alturaInput) / 100;
      let perimetroEnMetros = 2 * ( Number(baseEnMetros) +  Number(alturaEnMetros) );
      let superficieEnMetros = ( Number(baseEnMetros) *  Number(alturaEnMetros) ); 

      let precioVidrio = (superficieEnMetros * Number(vidrioPrecioGananciaInput) ) * Number(desperdicioVidrioInput);
      let precioVarilla = ( perimetroEnMetros * varillaPrecioGananciaInput );
      let precioPaspartu = ( superficieEnMetros * Number(paspartuPrecioGananciaInput) ) * Number(desperdicioPaspartuInput);
      let precioTerminado = Number(porcentajeTerminadoInput);
      let precioTapaColganteSelectInput = ( baseEnMetros * alturaEnMetros ) * Number(terminadoTapaColganteSelectInput);
      
      console.log("precioVidrio: "+precioVidrio)
      console.log("precioVarilla: "+precioVarilla)
      console.log("precioPaspartu: "+precioPaspartu)
      console.log("terminadoTapaColganteSelectInput: "+terminadoTapaColganteSelectInput)
      console.log("terminado: "+terminadoSelectInput)
      console.log("precioTerminado: "+precioTerminado)
      let precioFinal = Math.round( ( precioVidrio + precioVarilla + precioPaspartu + precioTapaColganteSelectInput ) * precioTerminado );
      console.log("precioFinal: "+precioFinal)

      msgOK = "Precio por '"+vidrioSelectInput+"' de "+ baseInput+"cm x "+alturaInput+"cm. ";
      //VARILLA
      if( getNextSiblingInputValue("tipo-varilla-select") ) {
        msgOK += "Varilla: '"+varillaSelectInput+"'. ";
      }else{
        msgOK += "";
      }
      //PASPARTU
      if( getNextSiblingInputValue("tipo-paspartu-select") ) {
        msgOK += "Paspartu: '"+paspartuSelectInput+"'. ";
      }else{
        msgOK += "";
      }
      //TERMINADO
      if( terminadoSelectInput === "Cortado" || terminadoSelectInput === "Pulido" || terminadoSelectInput === "Colocado" ) {
        msgOK += "Terminado: '"+terminadoSelectInput+"'. ";
      }else{
        msgOK += "Terminado: N/A. ";
      }

      msgOK += "Total: $"+precioFinal+".";
      resultadoDiv.innerHTML += msgOK;
    }
  };

  const handleSendToWhatsApp = () => {
    const phoneNumber = document.getElementById("phoneValue").value;
    if (!phoneNumber) {
      alert("Ingrese un número de teléfono.");
      return;
    }
    const encodeMsg0 = encodeURIComponent("🪟 *Robert Glass* - Taller de enmarcado, vidrios y espejos");
    const encodeMsg1 = encodeURIComponent("📍 Virrey Aviles 2718 - Av. Francisco Beiró 3091 (CABA). Horario de atención: Lunes a Viernes: 10 a 13hs y 15 a 19hs. Sábados: 10 a 13hs. https://maps.app.goo.gl/7cw7xh1KLGmFYicf9");
    const presupuestoDetalle = document.getElementsByClassName("MuiAlert-message")[1]?.innerText || '';
    const encodeMsg2 = encodeURIComponent("📱 1157690193");
    const encodeMsg3 = encodeURIComponent("💲*Presupuesto:* ");
    const encodeMsg4 = encodeURIComponent(presupuestoDetalle);
    const mensajeAEnviar = `${encodeMsg0}%0a${encodeMsg1}%0a${encodeMsg2}%0a%0a${encodeMsg3}%0a${encodeMsg4}%0a`;
    // AGREGAR FOTO 
    // AGREGAR ENLACE GOOGLE
    // https://maps.app.goo.gl/7cw7xh1KLGmFYicf9
    const formattedPhoneNumber = `54${phoneNumber}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${mensajeAEnviar}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <Fragment>
      <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1, 1fr)', backgroundColor: bkg1 }}>
        <Item>
          <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: {
            xs: "repeat(1, 1fr)", // 1 column on extra small screens
            sm: "repeat(1, 1fr)", // 2 columns on small screens
            md: "repeat(2, 1fr)", // 3 columns on medium screens
            lg: "repeat(4, 1fr)", // 4 columns on large screens
          }, backgroundColor: '#fff', borderRadius: 2, p:2, margin: 'auto', width: 'auto' }}>
            <Item>
              <TipoVidrioFormControl
                id="tipo-vidrio-select"
                label="Tipo Vidrio"
                value={selectedTipoVidrio}
                onChange={handleSelectTipoVidrio} // Propagate changes to parent
                helperText={{
                  precioLista: "100.00",
                  precioGanancia: "120.00",
                }}
              />
            </Item>
            <Item>
              <DesperdicioVidrioFormControl
                value={selectedDespVidrio}
                onChange={handleSelectDespVidrioChange}
              />
            </Item>
            <Item>
              <BaseInputFormControl
                value={baseValue}
                onChange={handleBaseChange}
                helperText="Por favor, ingrese la base en cm."
              />
            </Item>
            <Item>
              <AlturaInputFormControl
                value={alturaValue}
                onChange={handleAlturaChange}
                helperText="Por favor, ingrese la altura en cm."
              />
            </Item>
          </Box>

          <Box sx={{ display: 'grid', gap: 1,gridTemplateColumns: 'repeat(3, 1fr)'}}>
            <Item>
              <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(1, 0.75fr)' ,backgroundColor: bkg1}}>
                <Item>
                  <FormGroup>
                    <TipoVarillaFormControl
                      id="tipo-varilla-select"
                      label="Tipo Varilla"
                      value={selectedTipoVarilla}
                      onChange={handleSelectTipoVarilla}
                      helperText={{
                        precioLista: "100.00",
                        precioGanancia: "120.00",
                      }}
                      additionalMenuItems={[
                        {},
                      ]}
                    />
                  </FormGroup>
                </Item>
              </Box>
            </Item>
            
            <Item>
              <Box sx={{ display: 'grid', gap: 1, gridTemplateRows: 'repeat(1, 0.75fr)' ,backgroundColor: bkg1}}>
                <Item>
                  <FormGroup>
                    <TipoPaspartuFormControl
                      id="tipo-paspartu-select"
                      label="Tipo Paspartu"
                      value={selectedTipoPaspartu}
                      onChange={handleSelectTipoPaspartu}
                      helperText={{
                        precioLista: "100.00", // Puedes cambiarlo dinámicamente si es necesario
                        precioGanancia: "120.00",
                      }}
                      additionalMenuItems={[
                        {},
                      ]}
                    />
                    <DesperdicioPaspartuFormControl
                      value={selectedDespPaspartu}
                      onChange={handleSelectDespPaspartuChange}
                    />

                  </FormGroup>
                </Item>
              </Box>
            </Item>
                
            <Item>
              <Box sx={{ display: 'grid', gap: 1, gridTemplateRows: 'repeat(3, 1fr)'}}>
                <Item>
                  <TerminadoFormControl
                    id="terminado-select"
                    label="Seleccione un terminado"
                    value={selectTerminado}
                    onChange={handleSelectTerminado}
                    helperText={`${selectTerminado}`}
                    additionalMenuItems={[
                      {},
                    ]}
                  />
                </Item>
                <Item>
                  <PorcentajeTerminadoFormControl
                    value={selectedPorcentajeTerminado}
                    onChange={handleSelectPorcentajeTerminadoChange}
                  />
                </Item>
                <Item>
                  <Button variant="contained" onClick={handleShowPrice} sx={{ m: 0, width: '100%' }}>Mostrar precio</Button>
                </Item>
              </Box>
            </Item>
          </Box>
          
          <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1, 1fr)' }}>
            <Item>
              <Alert id="errorContainer" variant="outlined" severity="error" sx={{ m: 1, width: 'auto' }}>
                <p id="error"></p>
              </Alert>
              <Alert id="resultadoContainer" variant="outlined" severity="success" size="lg" sx={{ m: 1, width: 'auto' }}>
                <p id="resultado"></p>
              </Alert>
            </Item>
          </Box>

          <Box id="enviarWABox" sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Item>    
              <input 
                id="phoneValue" 
                type="tel" 
                placeholder="Ejemplo: 1143214321" 
                style={{
                  width: "-webkit-fill-available", padding: "20px 15px", 
                  margin: "0", border: "1px solid #ccc", borderRadius: "4px", fontSize: "0.875rem"
                }}
              />
            </Item>
            <Item>    
              <Button 
                id="enviarWA" 
                onClick={handleSendToWhatsApp} 
                variant="contained" 
                sx={{ m: 0, p:1.5, backgroundColor: "#008069", width: '100%' }}
              >
                Enviar por WhatsApp
              </Button>
            </Item>
          </Box>

        </Item>
      </Box>          
    </Fragment>
  );
};

export default ShowFrameTable;