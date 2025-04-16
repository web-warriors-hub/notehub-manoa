'use client';

import { Note } from '@prisma/client'; // Ensure you have the correct path to your prisma client

import ListGroup from 'react-bootstrap/ListGroup';

/* Renders a single Note. See components/ContactCard.tsx. */
const NoteItem = ({ note }: { note : Note }) => (
  <ListGroup.Item>
    <p className="fw-lighter">{note.createdAt.toLocaleDateString('en-US')}</p>
    <p>{note.note}</p>
  </ListGroup.Item>
);

export default NoteItem;
