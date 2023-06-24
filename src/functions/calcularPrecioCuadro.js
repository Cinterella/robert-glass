function calcularPrecioCuadro () {
    let MATERIAL_SELECCIONADO = document.getElementById('selTipoVidSelCuadro').innerText;
    let VALUE_TIPOVID_INNER = document.getElementById('tipoVid').innerText;
    let VALUE_TIPOVID = Number(document.getElementById('tipoVid').innerText);
    let VALUE_TIPOVARILLA = document.getElementById('selTipoVarillaSel').innerText;
    let VALUE_TIPOPASPARTU = document.getElementById('selTipoPaspartuSel').innerText;
    let VALUE_TERMINADO = Number(document.getElementById('terminacion-cuadros').value);
    //let VALUE_SELTERMINADO = document.getElementById('selTerminado').innerText;
    let VALUE_BASE = Number(document.getElementById('base-vidrio').value);
    let VALUE_ALTURA = Number(document.getElementById('altura-vidrio').value);

    let VALUE_DESPERDICIO_VIDRIO = Number(document.getElementById('desperdicio-vidrio').value);
    let VALUE_DESPERDICIO_VARILLA = Number(document.getElementById('desperdicio-varilla').value);
    let VALUE_DESPERDICIO_PASPARTU = Number(document.getElementById('desperdicio-paspartu').value);
    let VALUE_GANANCIA = Number(document.getElementById('ganancia-cuadros').value);
    let RESULTADO = '';
    window.presupuesto = '';
   
    //console.log(typeof MATERIAL_SELECCIONADO, MATERIAL_SELECCIONADO, "MATERIAL_SELECCIONADO")
    console.log(typeof VALUE_TIPOVID, VALUE_TIPOVID, "VALUE_TIPOVID")
    console.log(typeof VALUE_TIPOVID_INNER, VALUE_TIPOVID_INNER, "VALUE_TIPOVID_INNER")
    console.log(typeof VALUE_TERMINADO, VALUE_TERMINADO, "VALUE_TERMINADO")

    console.log(typeof VALUE_BASE, VALUE_BASE, "VALUE_BASE")
    console.log(typeof VALUE_ALTURA, VALUE_ALTURA, "VALUE_ALTURA")

    console.log(typeof VALUE_DESPERDICIO_VIDRIO, VALUE_DESPERDICIO_VIDRIO, "VALUE_DESPERDICIO_VIDRIO")
    console.log(typeof VALUE_GANANCIA, VALUE_GANANCIA, "VALUE_GANANCIA")

    console.log(typeof VALUE_TIPOPASPARTU, VALUE_TIPOPASPARTU, "VALUE_TIPOPASPARTU")
    console.log("--------------------------")
 
    

    if ( VALUE_TIPOVID === "" || VALUE_TIPOVID == "0") {
      document.getElementById("error-cuadro-vidrio").style.display = "none";
      document.getElementById("error-cuadro-vidrio").parentElement.style.display = "none";
      document.getElementById("resultado-cuadro").style.display = "flex";
    } else {      
      document.getElementById("error-cuadro-vidrio").style.display = "flex";
      document.getElementById("error-cuadro-vidrio").parentElement.style.display = "flex";
      document.getElementById("resultado-cuadro").style.display = "none";
    }


    //if ( VALUE_BASE <= 0 || isNaN(VALUE_BASE) || VALUE_ALTURA <= 0 || isNaN(VALUE_ALTURA) || VALUE_TIPOVID <= 0 || isNaN(VALUE_TIPOVID) ) {
      //document.getElementById("resultado-cuadro").style.display = "none";
      //document.getElementById("error-cuadro").style.display = "flex";
      //document.getElementById("error-cuadro").parentElement.style.display = "flex";

    //}else{
      /* if (VALUE_TERMINADO === '' || VALUE_TERMINADO <= 0) {
        VALUE_TERMINADO = Number(0);
      }

      VALUE_DESPERDICIO_VIDRIO = ( Number(VALUE_DESPERDICIO_VIDRIO) / Number(100) )+1;
      if (VALUE_DESPERDICIO_VIDRIO === '') {
        VALUE_DESPERDICIO_VIDRIO = Number(0);
      }

      VALUE_DESPERDICIO_VARILLA = ( Number(VALUE_DESPERDICIO_VARILLA) / Number(100) )+1;
      if (VALUE_DESPERDICIO_VARILLA === '') {
        VALUE_DESPERDICIO_VARILLA = Number(0);
      }

      VALUE_DESPERDICIO_PASPARTU = ( Number(VALUE_DESPERDICIO_PASPARTU) / Number(100) )+1;
      if (VALUE_DESPERDICIO_PASPARTU === '') {
        VALUE_DESPERDICIO_PASPARTU = Number(0);
      }
              
      VALUE_GANANCIA = ( Number(VALUE_GANANCIA) / Number(100) )+1;
      if (VALUE_GANANCIA === '') {
        VALUE_GANANCIA = Number(0);
      }

      if (VALUE_TIPOPASPARTU == 0 ) {
        VALUE_TIPOPASPARTU = 'N/A';
        console.log(VALUE_TIPOPASPARTU)
      }

      RESULTADO = [ ( VALUE_BASE * VALUE_ALTURA * VALUE_TIPOVID * VALUE_DESPERDICIO_VIDRIO ) + "VALUE_TERMINADO" ] * VALUE_GANANCIA;
      RESULTADO = RESULTADO.toFixed(2);

      document.getElementById("error-cuadro").parentElement.style.display = "none";         */
      //document.getElementById("resultado-cuadro").lastChild.innerHTML = 
      //"Precio de cuadro con vidrio tipo <strong>\""+ MATERIAL_SELECCIONADO +"\""+"</strong> de <strong>"+ VALUE_BASE+"m de Ancho</strong> por <strong>"+ VALUE_ALTURA+"m de Alto.</strong>, con material de Varilla tipo:<strong>"+VALUE_TIPOVARILLA+"</strong> y paspartú tipo:<strong>"+VALUE_TIPOPASPARTU+"</strong>.<div class='resultado'>$" + RESULTADO+"</div>";
      //document.getElementById("resultado-cuadro").style.display = "flex";
      //document.getElementById("enviarWABox").style.display = "flex";
      //window.presupuesto = "Precio por *"+ MATERIAL_SELECCIONADO + "VALUE_SELTERMINADO" + "* de *"+ VALUE_BASE+"m de Ancho* por *"+ VALUE_ALTURA+"m de Alto*: *$" + RESULTADO+"*.";
    //}
}

export default calcularPrecioCuadro;