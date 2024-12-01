import React, {useState}  from "react";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import 
export const TodoForm = ({addTodo}) => {
  const [value,setValue]=useState("");
    const handleSubmit=e=>{
      e.preventDefault();
      setValue("");
      addTodo (value);
      console.log(value,"form value");
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
           <label>Todo task </label>
            <input type="text" value={value} placeholder="set your todo list" onChange={(e)=>setValue(e.target.value)}/>
            <button type="submit">Add Todo Task</button>
       
    </form>
  );
};

