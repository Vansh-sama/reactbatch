import "./Mystyle.css";
import Course from "./Course";
import courseImg1 from "./images/python.jpg";
import courseImg2 from "./images/Java1.avif";
import courseImg3 from "./images/react.png";
import { Badge } from "react-bootstrap";
import CloseButton from 'react-bootstrap/CloseButton';



function Head() {
    return (
        
        <div className="header">
            <h1>
        Welcome to <Badge bg="secondary">SOFTECH</Badge>
      </h1>

            <div className="course-row">
                <div className="course-box">
                    <img src={courseImg1} alt="Python" />
                    <Course name="Python" />
                </div>

                <div className="course-box">
                    <img src={courseImg2} alt="Java" />
                    <Course name="Java" />
                </div>

                <div className="course-box">
                    <img src={courseImg3} alt="React" />
                    <Course name="React" />
                </div>
            </div>
        </div>
    );
}

export default Head;
