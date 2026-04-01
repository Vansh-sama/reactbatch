import Carousel from 'react-bootstrap/Carousel';
// import java from "./images/web-design course of softech.jpg";
// import python from "./images/S2.png";
// import react from "./images/S3.png";
// import boot from "./images/S4.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Mystyle.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card1 from "./images/card1.webp"
import card2 from "./images/card2.png"
import card3 from "./images/card3.png"
import {
  FaBullhorn,
  FaNewspaper,
  FaCode,
  FaGlobe,
  FaDatabase,
  FaUserGraduate,
} from "react-icons/fa";

function AutoLayoutExample1() {
  return (
    <Container className="info-wrapper-mini">
      <Row>

        {/* ANNOUNCEMENT */}
        <Col md={6} className="info-box-mini">
          <h6 className="title-mini">
            <FaBullhorn className="mini-icon" /> ANNOUNCEMENT
          </h6>

          <p className="text-mini">
            SOFTECH provides quality education with practical training.
          </p>

          <ul className="list-mini">
            <li><FaCode /> Programming & Development</li>
            <li><FaGlobe /> Web Technologies</li>
            <li><FaDatabase /> Data & IT Skills</li>
            <li><FaUserGraduate /> Career Courses</li>
          </ul>
        </Col>

        {/* LATEST NEWS */}
        <Col md={6} className="info-box-mini">
          <h6 className="title-mini">
            <FaNewspaper className="mini-icon" /> LATEST NEWS
          </h6>

          <p className="text-mini">
            <FaCode className="inline-icon" /> Skill-based practical learning
          </p>
          <p className="text-mini">
            <FaUserGraduate className="inline-icon" /> Student success stories
          </p>
          <p className="text-mini">
            <FaDatabase className="inline-icon" /> Updated labs & resources
          </p>
        </Col>

      </Row>
    </Container>
  );
}

function SoftechSlider() {
  return (
    <Carousel
      interval={2000}
      
      className="small-carousel"
    >
      <Carousel.Item>
        <img
          className="d-block w-100 mini-slider-img"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Web Development"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 mini-slider-img"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="IT Training"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 mini-slider-img"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Courses"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 mini-slider-img"
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="Career"
        />
      </Carousel.Item>
    </Carousel>
  );
}
function Courses() {
   return (
    <Container className="my-5">
      <h2 className="text-center fw-bold text-primary mb-4">
        Our Courses
      </h2>

      <Carousel indicators={false}>
        
        {/* SLIDE 1 */}
        <Carousel.Item>
          <Row>
            <Col md={3}>
              <Card className="shadow-sm">
                <Card.Img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" />
                <Card.Body className="text-center">
                  <Card.Title>Web Development</Card.Title>
                  <Button size="sm">View</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="shadow-sm">
                <Card.Img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee" />
                <Card.Body className="text-center">
                  <Card.Title>React JS</Card.Title>
                  <Button size="sm">View</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="shadow-sm">
                <Card.Img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" />
                <Card.Body className="text-center">
                  <Card.Title>Python</Card.Title>
                  <Button size="sm">View</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="shadow-sm">
                <Card.Img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4" />
                <Card.Body className="text-center">
                  <Card.Title>Java</Card.Title>
                  <Button size="sm">View</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        {/* SLIDE 2 */}
        <Carousel.Item>
          <Row>
            <Col md={3}>
              <Card className="shadow-sm">
                <Card.Img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" />
                <Card.Body className="text-center">
                  <Card.Title>Data Science</Card.Title>
                  <Button size="sm">View</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="shadow-sm">
                <Card.Img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd" />
                <Card.Body className="text-center">
                  <Card.Title>Machine Learning</Card.Title>
                  <Button size="sm">View</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="shadow-sm">
                <Card.Img src="https://images.unsplash.com/photo-1677442136019-21780ecad995"  />
                <Card.Body className="text-center">
                  <Card.Title>Artificial Intelligence</Card.Title>
                  <Button size="sm">View</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="shadow-sm">
                <Card.Img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" />
                <Card.Body className="text-center">
                  <Card.Title>Cyber Security</Card.Title>
                  <Button size="sm">View</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        {/* SLIDE 3 */}
        <Carousel.Item>
          <Row>
            <Col md={3}>
              <Card className="shadow-sm">
                <Card.Img src="https://images.unsplash.com/photo-1557838923-2985c318be48" />
                <Card.Body className="text-center">
                  <Card.Title>Digital Marketing</Card.Title>
                  <Button size="sm">View</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="shadow-sm">
                <Card.Img src="https://images.unsplash.com/photo-1545235617-9465d2a55698" />
                <Card.Body className="text-center">
                  <Card.Title>Graphic Designing</Card.Title>
                  <Button size="sm">View</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="shadow-sm">
                <Card.Img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c" />
                <Card.Body className="text-center">
                  <Card.Title>App Development</Card.Title>
                  <Button size="sm">View</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="shadow-sm">
                <Card.Img src="https://images.unsplash.com/photo-1518770660439-4636190af475" />
                <Card.Body className="text-center">
                  <Card.Title>Full Stack</Card.Title>
                  <Button size="sm">View</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

      </Carousel>
    </Container>
  );
}



 function Home(){
    return(
        <div>
            <SoftechSlider />
            <AutoLayoutExample1 />
            <Courses />
            
        </div>
    );
 }
 export default Home;