/* eslint-disable max-len */

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

  // Filter based on search input
  const filteredNotes = textInput.trim() === ''
    ? notes
    : notes.filter((note) => `${note.title} ${note.department} ${note.class} ${note.professor} ${note.description} ${note.owner}`
      .toLowerCase()
      .includes(textInput.toLowerCase()));
  // const filteredNotes = notes;

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
              <Dropdown.Toggle className="custom-filter-btn" id="dropdown-basic">
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
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <Row key={note.id} md={12} className="mb-4">
              <NoteCard note={note} />
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

export default Viewnotes;
