import React ,{useState} from "react";
import Option from "./Option";

function NewTaskForm({CATEGORIES,onAddTask}) {
  const [formData, setFormData] = useState({
    text: '',
    category: ''
  });

  const updatedCATEGORIES= CATEGORIES.filter((category) => category !== "All")  
  
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData((formData) => ({...formData, [name]: value}))
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    onAddTask(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange}type="text" name="text" value={formData.text}/>
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category" value={formData.category}>
          {updatedCATEGORIES.map(option => {
            return <Option  key={option} value={option}/>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
