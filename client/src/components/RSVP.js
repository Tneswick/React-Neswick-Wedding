import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RSVP = () => {
  const [inviteCode, setInviteCode] = useState('');
  const [attendance, setAttendance] = useState('');
  const [errorPopup, setErrorPopup] = useState(true);
  const [successPopup, setSuccessPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleBtn = () => { console.log('btn clicked!'); };

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

    const newAttendance = (attendance === 'yes' ? 1 : 0);

    // Mock POST request to server (replace 'placeholder' with actual endpoint)
    try {
      const response = await fetch('/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inviteCode, newAttendance }),
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

  const closeErrorPopup = () => {
    setErrorPopup(false);
  };

  const closeSuccessPopup = () => {
    setSuccessPopup(false);
  };

  return (
    <div className='RSVP-div'>
      <h2>RSVP</h2>
      <form onSubmit={handleSubmit}>
        <input
          className='input-field'
          type="text"
          placeholder='INVITE CODE'
          value={inviteCode}
          onChange={handleInviteCodeChange}
        />
        <br />
        <label className='attendance-label' >
          Will we see you there?
        </label>
        <br />
        <div>
          <input
            className='radio-input'
            type="radio"
            value="yes"
            checked={attendance === 'yes'}
            onChange={handleAttendanceChange}
          />
          <label>
            Yes
          </label>
          <input
            className='radio-input'
            type="radio"
            value="no"
            checked={attendance === 'no'}
            onChange={handleAttendanceChange}
          />
          <label>
            No
          </label>
        </div>
        <br />
        <button className='btn' type="submit">Submit</button>
      </form>

      <br />
      <p className='rsvp-h3'>Please contact Taylor or Karen if you have any technical difficulties.</p>

      {errorPopup && (
        <div className="modal">
          <div className="modal-content">
            <p>Thank you to all who RSVP'd. We've now submitted the final count to the venue, so we've closed the RSVP function. If something has come up and you can no longer attend, please reach out to Karen or Taylor. SEE YOU SOON!</p>
            <Link to="/" onClick={handleBtn}>
              <button className='btn RSVPbtn'>Okay</button>
            </Link>
          </div>
        </div>
      )}

      {successPopup && (
        <div className="modal">
          <div className="modal-content">
            <p>{errorMessage}</p>
            <button className='btn' onClick={closeSuccessPopup}>Okay</button>
          </div>
        </div>
      )}

      {(errorPopup || successPopup) && <div className="overlay"></div>}
    </div>
  );
};

export default RSVP;
