/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */

'use client';

import Link from 'next/link';
import React from 'react';

const LandingBackground: React.FC = () => (
  <div className="container-fluid p-0 m-0">
    <div className="landing-background d-flex flex-column align-items-center justify-content-center">
      <img
        src="/Welcome.png"
        alt="Welcome"
        className="landing-image"
      />

      <div className="landing-buttons">
        <Link href="/search" passHref legacyBehavior>
          <a className="main-note-button">
            I want to search for notes!
          </a>
        </Link>

        <Link href="/upload" passHref legacyBehavior>
          <a className="main-note-button">
            I want to upload notes!
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default LandingBackground;
