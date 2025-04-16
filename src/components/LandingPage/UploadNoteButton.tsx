'use client';

import Link from 'next/link';
import React from 'react';

const UploadNoteButton: React.FC = () => (
  <Link href="/search">
    <div className="main-note-button">
      I want to upload my notes!
    </div>
  </Link>
);

export default UploadNoteButton;
