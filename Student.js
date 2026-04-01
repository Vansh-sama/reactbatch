import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Container, Button, Modal, Form } from "react-bootstrap";

function StudentTable() {

  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    getdata();
  }, []);

  function getdata() {
    fetch("http://localhost:3000/getStudent")
      .then(res => res.json())
      .then(result => setStudents(result.data))
      .catch(err => console.log(err));
  }

  // add
  const postData = () => {

    fetch("http://localhost:3000/addStudent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: parseInt(id),
        name: name,
        course: course,
        email: email,
        status: status
      })
    })
      .then(res => res.json())
      .then(() => {
        alert("Student Added Successfully");
        getdata();
        resetForm();
      })
      .catch(err => console.log(err));
  };

  // delete
  const deleteData = (item) => {

    fetch("http://localhost:3000/updateStudent" + item.id, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => getdata())
      .catch(err => console.log(err));
  };

  // edit button
  const editData = (student) => {
    setIsEdit(true);
    setShowModal(true);

    setId(student.id);
    setName(student.name);
    setCourse(student.course);
    setEmail(student.email);
    setStatus(student.status);
  };

  // update
  const updateData = () => {

    fetch("http://localhost:3000/deleteStudent" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        course: course,
        email: email,
        status: status
      })
    })
      .then(res => res.json())
      .then(() => {
        alert("Student Updated Successfully");
        
        getdata();
        resetForm();
      })
      .catch(err => console.log(err));
  };

  //save button
  const handleSave = () => {

    if (isEdit === true) {
      updateData();
    } else {
      postData();
    }

  };

  //resetform
  const resetForm = () => {
    setShowModal(false);
    setIsEdit(false);
    setId("");
    setName("");
    setCourse("");
    setEmail("");
    setStatus("");
  };

  return (
    <Container className="my-5">

      <Button variant="success" onClick={() => setShowModal(true)}>
        ADD STUDENT
      </Button>

      
      <Modal show={showModal} onHide={resetForm}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEdit ? "Edit Student" : "Add Student"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>

            <Form.Group className="mb-3">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
                disabled={isEdit}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Control
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </Form.Group>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={resetForm}>
            Cancel
          </Button>

          <Button variant="success" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      
      <Table striped bordered hover responsive className="text-center mt-4" variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.email}</td>
              <td>{student.status}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => editData(student)}
                >
                  Edit
                </Button>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteData(student)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>

      </Table>

    </Container>
  );
}

export default StudentTable;
