// netlify/functions/fetchSheetData.js
const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const { range } = event.queryStringParameters;

    // Environment variables for API credentials
    const APIKEY = process.env.GOOGLE_API_KEY;
    const SPREADSHEETID = process.env.SPREADSHEET_ID;

    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEETID}/values/${range}?key=${APIKEY}`
    );

    if (!response.data) {
      throw new Error('Failed to fetch data from the spreadsheet.');
    }

    const transformedData = response.data.values.map((row) => ({
      KEY: row[0],
      TIPOVIDRIO: row[1],
      PRECIOVIDRIO: row[2],
      PRECIOVIDRIOGANANCIA: row[3],
      TIPOTERMINADO: row[4],
      PRECIOTERMINADO: row[5],
      TIPOVARILLA: row[6],
      PRECIOVARILLA: row[7],
      PRECIOVARILLAGANANCIA: row[8],
      TIPOPASPARTU: row[9],
      PRECIOPASPARTU: row[10],
      PRECIOPASPARTUGANANCIA: row[11],
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(transformedData),
    };
  } catch (error) {
    console.error('Error fetching data from spreadsheet:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data from the spreadsheet.' }),
    };
  }
};