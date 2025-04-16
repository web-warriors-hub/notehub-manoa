'use client'

import { Col, Container, Row, Dropdown, ListGroup } from 'react-bootstrap';
import { useState } from 'react';

/** Render a Not Authorized page if the user enters a URL that they don't have authorization for. */
const Viewnotes = () => {
  const [textInput, setTextInput] = useState('');

  const handleSelect = (filterValue) => {
    const newText = textInput ? `${textInput}, ${filterValue}` : filterValue;
    setTextInput(newText);
  };

  return (
    <main>
      <Container className="py-3">
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
                ].map((item, index) => (
                  <Dropdown.Item key={index} onClick={() => handleSelect(item)}>
                    {item}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
      {/* mockup, will delete later */}
      <Container>
        <Row className="note">
          <Col>
            <p>Class: ICS 314</p>
            <p>Professor: Chad Morita</p>
            <p>Description: ICS 314 WOD Notes</p>
            <p>Uploaded by: Annonymous</p>
            <a href="#">link</a>
            <p> </p>
            <h5>Leave a Comment:</h5>
            <textarea
              className="form-control mb-2"
              rows={4}
              placeholder="Write your comment here..."
            > </textarea>
            <div className="d-flex gap-2">
              <button className="btn btn-primary" type="submit">Submit</button>
              <button className="btn btn-secondary" type="reset">Reset</button>
            </div>
          </Col>
        </Row>
        <Row className="note">
          <Col>
            <p>Class: ICS 314</p>
            <p>Professor: Chad Morita</p>
            <p>Description: ICS 314 WOD Notes</p>
            <p>Uploaded by: Annonymous</p>
            <a href="#">link</a>
            <p> </p>
            <h5>Leave a Comment:</h5>
            <textarea
              className="form-control mb-2"
              rows={4}
              placeholder="Write your comment here..."
            ></textarea>
            <div className="d-flex gap-2">
              <button className="btn btn-primary" type="submit">Submit</button>
              <button className="btn btn-secondary" type="reset">Reset</button>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Viewnotes;
