import React, { useState } from 'react';

const RSVP = () => {
  const [inviteCode, setInviteCode] = useState('');
  const [attendance, setAttendance] = useState('');
  const [errorPopup, setErrorPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInviteCodeChange = (event) => {
    // Trim whitespace, capitalize characters, and limit to 4 characters
    const code = event.target.value.trim().toUpperCase().slice(0, 4);
    setInviteCode(code);
  };

  const handleAttendanceChange = (event) => {
    setAttendance(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if invite code and attendance are valid
    if (inviteCode.length !== 4 || !attendance) {
      setErrorMessage("It looks like the Invite code was not filled out properly, or an attendance selection has not been made.");
      setErrorPopup(true);
      return;
    }

    // Mock POST request to server (replace 'placeholder' with actual endpoint)
    try {
      const response = await fetch('https://your-server-endpoint.com/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inviteCode, attendance }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || "Something went wrong on our end.");
        setErrorPopup(true);
      } else {
        setErrorMessage(data.message || "We can't wait to see you there!");
        setSuccessPopup(true);
      }
    } catch (error) {
      setErrorMessage("Something went wrong on our end.");
      setErrorPopup(true);
    }
  };

  const closePopup = () => {
    setErrorPopup(false);
    setSuccessPopup(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Invite Code:
          <input
            type="text"
            value={inviteCode}
            onChange={handleInviteCodeChange}
          />
        </label>
        <br />
        <label>
          Will you be attending?
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
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Error Popup */}
      {errorPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{errorMessage}</p>
            <button onClick={closePopup}>Okay</button>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {successPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{errorMessage}</p>
            <button onClick={closePopup}>Okay</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RSVP;
