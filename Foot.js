// import "./Mystyle.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerExample() {
  return (
    <Container>
      <Row>
        <Col><p>
            SOFTECH Institution<br />
            Near Main Market<br />
            Sirsa, Haryana
          </p></Col>
         <Col md={4}>
            <h6 className="fw-semibold text-uppercase mb-3">Quick Links</h6>
            <ul >
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/courses" className="footer-link">Courses</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
              <li><a href="/faq" className="footer-link">FAQs</a></li>
            </ul>
          </Col>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}


function Foot()
{
    return(
        <div className="footer">
           <ContainerExample />
        </div>
    );
}

export default Foot;