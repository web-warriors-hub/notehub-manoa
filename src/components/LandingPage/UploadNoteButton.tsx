'use client';

import Link from 'next/link';
import React from 'react';

const UploadNoteButton: React.FC = () => {
  return (
    <Link href="/search">
      <div className="main-note-button">
        I want to upload my notes!
      </div>
    </Link>
  );
};

export default UploadNoteButton;
