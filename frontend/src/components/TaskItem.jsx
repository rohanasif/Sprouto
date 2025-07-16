const TaskItem = ({ task, onEdit, onChange }) => {
  const toggleStatus = async () => {
    await fetch(`http://localhost:5000/api/tasks/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: task.status === "pending" ? "completed" : "pending",
      }),
    });
    onChange();
  };

  const handleDelete = async () => {
    await fetch(`http://localhost:5000/api/tasks/${task._id}`, {
      method: "DELETE",
    });
    onChange();
  };

  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-center">
      <div>
        <h3
          className={`font-bold ${
            task.status === "completed" ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </h3>
        <p className="text-sm text-gray-500">{task.description}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={toggleStatus}
          className="text-green-500 hover:underline"
        >
          {task.status === "pending" ? "Complete" : "Undo"}
        </button>
        <button
          onClick={() => onEdit(task)}
          className="text-blue-500 hover:underline"
        >
          Edit
        </button>
        <button onClick={handleDelete} className="text-red-500 hover:underline">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
