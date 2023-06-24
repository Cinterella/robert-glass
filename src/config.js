module.exports = global.config = {
    credentials: {
        apiKey: "AIzaSyDOiY3PhAPrG00y5QCRtdRfFLjbMUZW2ic",
        spreadsheetId: "1DXwF8K0KhdUe6tDM8ZzIHkS_CUcdP-Lomj5eTIw_oxE",
        ranges: {
            total: "lista!A2:P200",
            vidrios: "vidrieria!A2:C50",
            terminado: "lista!A2:E5",
            vidriosCuadro: "cuadros!A2:C50",
            terminadoCuadro: "cuadros!A2:E50",
            varillas: "lista!A2:G12",
            paspartu: "lista!A2:I12"
        }
        
    },
    alerts: {
        getGlassPriceAlert: false
    },
    widths: {
        input: '100%',
        alert: '80%'
    },
    colors: {
        wa: "d6d6d6"
    }

    //const APIKEY = "AIzaSyDOiY3PhAPrG00y5QCRtdRfFLjbMUZW2ic";
    //const SPREADSHEET_ID = "1DXwF8K0KhdUe6tDM8ZzIHkS_CUcdP-Lomj5eTIw_oxE";
    //const RANGE = "vidrieria!A2:B40";
    //const RANGE = "vidrieria!C2:D10";


};
