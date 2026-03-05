import { useState } from "react";
import { createTask } from "../services/api";

function TaskForm({ fetchTasks }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    await createTask({
      title,
      description,
      status: "Pending",
    });

    setTitle("");
    setDescription("");

    fetchTasks();
  };

  return (
    <div>

      <h3>Add Task</h3>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Add Task</button>

      </form>

    </div>
  );
}

export default TaskForm;