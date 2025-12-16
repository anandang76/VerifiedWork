import { useEffect, useRef, useState } from "react";

export default function Timer({ task, onTimeUpdate }) {
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  // 🔥 local ticking state
  const timeRef = useRef(task.timeSpent);

  useEffect(() => {
    timeRef.current = task.timeSpent;
  }, [task.timeSpent]);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        timeRef.current += 1;

        onTimeUpdate({
          ...task,
          timeSpent: timeRef.current
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const formatTime = secs => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center gap-3 mt-2">
      <span className="text-sm text-gray-700">
        Time: {formatTime(task.timeSpent)}
      </span>

      <button
        onClick={() => setRunning(prev => !prev)}
        className="px-2 py-1 text-xs border rounded"
      >
        {running ? "Stop" : "Start"}
      </button>
    </div>
  );
}
