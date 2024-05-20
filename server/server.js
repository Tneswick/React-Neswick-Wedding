const express = require('express');
const { google } = require('googleapis');
const dotenv = require('dotenv');
const moment = require('moment');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// CLIENT FOR THE SERVER ============================================================================<
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));


// Read environment variables
const spreadsheetId = process.env.SHEET_ID;

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

// Validate environment variables
if (!spreadsheetId) {
  console.log(spreadsheetId)
  console.error('Problem with enviroment variables. Check .env file.');
  process.exit(1);
}

app.use(express.json());

app.use(async (req, res, next) => {
  

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
    console.log('ERROR 1', error.message);
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

    // Format data as an array of objects with key-value pairs
    const headers = values[0];
    const formattedData = values.slice(1).map(row => {
      const rowData = {};
      headers.forEach((header, index) => {
        rowData[header] = row[index] || null;
      });
      return rowData;
    });

    res.json(formattedData);
  } catch (error) {
    console.error('Error reading spreadsheet data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST endpoint to write data to the spreadsheet
app.post('/update', async (req, res) => {
  const sheets = google.sheets({ version: 'v4', auth: req.googleSheetsClient });

  const inviteCodeToUpdate = req.body.inviteCode;
  const newAttendanceValue = req.body.newAttendance;
  console.log('inviteCodeToUpdate:', inviteCodeToUpdate, 'newAttendanceValue', newAttendanceValue)

  if (inviteCodeToUpdate === undefined || inviteCodeToUpdate === null || newAttendanceValue === undefined || newAttendanceValue === null) {
    res.status(400).json({ error: 'Missing parameters.' });
    console.log('Missing parameters error: ', req.body.inviteCode, req.body.newAttendance);
    return;
  }

  try {
    // Make a request to read data from the spreadsheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A1:E160',
    });

    const values = response.data.values;
    const headers = values[0];

    // Find the row index based on the invite code
    const rowIndexToUpdate = values.findIndex(row => row[headers.indexOf('inviteCode')] === inviteCodeToUpdate);

    if (rowIndexToUpdate === -1) {
      res.status(404).json({ error: 'Invite code not found. Please check that what you typed is correct.' });
      return;
    }

    // Get the current date and time
    const dateTime = moment().utcOffset(-7); // UTC-7 for Pacific Time
    const currentDateTime = dateTime.format('hh:mma MM/DD/YYYY')

    // Update the attendance and timestamp values in the corresponding row
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Sheet1!C${rowIndexToUpdate + 1}:D${rowIndexToUpdate + 1}`, // Adding 2 because sheets are 1-indexed, and we skip the header row
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[currentDateTime, newAttendanceValue]],
      },
    });

    res.json({ success: true, message: `Attendance for invite code ${req.body.inviteCode} updated!` });
  } catch (error) {
    console.error('Error updating attendance and timestamp:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// CATCHALL FOR GET REQUESTS OTHER THAN ABOVE - RETURN REACT APP ===============================================<
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
