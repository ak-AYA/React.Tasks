import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo)=> {
    setTodos ([...todos, {add: todo }]);
    
  };
  const deleteTodo = index => {
    console.log(index, "delete index");
    setTodos(todos.filter((_, i) => i !== index));
};


  return (
    <div className="">
      <h1 className="text-center">To Do List</h1>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="row w-100">
          <div className="col-md-6 mx-auto">
          <TodoForm addTodo={addTodo} />
          {todos.map((todo, index) => (
          <div key={index} >
            {/* <p>{index}</p> */}
            {todo.add}
            <Todo task={todo} index={index} deleteTodo={deleteTodo} />
          </div>
))}

                            
            
          </div>
        </div>
      </div>
    </div>
  );
};

