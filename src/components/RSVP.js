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

  const handleRsvpSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   const response = await fetch('/api/rsvp', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ name, attendance }),
    //   });

    //   if (response.ok) {
    //     // RSVP was successful
    //     console.log('RSVP submitted successfully');
    //   } else {
    //     // Handle errors
    //     console.error('Failed to submit RSVP');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
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
