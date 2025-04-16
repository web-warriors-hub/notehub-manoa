/* eslint-disable react/button-has-type */

'use client';

import { Col, Container, Row, Dropdown } from 'react-bootstrap';
import { useState } from 'react';

/** Render a Not Authorized page if the user enters a URL that they don't have authorization for. */
const Viewnotes = () => {
  const [textInput, setTextInput] = useState('');

  const handleSelect = (filterValue: string) => {
    const newText = textInput ? `${textInput}, ${filterValue}` : filterValue;
    setTextInput(newText);
  };

  return (
    <main>
      <Container className="py-3 viewnotefont">
        <Row>
          <Col className="headerGlobalNotes">
            <h2>
              <p>What Notes Would You Like to Find?</p>
            </h2>
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
                  <Dropdown.Item onClick={() => handleSelect(item)}>
                    {item}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
      {/* mockup, will delete later */}
      <Container className="viewnotefont">
        <Row className="note">
          <Col>
            <p>Class: ICS 314</p>
            <p>Professor: Chad Morita</p>
            <p>Description: ICS 314 WOD Notes</p>
            <p>Uploaded by: Annonymous</p>
            <a href="/">link</a>
            <p></p>
            <button className="btn btn-primary" type="submit">Leave a Comment</button>
          </Col>
        </Row>
        <Row className="note">
          <Col>
            <p>Class: ICS 314</p>
            <p>Professor: Chad Morita</p>
            <p>Description: ICS 314 WOD Notes</p>
            <p>Uploaded by: Annonymous</p>
            <a href="/">link</a>
            <p></p>
            <button className="btn btn-primary" type="submit">Leave a Comment</button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Viewnotes;
