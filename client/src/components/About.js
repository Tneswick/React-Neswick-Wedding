// About.js
import React from 'react';

function About() {
  return (
    <div className='about-div'>
      <h2 className='about-title'>About</h2>
      <h3>Frequently Asked Questions</h3>
      <div>
        <h4>Q: Where and When?</h4>
        <p>A: The wedding will be held at 128 Hanford St, Sutter Creek, CA 95685. The ceremony begins at 2:30pm, followed by a cocktail hour from 3-4pm, dinner at 5pm, and the event concludes at 9pm. For those interested, we will head to Cavana's Pub and Grub downtown afterwards.</p>
      </div>
      <div>
        <h4>Q: What is the dress code?</h4>
        <p>A: The dress code is black attire, but black jeans are perfectly acceptable. We want to keep the event elegant.</p>
      </div>
      <div>
        <h4>Q: What are the hotel options?</h4>
        <p>A: Unfortunately, we do not have any hotel blocks reserved, but we will be staying at Hotel Sutter, conveniently located right across the street from the afterparty. Sutter Creek has a couple hotels and inns, and Jackson is just one town over with even more lodging. </p>
      </div>
      <div>
        <h4>Q: Is there parking available at the venue?</h4>
        <p>A: Parking at and around the venue is extremely limited. Most hotels in Sutter Creek are within walking distance, although the area has hills. Please check back here closer to the event date, as we may arrange a shuttle service. Carpooling is encouraged.</p>
      </div>
      <div>
        <h4>Q: Are children welcome at the wedding? Can I bring a +1?</h4>
        <p>A: Though we would love to have your kids there, the wedding is an <span>adults-only event</span>. We hope you can arrange for childcare, so everyone can let loose and have some fun. Also, we cannot offer +1s to the wedding, we had to make tough decisions on the guest list as we both have large families.</p>
      </div>
      <div>
        <h4>Q: Do we need to choose our food preference?</h4>
        <p>A: Dinner will be a buffet table style meal, with portions served by the catering staff. It is a Mexican themed plate with a lot of variation.</p>
      </div>
      <div>
        <h4>Q: Is it an open bar?</h4>
        <p>A: We will have an open bar with beer, seltzers, and two signature drinks, one for the bride and one for the groom. Please bring cash to tip your bartenders. Please note that no hard alcohol, other than the signature drinks, or shots are allowed. The venue strictly prohibits hard alcohol outside of the signature drinks and will impose fines if this rule is violated. Water and soda will also be available at the bar.</p>
      </div>
      <div>
        <h4>Q: What if my question isn't answered here?</h4>
        <p>A: If you have any questions beyond those listed here, please feel free to reach out to either the bride or the groom. We're happy to help!</p>
      </div>
      <div className='about-honeymoon-div'>
        <h2 className='about-title'>Gifts</h2>
        <p className='honeymoon-p'>As we embark on this new chapter together, we are humbled by the love and support of our cherished friends and family. While your presence is the greatest gift of all, should you wish to contribute, kindly consider helping us create lasting memories on our honeymoon, as we already have a home together.</p>
        <a className='honeymoon-link' href="https://withjoy.com/taylor-and-karen/registry">Link To Honeymoon Fund</a>
        <a className='honeymoon-link' href="https://venmo.com/Karen-Vera-2">Link Karen's Venmo</a>
        <p className='for-zelle'>For Zelle</p>
        <h1 className='zelle-account'>NEZBOPPIN@GMAIL.COM</h1>
      </div>
    </div>
  );
}

export default About;
