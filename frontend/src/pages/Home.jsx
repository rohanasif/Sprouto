import React, { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const API_URL = "http://localhost:5000/api/tasks";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("all");

  const fetchTasks = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => {
            setEditingTask(null);
            setShowForm(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + New Task
        </button>
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="border px-2 py-1"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <TaskList
        tasks={filteredTasks}
        onEdit={(task) => {
          setEditingTask(task);
          setShowForm(true);
        }}
        onChange={fetchTasks}
      />

      {showForm && (
        <TaskForm
          task={editingTask}
          onClose={() => setShowForm(false)}
          onSuccess={() => {
            setShowForm(false);
            fetchTasks();
          }}
        />
      )}
    </>
  );
};

export default Home;
