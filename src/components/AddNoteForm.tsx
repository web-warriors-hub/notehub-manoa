'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addNote } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AddNoteSchema } from '@/lib/validationSchemas';

const onSubmit = async (data: {
  email: string;
  title: string;
  department: string;
  class: string;
  semester: string;
  professor: string;
  description: string;
  documentLink: string;
}) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await addNote(data);
  swal('Success', 'Your Note has been added', 'success', {
    timer: 2000,
  });
};

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
            <h2>Add Note</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
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
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <input
                      type="text"
                      {...register('title')}
                      className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.title?.message}</div>
                  </Form.Group>
                </Row>
                <Form.Group>
                  <Form.Label>Condition</Form.Label>
                  <select {...register('condition')} className={`form-control ${errors.condition ? 'is-invalid' : ''}`}>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="poor">Poor</option>
                  </select>
                  <div className="invalid-feedback">{errors.condition?.message}</div>
                </Form.Group>
                <input type="hidden" {...register('owner')} value={currentUser} />
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

export default AddStuffForm;
