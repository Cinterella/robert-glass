module.exports = global.config = {
    credentials: {
        apiKey: "AIzaSyDOiY3PhAPrG00y5QCRtdRfFLjbMUZW2ic",
        spreadsheetId: "1DXwF8K0KhdUe6tDM8ZzIHkS_CUcdP-Lomj5eTIw_oxE",
        ranges: {
            total: "lista!A2:P200",
            vidrios: "lista!A2:C24",
            terminado: "lista!A2:E5",
            porcTerminado: "lista!A2:E12",
            varillas: "lista!A2:G91",
            paspartu: "lista!A2:I17"
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
        wa: "#d6d6d6",
        textfield: "#d6d6d6",
        bkg1: "#F2F2F2",
        bkg2: "#d6e8bc",
        bkg3: "#eeeeee"
    }

    //const APIKEY = "AIzaSyDOiY3PhAPrG00y5QCRtdRfFLjbMUZW2ic";
    //const SPREADSHEET_ID = "1DXwF8K0KhdUe6tDM8ZzIHkS_CUcdP-Lomj5eTIw_oxE";
    //const RANGE = "vidrieria!A2:B40";
    //const RANGE = "vidrieria!C2:D10";


};
