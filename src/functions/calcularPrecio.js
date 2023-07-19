export function calcularPrecio( selectedOption, selectTerminado, selectedPorcTerminado, selectedDespVidrio, VarillaisChecked, PaspartuisChecked, selectedDespVarilla, selectedDespPaspartu, selectedGanancia ) {
//const calcularPrecio = () => {
  document.getElementById("message").innerHTML = "";
  window.empty1 = "<span class=\"notranslate\">​</span>";
  window.empty2 = "<span class=\"notranslate\">&ZeroWidthSpace;​</span>";
  window.mensajeError = "";
  window.presupuesto = "";

  let dimensionsOK = false;
  let terminadoOK = false;
  let terminadoPorcOK = false;
  let terminadoPorcDespOK = false;
  let vidrioOK = false;
  let vidrioPorcOK = false;
  let vidrioDespOK = false;
  let varillaOK = false;
  let paspartuOK = false;
  let gananciaOK = false;

  let mensajeVARILLA = "";
  let mensajePASPARTU = "";
  let mensajePRESUPUESTO = "";
  let mensajeGANANCIA = "";

  let VALUE_BASE = Number(document.getElementById('base').value);
  let VALUE_ALTURA = Number(document.getElementById('altura').value);
  let VALUE_TIPOVID = Number(document.getElementById('tipoVid').innerText);
  let VALUE_TIPO_VARILLA = Number(document.getElementById('tipoVarilla').innerText);
  let TIPOVARILLA = document.getElementById('selTipoVarillaSel').innerText;
  let VALUE_TIPO_PASPARTU = Number(document.getElementById('tipoPaspartu').innerText);
  let TIPOPASPARTU = document.getElementById('selTipoPaspartuSel').innerText;
  let PRECIO_POR_VARILLA = 0;
  let PRECIO_POR_PASPARTU = 0;
  let RESULTADO = 0;

  document.getElementById("error").style.display = "none";

  //console.log(selectedOption, VALUE_BASE, VALUE_ALTURA, selectTerminado, selectedPorcTerminado, selectedDespVidrio, VarillaisChecked, PaspartuisChecked, selectedDespVarilla, selectedDespPaspartu, selectedGanancia); // Output: 'Hello from File1!'

  if ( VALUE_BASE <= 0 || isNaN(VALUE_BASE) || VALUE_ALTURA <= 0 || isNaN(VALUE_ALTURA) || selectedOption === "" || selectedOption === "00000-N/A-0"){
    document.getElementById("error").style.display = "flex";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("enviarWABox").style.display = "none";
    document.getElementById("message").innerHTML += "Debe seleccionar un <strong>TIPO</strong> de vidrio, valor de <strong>BASE</strong> y <strong>ALTURA</strong> válidos para poder realizar el cálculo.";
    dimensionsOK = false;
  }else{
    dimensionsOK = true;

    if( selectTerminado === '' || selectTerminado === window.empty1 || selectTerminado === window.empty2 ){
      document.getElementById("error").style.display = "flex";
      document.getElementById("resultado").style.display = "none";
      document.getElementById("enviarWABox").style.display = "none";
      document.getElementById("message").innerHTML += "Debe seleccionar tipo de TERMINADO<br>";
      terminadoOK = false;
    }else{
      terminadoOK = true;
    }

    if( selectedPorcTerminado === '' || selectedPorcTerminado === window.empty1 || selectedPorcTerminado === window.empty2 ){
      document.getElementById("error").style.display = "flex";
      document.getElementById("resultado").style.display = "none";
      document.getElementById("enviarWABox").style.display = "none";
      document.getElementById("message").innerHTML += "Selecciones PORCENTAJE DE TERMINADO<br>";
      terminadoPorcOK = false;
    }else{
      terminadoPorcOK = true;
    }

    if( selectedDespVidrio === '' || selectedDespVidrio === window.empty1 || selectedDespVidrio === window.empty2 ){
      document.getElementById("error").style.display = "flex";
      document.getElementById("resultado").style.display = "none";
      document.getElementById("enviarWABox").style.display = "none";
      document.getElementById("message").innerHTML += "Selecciones porcentaje de DESPERDICIO DE VIDRIO<br>";
      terminadoPorcDespOK = false;
    }else{
      terminadoPorcDespOK = true;
    }

    if(dimensionsOK && terminadoOK && terminadoPorcOK && terminadoPorcDespOK){
      RESULTADO = [ [ ( VALUE_BASE * VALUE_ALTURA ) * VALUE_TIPOVID ] * selectedPorcTerminado ] * selectedDespVidrio;
      console.log("RESULTADO " + RESULTADO)
    }

    let MATERIAL_SELECCIONADO = document.getElementById('selTipoVidSel').innerText;
    let TERMINADO_SELECCIONADO = document.getElementById('selTerminado').innerText;
    let VARILLA_SELECCIONADO = document.getElementById('selTipoVarillaSel').innerText;
    let PASPARTU_SELECCIONADO = document.getElementById('selTipoPaspartuSel').innerText;

    if(VarillaisChecked){
      if (VALUE_TIPO_VARILLA === "" || selectedDespVarilla === "" || selectedDespVarilla === window.empty2) {
        document.getElementById("error").style.display = "flex";
        document.getElementsByClassName("varillas")[0].innerHTML = "Debe seleccionar un <strong>TIPO DE VARILLAS</strong> y su PORCENTAJE DE DESPERDICIO.<br>";
        varillaOK = false;
      }else{
        PRECIO_POR_VARILLA = [ ( (VALUE_BASE + VALUE_ALTURA ) * 2 ) * VALUE_TIPO_VARILLA ] * selectedDespVarilla;
        console.log("PRECIO_POR_VARILLA: "+PRECIO_POR_VARILLA);
        RESULTADO = RESULTADO + (PRECIO_POR_VARILLA);
        console.log("RESULTADO mas varilla " + RESULTADO)
        document.getElementsByClassName("varillas")[0].innerHTML = "";
      }
    }else{ 
      VARILLA_SELECCIONADO = "N/A";
      document.getElementsByClassName("varillas")[0].innerHTML = "";
    }



    if(PaspartuisChecked){
      if (VALUE_TIPO_PASPARTU === "" || selectedDespPaspartu === "" || selectedDespPaspartu === window.empty2) {
        document.getElementById("error").style.display = "flex";
        document.getElementsByClassName("paspartu")[0].innerHTML = 'Debe seleccionar un <strong>TIPO DE PASPARTÚ</strong> y su porcentaje de desperdicio.';
        paspartuOK = false;
      }else{
        PRECIO_POR_PASPARTU = [ ( VALUE_BASE * VALUE_ALTURA ) * VALUE_TIPO_PASPARTU ] * selectedDespPaspartu;
        console.log("PRECIO_POR_PASPARTU: "+ PRECIO_POR_PASPARTU);
        RESULTADO = RESULTADO + (PRECIO_POR_PASPARTU);
        console.log("RESULTADO mas paspartu " + RESULTADO)

        document.getElementsByClassName("paspartu")[0].innerHTML = "";
      }
    }else{ 
      PASPARTU_SELECCIONADO = "N/A";
      document.getElementsByClassName("paspartu")[0].innerHTML = "";
      //paspartuOK = true;
    }



    if( selectedGanancia === '' || selectedGanancia === window.empty1 || selectedGanancia === window.empty2 ){
      document.getElementById("error").style.display = "flex";
      document.getElementById("enviarWABox").style.display = "none";
      document.getElementById("message").innerHTML += "Seleccione un porcentaje de GANANCIA.<br>";
      //gananciaOK = false;
    }else{
      document.getElementById("error").style.display = "flex";
      if(RESULTADO > 0) {
        document.getElementById("resultado").style.display = "flex";
        document.getElementById("error").style.display = "none";
        RESULTADO = RESULTADO * selectedGanancia;
        RESULTADO = RESULTADO.toFixed(2);
        //selTipoVidSel
        document.getElementById("resultado").lastChild.innerHTML = "Precio por " + MATERIAL_SELECCIONADO +" de "+VALUE_BASE + "x"+ VALUE_ALTURA + "mts. (Tipo de terminado: " + TERMINADO_SELECCIONADO + ", Varilla: " + VARILLA_SELECCIONADO +", Paspartú: "+ PASPARTU_SELECCIONADO + "): " + "<div class='resultado'>$"+RESULTADO+"</div>";
        //document.getElementById("resultado").lastChild.innerHTML = "Precio por " + MATERIAL_SELECCIONADO +" de "+VALUE_BASE + "x"+ VALUE_ALTURA + "mts. (Tipo de terminado: " + TERMINADO_SELECCIONADO + ", Varilla: " + VARILLA_SELECCIONADO +", Paspartú: "+ PASPARTU_SELECCIONADO + "): " + "<div class='resultado'>$"+RESULTADO+"</div>";
        window.presupuesto = "Precio por " + MATERIAL_SELECCIONADO +" de "+VALUE_BASE + "x"+ VALUE_ALTURA + "mts. (Tipo de terminado: " + TERMINADO_SELECCIONADO + ", Varilla: " + VARILLA_SELECCIONADO +", Paspartú: "+ PASPARTU_SELECCIONADO + "): $"+RESULTADO;
        
        document.getElementById("enviarWABox").style.display = "flex";

        window.encodeMsg0 = encodeURIComponent("🪟 *Robert Glass* - Taller de enmarcado, vidrios y espejos");
        window.encodeMsg1 = encodeURIComponent("📍 Virrey Aviles 2718 - Av. Francisco Beiró 3091 (CABA)");
        window.encodeMsg2 = encodeURIComponent("✅ " + window.presupuesto);
        window.mensajeAEnviar = window.encodeMsg0+"%0a"+window.encodeMsg1+"%0a%0a"+window.encodeMsg2+"%0a";
        
      }
    }
  

  }
}