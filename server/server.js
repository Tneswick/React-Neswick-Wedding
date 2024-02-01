const express = require('express');
const { google } = require('googleapis');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Read environment variables
// const apiKey = process.env.API_KEY;
const spreadsheetId = process.env.SHEET_ID;

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];


// Ensure that API key and spreadsheet ID are set
if (/*!apiKey || */!spreadsheetId) {
  console.log(/*apiKey, */spreadsheetId)
  console.error('Please set the API_KEY and SHEET_ID environment variables.');
  process.exit(1);
}

const client = new google.auth.JWT(
  process.env.CLIENT_EMAIL,
  null,
  process.env.CLIENT_KEY.replace(/\\n/g, '\n'),
  SCOPES
)

app.use(async (req, res, next) => {
  // UPDATE .env FILE WITH FULL CLIENT_KEY

  try {
    const client = new google.auth.JWT(
      process.env.CLIENT_EMAIL,
      null,
      process.env.CLIENT_KEY.replace(/\\n/g, '\n'),
      SCOPES
    );

    // Set the client as a property on the request for later use
    req.googleSheetsClient = client;

    // Authenticate the client
    await client.authorize();

    next();
  } catch (error) {
    console.error('Error authenticating Google Sheets client:', error);
    console.log('ERROR 1');
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

  // USE INSOMNIA TO TEST POST ENDPOINT AND GET ENDPOINT. VALIDATE INVITECODE ASK CHATGPT

// GET endpoint to pull down data from the spreadsheet
app.get('/read-sheet', async (req, res) => {
  const sheets = google.sheets({ version: 'v4', auth: req.googleSheetsClient });

  try {
    // Make a request to read data from the spreadsheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A1:E160',
    });

    const values = response.data.values;

    res.json(values);
  } catch (error) {
    console.error('Error reading spreadsheet data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
