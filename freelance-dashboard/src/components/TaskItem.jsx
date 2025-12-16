import Timer from "./Timer";

export default function TaskItem({ task, projectId, onTaskUpdate }) {
  // ✅ STEP 9 (progress calculation)
  const completed = task.subtasks.filter(s => s.done).length;
  const total = task.subtasks.length;
  const progress = Math.round((completed / total) * 100);

  // 🔥 TOGGLE SUBTASK
  const toggleSubtask = subtaskId => {
    const updatedTask = {
      ...task,
      subtasks: task.subtasks.map(sub =>
        sub.id === subtaskId
          ? { ...sub, done: !sub.done }
          : sub
      )
    };

    onTaskUpdate(projectId, updatedTask);
  };

  const handleTimeUpdate = updatedTask => {
  onTaskUpdate(projectId, updatedTask);
};


  return (
  <div className="border p-3 mt-3 rounded">
    <h3 className="font-medium">{task.title}</h3>

    <p className="text-sm text-gray-600 mb-1">
      Progress: {progress}%
    </p>

    {/* 🔵 PROGRESS BAR */}
    <div className="w-full bg-gray-200 rounded h-2 mb-3">
      <div
        className="bg-indigo-600 h-2 rounded"
        style={{ width: `${progress}%` }}
      />
    </div>
    <Timer task={task} onTimeUpdate={handleTimeUpdate} />


    <div className="space-y-1">
      {task.subtasks.map(sub => (
        <label key={sub.id} className="block text-sm">
          <input
            type="checkbox"
            checked={sub.done}
            onChange={() => toggleSubtask(sub.id)}
          />{" "}
          {sub.title}
        </label>
      ))}
    </div>
  </div>
);

}
