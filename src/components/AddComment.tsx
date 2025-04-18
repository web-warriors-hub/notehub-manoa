'use client';

import { Card, Button, Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';

const AddCommentForm = () => {
  const [note, setNote] = useState('');

  // Static list of public comments (mocked)
  const comments = [
    {
      id: '1',
      owner: 'alice@example.com',
      note: 'Wait, how did you get the solution for part b?',
    },
    {
      id: '2',
      owner: 'bob@example.com',
      note: 'I think your solution is wrong. Here is how I think about it...',
    },
  ];

  return (
    <div className="p-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Card className="mb-4">
        <Card.Header className="bg-warning text-center text-dark">
          <h4>Here the link to my note</h4>
        </Card.Header>
        <Card.Body className="text-center">
          <Button variant="warning" size="lg">
            Click here for access to the note!
          </Button>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Header className="bg-success text-white">
          Add a comment ...
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Note</Form.Label>
              <Form.Control
                type="text"
                placeholder="Write your comment here..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </Form.Group>
            <Row className="pt-3">
              <Col>
                <Button type="submit" variant="success">
                  Post
                </Button>
              </Col>
              <Col className="text-end">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setNote('')}
                >
                  Reset
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      <div>
        <h5 className="mb-3">Note Comments</h5>
        {comments.map((comment) => (
          <Card key={comment.id} className="mb-2 p-2 bg-light">
            <small>
              <strong>{comment.owner}</strong>
              :
            </small>
            <p className="mb-1">{comment.note}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AddCommentForm;
