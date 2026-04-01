import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Ctable from "./Ctable";
import Child from "./Child";
import Cmodle from "./Cmodle";

function Product() {

    const [students, setStudents] = useState([]);
      const [showModal, setShowModal] = useState(false);
      const [isEdit, setIsEdit] = useState(false);
    
      const [id, setId] = useState("");
      const [name, setName] = useState("");
      const [price, setPrice] = useState("");
      const [image, setImage] = useState("");
      const [brand, setBrand] = useState("");
      

      useEffect(() => {
          getdata();
        }, []);

        function getdata() {
    fetch("https://testapi-4-4qfr.onrender.com/products")
      .then(res => res.json())
     .then(result => setStudents(result))
      .catch(err => console.log(err));
  }

      //reset
      const resetForm = () => {
  setShowModal(false);
  setIsEdit(false);
  setId("");
  setName("");
  setPrice("");
  setImage("");
  setBrand("");
  
};

    //save button
    const postData = () => {
      
      fetch("https://testapi-4-4qfr.onrender.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: parseInt(id),
        name: name,
        price: parseInt(price),
        image: image,
        brand: brand,
      
      })
    })
      .then(res => res.json())
      .then(() => {
        alert("product Added Successfully");
        getdata();
        resetForm();
      })
      .catch(err => console.log(err));
  };

  // update
  const updateData = () => {

    fetch("https://testapi-4-4qfr.onrender.com/products/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         name: name,
        price: parseInt(price),
        image: image,
        brand: brand,
        
      })
    })
      .then(res => res.json())
      .then(() => {
        alert("product Updated Successfully");
        
        getdata();
        resetForm();
      })
      .catch(err => console.log(err));
  };

  
  const handleSave = () => {

    if (isEdit === true) {
      updateData();
    } else {
      postData();
    }

  };

  // delete
 const deleteData = (item) => {
  fetch("https://testapi-4-4qfr.onrender.com/products/" + item._id, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(() => {
      getdata();   
    })
    .catch(err => console.log(err));
};

// edit button
  const editData = (student) => {
    setIsEdit(true);
    setShowModal(true);

      setId(student._id);
      setName(student.name);
      setPrice(student.price);
      setImage(student.image);
      setBrand(student.brand);
  };

 const receiveDataFromChild = (data) => {
    alert("Data received from Child: " + data);
  };
      return (
    <Container className="my-5">
      <Child sendData={receiveDataFromChild} />
      <Button variant="success" onClick={() => setShowModal(true)}>
        ADD STUDENT
      </Button>

        <Ctable students={students} editData={editData} deleteData={deleteData} />
        <Cmodle  />
      
      

    </Container>
  );
}

export default Product;
