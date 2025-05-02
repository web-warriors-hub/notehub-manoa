'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const SignIn = () => {
  const [error, setError] = useState<string | null>(null);
  const [invalid, setInvalid] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    const result = await signIn('credentials', {
      redirect: false,
      callbackUrl: '/',
      email,
      password,
    });
    
    if (!result || result.error) {
      setError('Invalid email or password');
      setInvalid(true);
    } else {
      setError(null);
      setInvalid(false);
      window.location.href = result.url ?? '/';
    }
  };

  return (
    <main>
      <Container>
        <Row className="justify-content-center">
          <Col xs={5}>
            <h1 className="text-center">Sign In</h1>
            <Card>
              <Card.Body>
                <Form method="post" onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <input
                      name="email"
                      type="text"
                      className={`form-control ${invalid ? 'is-invalid' : ''}`}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <input
                      name="password"
                      type="password"
                      className={`form-control ${invalid ? 'is-invalid' : ''}`}
                    />
                  </Form.Group>
                  {invalid && (
                    <div className="invalid-feedback d-block">
                      {error}
                    </div>
                  )}
                  <Button type="submit" className="mt-3">
                    Signin
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer>
                Don&apos;t have an account?{' '}
                <a href="/auth/signup">Sign up</a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SignIn;
