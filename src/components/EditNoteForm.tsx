'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { Note } from '@prisma/client';
// eslint-disable-next-line import/extensions
import { EditNoteSchema } from '@/lib/validationSchemas';
// eslint-disable-next-line import/extensions
import { editNote } from '@/lib/dbActions';

const EditNoteForm = ({ note }: { note: Note }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Note>({
    resolver: yupResolver(EditNoteSchema),
  });

  const onSubmit = async (data: Note) => {
    await editNote(data);
    swal('Success', 'Your note has been updated', 'success', {
      timer: 2000,
    });
  };

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Edit Note</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register('id')} value={note.id} />
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>User Email</Form.Label>
                      <input
                        type="text"
                        {...register('email')}
                        defaultValue={note.email}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.email?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Note Title</Form.Label>
                      <input
                        type="text"
                        {...register('title')}
                        defaultValue={note.title}
                        className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.title?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Department</Form.Label>
                      <input
                        type="text"
                        {...register('department')}
                        defaultValue={note.department}
                        className={`form-control ${errors.department ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.department?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Class</Form.Label>
                      <input
                        type="text"
                        {...register('class')}
                        defaultValue={note.class}
                        className={`form-control ${errors.class ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.class?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Semester</Form.Label>
                      <input
                        type="text"
                        {...register('semester')}
                        defaultValue={note.semester}
                        className={`form-control ${errors.semester ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.semester?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Professor</Form.Label>
                      <input
                        type="text"
                        {...register('professor')}
                        defaultValue={note.professor}
                        className={`form-control ${errors.professor ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.professor?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Description</Form.Label>
                      <input
                        type="text"
                        {...register('description')}
                        defaultValue={note.description}
                        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.description?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Note Link</Form.Label>
                      <input
                        type="text"
                        {...register('documentLink')}
                        defaultValue={note.documentLink}
                        className={`form-control ${errors.documentLink ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.documentLink?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <input type="hidden" {...register('owner')} value={note.owner} />
                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button type="button" onClick={() => reset()} variant="warning" className="float-right">
                        Reset
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

export default EditNoteForm;
