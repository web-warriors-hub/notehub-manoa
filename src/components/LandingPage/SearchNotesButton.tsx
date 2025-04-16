'use client';

import Link from 'next/link';
import React from 'react';

const SearchNoteButton: React.FC = () => (
  <Link href="/search">
    <div className="main-note-button">
      I want to look for notes!
    </div>
  </Link>
);

export default SearchNoteButton;
