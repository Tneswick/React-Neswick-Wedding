// About.js
import React from 'react';

function About() {
  return (
    <div className='about-div'>
      <h2 className='about-title'>About</h2>
      <h3>Frequently Asked Questions</h3>
      <div>
        <h4>Q: Can I bring a plus one?</h4>
        <p>A: Please check your invitation for details on whether a plus one is included.</p>
      </div>
      <div>
        <h4>Q: What time does the ceremony start?</h4>
        <p>A: The ceremony will begin at 4:00 PM. Please arrive a bit earlier to find your seat.</p>
      </div>
      <div>
        <h4>Q: Is there parking available at the venue?</h4>
        <p>A: Yes, there is ample parking available at the venue. Follow the signs upon arrival.</p>
      </div>
      <div>
        <h4>Q: Are children welcome at the wedding?</h4>
        <p>A: The wedding is an adults-only event. We hope you can arrange for childcare during the celebration.</p>
      </div>
    </div>
  );
}

export default About;
