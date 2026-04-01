import { Button, Modal, Form } from "react-bootstrap";

export default function Cmodle(props) {

  return (

    <Modal show={props.showModal} onHide={props.resetForm}>
      <Modal.Header closeButton>
        <Modal.Title>
          {props.isEdit ? "Edit Product" : "Add Product"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>

          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="number"
              value={props.id}
              onChange={(e) => props.setId(e.target.value)}
              disabled={props.isEdit}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={props.name}
              onChange={(e) => props.setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={props.price}
              onChange={(e) => props.setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              value={props.image}
              onChange={(e) => props.setImage(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              value={props.brand}
              onChange={(e) => props.setBrand(e.target.value)}
            />
          </Form.Group>

        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.resetForm}>
          Cancel
        </Button>

        <Button variant="success" onClick={props.handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>

  );
}