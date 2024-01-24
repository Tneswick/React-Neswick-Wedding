const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/submitRSVP', async (req, res) => {
  const apiKey = 'AIzaSyDeQt4Jsmh5PQRh32u2oUWsBCUeZRF_F94'; // Replace with your API key
  const sheetApiUrl = 'https://script.google.com/macros/s/AKfycbxKFPAhwmD1384JBjNMDHLfyBE9lklobV5G145CuptV9frBiWwKgykAk9sKHg1zBX7y/exec'; // Replace with the deployed web app URL

  const data = req.body;

  try {
    const response = await fetch(`${sheetApiUrl}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('RSVP submitted successfully');
      res.status(200).json({ success: true });
    } else {
      console.error('Error submitting RSVP');
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
