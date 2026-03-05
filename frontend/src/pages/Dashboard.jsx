import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { getTasks } from "../services/api";

function Dashboard() {

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>

      <h1>Task Dashboard</h1>

      <TaskForm fetchTasks={fetchTasks} />

      <TaskList tasks={tasks} fetchTasks={fetchTasks} />

    </div>
  );
}

export default Dashboard;