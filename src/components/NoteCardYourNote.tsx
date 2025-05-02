'use client';

import { Note } from '@prisma/client'; // Ensure you have the correct path to your prisma client
import Link from 'next/link';
import { Card, Col, Row } from 'react-bootstrap';

const YourNoteCard = ({ note }: { note: Note }) => (
  <Card className="h-100 w-100 border rounded-4 shadow-sm p-2 bg-white">
    <Card.Header className="bg-white border-bottom-0">
      <Card.Title className="mb-1 fs-2 fw-semibold text-dark">{note.title}</Card.Title>
      <Card.Subtitle className="text-sm text-muted">
        {note.class} — {note.semester}
      </Card.Subtitle>
    </Card.Header>

    <Card.Body className="pt-3">
      <Card.Text className="text-notecard small">
        <strong className="text-dark">Professor: </strong>
        {note.professor}
        <br />
        <strong className="text-dark">Department: </strong>
        {note.department}
        <br />
        <strong className="text-dark">Description: </strong>
        {note.description}
        <br />
        <strong className="text-dark">Document: </strong>{' '}
        <Link href={note.documentLink} target="_blank" className="text-success text-decoration-underline">
          View
        </Link>
      </Card.Text>
    </Card.Body>

    <Card.Footer className="bg-white border-top-0">
      <Row>
        <Col>
          <div className="text-muted" style={{ fontSize: '1.2rem' }}>
            Uploaded by {note.owner}
          </div>
        </Col>
        <Col className="text-end">
          <Link href={`edit/${note.id}`} className="btn btn-outline-secondary btn-lg">
            Edit
          </Link>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default YourNoteCard;
