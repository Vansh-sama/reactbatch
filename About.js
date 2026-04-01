import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function AutoLayoutAbout() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">

        {/* Automatic Image (No Import Needed) */}
        <Col md={5} className="mb-4">
          <Card className="shadow-lg border-0">
            <Card.Img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="Education and Training"
              className="img-fluid rounded"
            />
          </Card>
        </Col>

        {/* Text Section */}
        <Col md={7}>
          <h2 className="fw-bold text-primary mb-3">
            About Softech Institution
          </h2>

          <p className="text-muted fs-6">
            <strong>SOFTECH Institution</strong> is a leading educational and
            training institute focused on providing modern, practical, and
            industry-ready skills to students.
          </p>

          <p className="text-muted fs-6">
            We strongly believe in <strong>learning by doing</strong>. Our courses
            are designed with hands-on practice, real-world projects, and expert
            guidance to prepare students for today’s competitive job market.
          </p>

          <h5 className="fw-semibold mt-4">🎯 Our Mission</h5>
          <p className="text-muted">
            To deliver quality education and practical training that builds
            confidence and long-term career success.
          </p>

          <h5 className="fw-semibold mt-3">👁️ Our Vision</h5>
          <p className="text-muted">
            To be a trusted institution known for excellence, innovation, and
            student achievement.
          </p>

          <h5 className="fw-semibold mt-4">⭐ Why Choose SOFTECH?</h5>
          <ul className="text-muted">
            <li>Industry-focused, skill-based learning</li>
            <li>Experienced and supportive faculty</li>
            <li>Hands-on practical training</li>
            <li>Student-friendly environment</li>
            <li>Career guidance and support</li>
          </ul>

          <p className="text-muted">
            SOFTECH Institution is committed to shaping futures by empowering
            students with skills, confidence, and opportunities.
          </p>
        </Col>

      </Row>
    </Container>
  );
}

function About() {
  return (
    <div className="bg-light">
      <AutoLayoutAbout />
    </div>
  );
}

export default About;
