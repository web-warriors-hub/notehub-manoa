'use client';

import { useState, useEffect } from 'react';
import { Col, Container, Row, Dropdown } from 'react-bootstrap';
import NoteCard from '@/components/NoteCard';
import { Note } from '@prisma/client';

const Viewnotes = () => {
  const [textInput, setTextInput] = useState('');
  const [notes, setNotes] = useState<Note[]>([]);

  // Fetch only default notes from API on mount
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch('/api/notes'); // this should already be filtered for "default" notes on the backend
        const data = await res.json();
        setNotes(data);
      } catch (err) {
        console.error('Failed to fetch notes', err);
      }
    };
    fetchNotes();
  }, []);

  // Filter based on search input
  const filteredNotes = textInput.trim() === ''
    ? notes
    : notes.filter((note) => `${note.title} ${note.department} ${note.class} ${note.professor} ${note.description}`
      .toLowerCase()
      .includes(textInput.toLowerCase()));

  const handleSelect = (filterValue: string) => {
    const newText = textInput ? `${textInput}, ${filterValue}` : filterValue;
    setTextInput(newText);
  };

  return (
    <main>
      <Container className="py-3 viewnotefont">
        <Row>
          <Col className="headerGlobalNotes">
            <h2><p>What Notes Would You Like to Find?</p></h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              className="form-control"
              placeholder="Start typing or use filters"
            />

            <Dropdown className="mt-2 tanbox">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="dropbox">
                Filter
              </Dropdown.Toggle>
              <Dropdown.Menu className="filterbox">
                <p className="px-3 mb-1 fw-bold">Sort by...</p>
                {[
                  'Information and Computer Science',
                  'Mechanical Engineering',
                  'Psychology',
                  'Civil Engineering',
                  'Electrical Engineering',
                  'Marine Biology',
                  'Chemistry',
                  'Math',
                  'Environmental Science',
                  'History',
                ].map((item) => (
                  <Dropdown.Item key={item} onClick={() => handleSelect(item)}>
                    {item}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>

      <Container className="viewnotefont mt-4">
        <Row>
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
              <Col key={note.id} md={6} lg={4} className="mb-4">
                <NoteCard note={note} />
              </Col>
            ))
          ) : (
            <Col>
              <p>No notes found.</p>
            </Col>
          )}
        </Row>
      </Container>
    </main>
  );
};

export default Viewnotes;