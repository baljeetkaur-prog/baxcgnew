import React from 'react';
import './Heroslider.css';

const Heroslider = () => {
  return (
    <div className="video-hero-container">
      <video
        className="background-video"
        poster="/images/bannervideooverlay.png"  // Use your actual image path
        autoPlay
        muted
        loop
        playsInline
      >
    <source src="/images/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay-content">
        <h6>Launch with Confidence</h6>
        <h3>From Idea to Execution – We’ve Got You!</h3>
        <a
          href="https://outlook.office.com/book/BookwithBax@NETORG18291625.onmicrosoft.com/?ismsaljsauthenabled"
          className="btn btn-style mt-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default Heroslider;
