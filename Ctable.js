import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

export default function Ctable(props){
    return(
        <div>
            <Table striped bordered hover responsive className="text-center mt-4" variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Brand</th>
            
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
          props.students.map((student) => (
            <tr key={student._id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.price}</td>
              <td>{student.image}</td>
              <td>{student.brand}</td>
              
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                   onClick={() => props.editData(student)}
                >
                  Edit
                </Button>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => props.deleteData(student)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>

      </Table>
        </div>
    )
}