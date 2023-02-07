import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <button
          className="cancelBtn"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </button>
        <li>{props.item}</li>
      </div>
    </>
  );
};

export default ToDoList;
