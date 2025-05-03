'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { Note } from '@prisma/client';
// eslint-disable-next-line import/extensions
import { useRouter } from 'next/navigation';
// eslint-disable-next-line import/extensions
import { deleteNote } from '@/lib/dbActions';

const DeleteNoteForm = ({ note }: { note: Note }) => {
  const { register, handleSubmit } = useForm<Note>();
  const router = useRouter();

  const onSubmit = async (data: Note) => {
    const id = Number(data.id);
    await deleteNote(id);
    swal('Success', 'Your note has been deleted', 'success', {
      timer: 2000,
    });
  };

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Delete Note</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register('id')} defaultValue={note.id} />
                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" variant="danger">
                        Delete
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        type="button"
                        variant="warning"
                        className="float-right"
                        onClick={() => router.push('/yourNote')}
                      >
                        Cancel
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DeleteNoteForm;
