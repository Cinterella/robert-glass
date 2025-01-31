module.exports = global.config = {
    credentials: {
        spreadsheetId : process.env.SPREADSHEET_ID,
        apiKey : process.env.GOOGLE_API_KEY,
        ranges: {
            total: "lista!A2:P150",
            vidrios: "lista!A2:G24",
            terminado: "lista!E2:F5",
            porcTerminado: "lista!A2:E12",
            varillas: "lista!G2:I30",
            paspartu: "lista!J2:L17"
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
};
