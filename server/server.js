const express = require('express');
const { google } = require('googleapis');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Read environment variables
// const apiKey = process.env.API_KEY;
const spreadsheetId = process.env.SHEET_ID;
const 

// Ensure that API key and spreadsheet ID are set
if (/*!apiKey || */!spreadsheetId) {
  console.log(/*apiKey, */spreadsheetId)
  console.error('Please set the API_KEY and SHEET_ID environment variables.');
  process.exit(1);
}

const client = new google.auth.JWT(

)

// Google Sheets API setup
const sheets = google.sheets({
  version: 'v4',
  auth: apiKey, // Using API key for authentication
});

app.use(express.json());

// POST endpoint to edit a specific cell
app.post('/RSVP', async (req, res) => {
  try {
    const { row, inviteCode, newValue } = req.body;

    // TODO: Implement validation for inviteCode



    // USE INSOMNIA TO TEST POST ENDPOINT AND GET ENDPOINT. VALIDATE INVITECODE ASK CHATGPT




    const response = await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Sheet1!${row}`, // Update with your actual sheet name and range
      valueInputOption: 'RAW',
      resource: {
        values: [[newValue]],
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET endpoint to pull down data from the spreadsheet
app.get('/getData', async (req, res) => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1', // Update with your actual sheet name
    });

    const values = response.data.values;

    // Assuming the first row contains headers
    const headers = values[0];

    const data = values.slice(1).map(row => {
      const rowData = {};
      headers.forEach((header, index) => {
        rowData[header] = row[index];
      });
      return rowData;
    });

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
