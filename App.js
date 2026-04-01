import About from "./About"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from "./Home";
import './Mystyle.css';
import Contact from "./Contact";
import Login from "./Login";
import Student from "./Student";
import Product from "./Product";
import { BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import tag from "./images/ChatGPT Image Jan 29, 2026, 08_50_49 AM.png";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
      <Navbar.Brand as={Link} to="/home">
        <img src={tag} alt="Logo" width={200} />
      </Navbar.Brand>

      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      
      <Navbar.Collapse className="justify-content-end">
        <Nav className="me-5 gap-3">

          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/student">Student</Nav.Link>
          <Nav.Link as={Link} to="/product">Product</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}



function App() {
  return (
    <div >
    <Router>
      <NavBar />
     <div>
     

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/student" element={<Student />}/>
          <Route path="/product" element={<Product />}/>
          
        </Routes>
   
     </div>
    
    </Router>
     <Footer />
     </div>
  );
}

export default App;
