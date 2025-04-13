import { Col, Container, Row } from 'react-bootstrap';

/** Render a Not Authorized page if the user enters a URL that they don't have authorization for. */
const NotAuthorized = () => (
  <main>
    <Container className="py-3">
      <Row>
        <Col className="headerGlobalNotes">
          <h2>
            <p>What Notes Would You Like to Find?</p>
          </h2>
        </Col>
      </Row>

      <Row className="tanbox">
        <Col>
          <input
            type="text"
          />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row className="note">
        <Col>
          <p>Class: ICS 314</p>
          <p>Professor: Chad Morita</p>
          <p>Description: ICS 314 WOD Notes</p>
          <p>Uploaded by: Annonymous</p>
          <a href="#">link</a>
        </Col>
      </Row>
    </Container>
  </main>
);

export default NotAuthorized;
