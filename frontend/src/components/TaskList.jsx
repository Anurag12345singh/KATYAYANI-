import { deleteTask, updateTask } from "../services/api";

function TaskList({ tasks, fetchTasks }) {

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const markCompleted = async (task) => {
    await updateTask(task._id, { status: "Completed" });
    fetchTasks();
  };

  return (
    <div>

      <h3>Task List</h3>

      {tasks.map((task) => (
        <div key={task._id}>

          <h4>{task.title}</h4>

          <p>{task.description}</p>

          <p>Status: {task.status}</p>

          <button onClick={() => markCompleted(task)}>
            Complete
          </button>

          <button onClick={() => handleDelete(task._id)}>
            Delete
          </button>

          <hr />

        </div>
      ))}

    </div>
  );
}

export default TaskList;