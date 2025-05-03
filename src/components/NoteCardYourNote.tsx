'use client';

import { Note } from '@prisma/client'; // Ensure you have the correct path to your prisma client
import Link from 'next/link';
import { Card, Col, Row } from 'react-bootstrap';

const YourNoteCard = ({ note }: { note: Note }) => (
  <Card className="h-100 w-100">
    <Card.Header>
      <Card.Title>{note.title}</Card.Title>
      <Card.Subtitle>
        {note.class}-{note.semester}
        {/* -Created:
        {new Date(note).toLocaleDateString()} */}
      </Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        <strong>Professor:</strong>
        {note.professor}
        <br />
        <strong>Department:</strong>
        {note.department}
        <br />
        <strong>Description:</strong>
        {note.description}
        <br />
        <strong>Document:</strong>
        <Link href={note.documentLink} target="_blank">
          View
        </Link>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Row className="align-items-center">
        <Col>
          <small>Uploaded by {note.owner}</small>
        </Col>
        <Col className="text-end">
          <Link href={`edit/${note.id}`} className="me-2 btn btn-sm btn-secondary">
            Edit
          </Link>
          <Link href={`delete/${note.id}`} className="btn btn-sm btn-danger">
            Delete
          </Link>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default YourNoteCard;
