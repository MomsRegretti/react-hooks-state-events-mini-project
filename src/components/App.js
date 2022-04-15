import React ,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTasks] = useState(TASKS)
  const [categories,setCategories] = useState('All')
  
  const onCategoryChange = (selectedCategory) => {
      setCategories(selectedCategory)
    }

    const onAddTask = (newTask) => {
    setTasks([...tasks, newTask])
    }
  const tasksToDisplay = tasks.filter((task) => {
    if (categories === 'All') {
      return true
    } else {
      return task.category === categories
    }
  })

  const onDeleteTask= deletedTask => {
    const updatedTasks = tasks.filter(task => task.text !== deletedTask.text)
    setTasks(updatedTasks)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} setCategories={setCategories} categories={categories} onCategoryChange={onCategoryChange}/>
      <NewTaskForm onAddTask={onAddTask} CATEGORIES={CATEGORIES}/>
      <TaskList onDeleteTask={onDeleteTask} tasksToDisplay={tasksToDisplay}/>
    </div>
  );
}

export default App;
