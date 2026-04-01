import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Course(props){
    const[name, setName]= useState("vansh");
    function show(){
        alert(name + " is Added");
    }
    return(
    <div className="StudentName">
        <h1>Course is {props.name}</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Student Name"/>
        
         <Button variant="primary" onClick={()=>show()}>ADD</Button>
         <BasicExample />
    </div>
    )
}
function BasicExample() {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
  );
}

export default Course;