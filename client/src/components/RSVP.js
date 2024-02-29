// Rsvp.js
import React, { useState } from 'react';

function Rsvp() {
  const [inviteCode, setInviteCode] = useState('');
  const [attendance, setAttendance] = useState('');

  const handleInviteCode = (event) => {
    setInviteCode(event.target.value);
  };

  const handleAttendanceChange = (event) => {
    setAttendance(event.target.value);
  };

  // https://script.google.com/macros/s/AKfycbxKFPAhwmD1384JBjNMDHLfyBE9lklobV5G145CuptV9frBiWwKgykAk9sKHg1zBX7y/exec
  // above is the scripts url

  async function submitRSVP(invite, attendance) {
    const sheetApiUrl = 'https://script.google.com/macros/s/AKfycbxKFPAhwmD1384JBjNMDHLfyBE9lklobV5G145CuptV9frBiWwKgykAk9sKHg1zBX7y/exec'; // Replace with the deployed web app URL
    const data = { invite, attendance };
  
    try {
      const response = await fetch(sheetApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('RSVP submitted successfully');
        // Handle success as needed
      } else {
        console.error('Error submitting RSVP');
        // Handle errors
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
    }
  }
  

  return (
    <div>
      <h2>RSVP</h2>
      <form onSubmit={submitRSVP}>
        <label>
          Invite Code
          <input type="text" value={inviteCode} onChange={handleInviteCode} />
        </label>
        <label>
          Will you we see you there?
          <div>
            <label>
              <input
                type="radio"
                value="yes"
                checked={attendance === 'yes'}
                onChange={handleAttendanceChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={attendance === 'no'}
                onChange={handleAttendanceChange}
              />
              No
            </label>
          </div>
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* ... (rest of the component) */}
    </div>
  );
}

export default Rsvp;
