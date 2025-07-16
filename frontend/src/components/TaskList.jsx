import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onEdit, onChange }) => {
  if (tasks.length === 0) return <p className="text-center">No tasks found.</p>;

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onEdit={onEdit}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default TaskList;
