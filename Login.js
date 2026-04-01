import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";

function AutoLayoutLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/login", { // 🔥 fix URL
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: email,
        password: password
      })
    });

    const data = await res.json();

    if (res.status === 200) {
      alert(data.message);
       navigate("/student");
    } else {
      alert(data.message);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <h2>LOGIN</h2>

          <form onSubmit={handleLogin}>
            <h6>Email Address</h6>
            <input
              type="email"
              className="form-control mb-3"
              onChange={(e) => setEmail(e.target.value)}
            />

            <h6>Password</h6>
            <input
              type="password"
              className="form-control mb-3"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutLogin;