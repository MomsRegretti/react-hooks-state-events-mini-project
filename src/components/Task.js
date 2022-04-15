import React from "react";

function Task({task,text,category, onDeleteTask}) {

  function handleDeleteClick() {
    onDeleteTask(task)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick = {handleDeleteClick} className="delete">X</button>
    </div>
  );
}

export default Task;
