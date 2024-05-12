// About.js
import React from 'react';

function About() {
  return (
    <div className='about-div'>
      <h2 className='about-title'>About</h2>
      <h3>Frequently Asked Questions</h3>
      <div>
        <h4>Q: What is the color scheme/dress code?</h4>
        <p>A: Black and white. We want it to be simple and elegant. We ask that guests wear their best all black outfits (Dark/Black jeans are okay).</p>
      </div>
      <div>
        <h4>Q: Can I bring a plus one?</h4>
        <p>A: Unfortunately not, weddings are an expensive thing, and we had to make tough decisions to fit our budget.</p>
      </div>
      <div>
        <h4>Q: What time does the ceremony start?</h4>
        <p>A: The ceremony will begin at 2:30pm</p>
      </div>
      <div>
        <h4>Q: Is there parking available at the venue?</h4>
        <p>A: The venue has an extremely small parking lot, and we are going to reserve those spots for specific family members.</p>
      </div>
      <div>
        <h4>Q: Are children welcome at the wedding?</h4>
        <p>A: Though we would love to have your kids there, the wedding is an <span>adults-only event</span>. We hope you can arrange for childcare, so everyone can let loose and have some fun.</p>
      </div>
      <div className='about-honeymoon-div'>
        <a className='qr-a' href='https://withjoy.com/taylor-and-karen/registry'>
          <img src='./images/qr-code.png' alt='QR Code' className='qr-code' />
        </a>
        <a className='honeymoon-link' href="https://withjoy.com/taylor-and-karen/registry">Link To Honeymoon Fund</a>
        <p className='honeymoon-p'>As we embark on this new chapter together, we are humbled by the love and support of our cherished friends and family. While your presence is the greatest gift of all, should you wish to contribute, kindly consider helping us create lasting memories on our honeymoon, as we already have a home together.</p>
      </div>
    </div>
  );
}

export default About;
