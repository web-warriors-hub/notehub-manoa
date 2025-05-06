/* eslint-disable max-len */

'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Note } from '@prisma/client';
import YourNoteCard from '@/components/NoteCardYourNote';

const Yournote = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email || '';
  const [notes, setNotes] = useState<Note[]>([]);

  // Fetch only default notes from API on mount
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch('/api/notes', {
          cache: 'no-store',
        });
        const data = await res.json();
        setNotes(data);
      } catch (err) {
        console.error('Failed to fetch notes', err);
      }
    };
    fetchNotes();
  }, []);

  const filteredNotes = currentUser.trim() === ''
    ? notes
    : notes.filter((note) => `${note.title} ${note.department} ${note.class} ${note.professor} ${note.description} ${note.owner}`
      .toLowerCase()
      .includes(currentUser.toLowerCase()));

  return (
    <main>
      <Container className="py-3 viewnotefont">
        <Row>
          <Col className="headerGlobalNotes">
            <h2>
              <p>See Your Notes</p>
            </h2>
          </Col>
        </Row>
      </Container>

      <Container className="viewnotefont mt-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <Row key={note.id} md={12} className="mb-4">
              <YourNoteCard note={note} />
            </Row>
          ))
        ) : (
          <Row>
            <p>No notes found.</p>
          </Row>
        )}
      </Container>
    </main>
  );
};

export default Yournote;
