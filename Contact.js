import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Mystyle.css';

function AutoLayoutContact() {
  return (
    <Container>
      <Row>
       
        <Col>
          <h2>CONTACT SOFTECH INSTITUTION</h2>

          <p>
            We’re here to help! If you have any questions about our courses,
            admissions, or training programs, feel free to reach out to us.
          </p>

          <h5>Address</h5>
          <p>
            SOFTECH Institution<br />
            Near Main Market<br />
            Sirsa, Haryana
          </p>

          <h5> Phone</h5>
          <p>
            +91 99966 70050
          </p>

          <h5> Email</h5>
          <p>
            info@softechinstitution.com
          </p>

          <h5> Office Hours</h5>
          <p>
            Monday – Saturday<br />
            9:00 AM – 6:00 PM
          </p>
        </Col>

        
        <Col>
          <h2>GET IN TOUCH</h2>

          <p>
            Fill out the form below and our team will get back to you as soon as
            possible.
          </p>

          <form>
            <h6>Name</h6>
            <input
              type="text"
              placeholder="Enter your name"
              className="form-control mb-3"
            />

            <h6>Email</h6>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control mb-3"
            />

            <h6>Message</h6>
            <textarea
              rows="4"
              placeholder="Enter your message"
              className="form-control mb-3"
            ></textarea>

            <button className="btn btn-primary">
              Send Message
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

function Contact()
{
    return(
        <div>
            <AutoLayoutContact />
        </div>
    );
}
 
export default Contact;