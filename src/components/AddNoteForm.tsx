'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
// eslint-disable-next-line import/extensions
import { addNote } from '@/lib/dbActions';
// eslint-disable-next-line import/extensions
import LoadingSpinner from '@/components/LoadingSpinner';
// eslint-disable-next-line import/extensions
import { AddNoteSchema } from '@/lib/validationSchemas';
// import { Note } from '@prisma/client';
// import {Contact} from '@prisma/client';
const onSubmit = async (data: {
  email: string;
  title: string;
  department: string;
  class: string;
  semester: string;
  professor: string;
  description: string;
  documentLink: string;
  owner: string;
}) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await addNote(data);
  swal('Success', 'Your Note has been added', 'success', {
    timer: 2000,
  });
};
// const AddNoteForm = ({ contact }: { contact: Contact }) =>
const AddNoteForm: React.FC = () => {
  const { data: session, status } = useSession();
  // console.log('AddStuffForm', status, session);
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddNoteSchema),
  });
  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={16}>
          <Col className="text-center">
            <h2>Upload Note</h2>
          </Col>
          <Card className="card">
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="mb-3">
                  <Col>
                    <Form.Group>
                      <Form.Label>User Email</Form.Label>
                      <input
                        type="text"
                        {...register('email')}
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
                        className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.title?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Group>
                      <Form.Label>Department</Form.Label>
                      <input
                        type="text"
                        {...register('department')}
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
                        className={`form-control ${errors.class ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.class?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Group>
                      <Form.Label>Semester</Form.Label>
                      <input
                        type="text"
                        {...register('semester')}
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
                        className={`form-control ${errors.professor ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.professor?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Group>
                      <Form.Label>Description</Form.Label>
                      <input
                        type="text"
                        {...register('description')}
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
                        className={`form-control ${errors.documentLink ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.documentLink?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <input type="hidden" {...register('owner')} value={currentUser} />
                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" className="btn-custom-submit" size="lg">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        type="button"
                        onClick={() => reset()}
                        className="btn-custom-reset"
                        size="lg"
                      >
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

export default AddNoteForm;
