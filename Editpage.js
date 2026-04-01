import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

function EditStudent() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    course: "",
    email: "",
    status: ""
  });

  // GET Student by ID
  useEffect(() => {
    fetch("https://nodeapi-1-jguo.onrender.com/getdata")
      .then(res => res.json())
      .then(result => {
        const student = result.message.find(s => s.id == id);
        if (student) {
          setFormData(student);
        }
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const updateData = () => {

    let optionapi = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        course: formData.course,
        email: formData.email,
        status: formData.status
      })
    };

    fetch("https://nodeapi-1-jguo.onrender.com/updatedata/" + id, optionapi)
      .then(res => res.json())
      .then(result => {
        alert("Student Updated Successfully");
        navigate("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card className="bg-dark text-white p-4" style={{ width: "500px" }}>
        <h3 className="text-center text-warning mb-4">
          Edit Student
        </h3>

        <Form>

          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="number"
              value={formData.id}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Course</Form.Label>
            <Form.Control
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Button variant="success" onClick={updateData}>
              Update
            </Button>

            <Button variant="secondary" onClick={() => navigate("/")}>
              Cancel
            </Button>
          </div>

        </Form>
      </Card>
    </Container>
  );
}

export default EditStudent;
