function calcularPrecio () {
    let MATERIAL_SELECCIONADO = document.getElementById('selTipoVidSel').innerText;
    let VALUE_TIPOVID = Number(document.getElementById('tipoVid').innerText);
    let VALUE_TERMINADO = Number(document.getElementById('terminado').innerText);
    let VALUE_SELTERMINADO = document.getElementById('selTerminado').innerText;
    let VALUE_BASE = Number(document.getElementById('base').value);
    let VALUE_ALTURA = Number(document.getElementById('altura').value);

    let VALUE_DESPERDICIO = Number(document.getElementById('desperdicio').value);
    let VALUE_GANANCIA = Number(document.getElementById('ganancia').value);
    let RESULTADO = '';
    window.presupuesto = '';
/*     
    console.log(typeof MATERIAL_SELECCIONADO, MATERIAL_SELECCIONADO)
    console.log(typeof VALUE_TIPOVID, VALUE_TIPOVID)
    console.log(typeof VALUE_TERMINADO, VALUE_TERMINADO)

    console.log(typeof VALUE_BASE, VALUE_BASE)
    console.log(typeof VALUE_ALTURA, VALUE_ALTURA)

    console.log(typeof VALUE_DESPERDICIO, VALUE_DESPERDICIO)
    console.log(typeof VALUE_GANANCIA, VALUE_GANANCIA)
 */

    if ( VALUE_BASE <= 0 || isNaN(VALUE_BASE) || VALUE_ALTURA <= 0 || isNaN(VALUE_ALTURA) || VALUE_TIPOVID <= 0 || isNaN(VALUE_TIPOVID) ) {
      document.getElementById("resultado").style.display = "none";
      document.getElementById("error").style.display = "flex";
      document.getElementById("error").parentElement.style.display = "flex";

    }else{
      if (VALUE_TERMINADO === '' || VALUE_TERMINADO <= 0) {
        VALUE_TERMINADO = Number(0);
      }

      VALUE_DESPERDICIO = ( Number(VALUE_DESPERDICIO) / Number(100) )+1;
      if (VALUE_DESPERDICIO === '') {
        VALUE_DESPERDICIO = Number(0);
      }
              
      VALUE_GANANCIA = ( Number(VALUE_GANANCIA) / Number(100) )+1;
      if (VALUE_GANANCIA === '') {
        VALUE_GANANCIA = Number(0);
      }

      if (VALUE_SELTERMINADO === 'N/A' ) {
        VALUE_SELTERMINADO = '';
      }else{
        VALUE_SELTERMINADO = ', '+VALUE_SELTERMINADO;
      }

      RESULTADO = [ ( VALUE_BASE * VALUE_ALTURA * VALUE_TIPOVID * VALUE_DESPERDICIO ) + VALUE_TERMINADO ] * VALUE_GANANCIA;
      RESULTADO = RESULTADO.toFixed(2);

      document.getElementById("error").parentElement.style.display = "none";        
      document.getElementById("resultado").lastChild.innerHTML = 
      "Precio por <strong>\""+ MATERIAL_SELECCIONADO +"\""+VALUE_SELTERMINADO+"</strong> de <strong>"+ VALUE_BASE+"m de Ancho</strong> por <strong>"+ VALUE_ALTURA+"m de Alto</strong><strong></strong>.<div class='resultado'>$" + RESULTADO+"</div>";
      document.getElementById("resultado").style.display = "flex";
      document.getElementById("enviarWABox").style.display = "flex";
      window.presupuesto = "Precio por *"+ MATERIAL_SELECCIONADO + VALUE_SELTERMINADO + "* de *"+ VALUE_BASE+"m de Ancho* por *"+ VALUE_ALTURA+"m de Alto* :*$" + RESULTADO+"*.";
    }
}

export default calcularPrecio;