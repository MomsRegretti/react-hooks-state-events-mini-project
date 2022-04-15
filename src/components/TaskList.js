import React from "react";
import Task from "./Task";

function TaskList({tasksToDisplay, onDeleteTask}) {

  return (
    <div className="tasks">
      {tasksToDisplay.map(task=> {
        return <Task onDeleteTask={onDeleteTask} key={task.text} task={task} text={task.text} category={task.category}/>
      })}
    </div>
  );
}

export default TaskList;
