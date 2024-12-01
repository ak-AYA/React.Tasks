import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ index, deleteTodo }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(index)} />
    </div>
  );
};
