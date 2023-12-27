// Rsvp.js
import React, { useState } from 'react';

function Rsvp() {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAttendanceChange = (event) => {
    setAttendance(event.target.value);
  };

  const handleRsvpSubmit = (event) => {
    event.preventDefault();
    // Handle RSVP submission logic (e.g., send data to server)
    console.log(`RSVP submitted - Name: ${name}, Attendance: ${attendance}`);
  };

  return (
    <div>
      <h2>RSVP</h2>
      <form onSubmit={handleRsvpSubmit}>
        <label>
          Your Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Will you attend?
          <select value={attendance} onChange={handleAttendanceChange}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <button type="submit">Submit RSVP</button>
      </form>
      <div>
        <p>
          Thank you for RSVPing! We look forward to celebrating with you.
        </p>
        <p>
          Scan the QR code below to contribute via Venmo:
        </p>
        <img
          src="path/to/venmo-qr-code.png"
          alt="Venmo QR Code"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <p>
          Your contributions help make our special day even more memorable. Thank you!
        </p>
      </div>
    </div>
  );
}

export default Rsvp;
