import { useState } from "react";
import WeeklyTracking from "../../components/reports/WeeklyTracking";
import DailyTracking from "../../components/reports/DailyTracking";

const TIMEZONES = [
  { label: "GMT +5:30 (IST)", value: "Asia/Kolkata" },
  { label: "GMT +0 (UTC)", value: "UTC" },
  { label: "GMT -5 (EST)", value: "America/New_York" },
];

// 🔒 Assigned freelancer (mock – backend later)
const ASSIGNED_USER = {
  name: "Rahul Prasanth",
  role: "Frontend Developer",
  avatar: null, // later image URL
};

export default function TrackingReport() {
  const [mode, setMode] = useState("daily");
  const [showInactive, setShowInactive] = useState(true);
  const [timezone, setTimezone] = useState(TIMEZONES[0]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeDate = (days) => {
    const next = new Date(selectedDate);
    next.setDate(next.getDate() + days);
    setSelectedDate(next);
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Tracking Report
          </h1>
          <p className="text-slate-400">
            View activity based on selected period
          </p>
        </div>

        {/* TOGGLE */}
        <div className="flex bg-slate-800 rounded-lg p-1">
          <button
            onClick={() => setMode("daily")}
            className={`px-4 py-2 rounded-md text-sm ${
              mode === "daily"
                ? "bg-blue-600 text-white"
                : "text-slate-300"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setMode("weekly")}
            className={`px-4 py-2 rounded-md text-sm ${
              mode === "weekly"
                ? "bg-blue-600 text-white"
                : "text-slate-300"
            }`}
          >
            Weekly
          </button>
        </div>
      </div>

      {/* ACTION BAR */}
      {mode === "daily" && (
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* USER INFO */}
          <div className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2">
            <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-sm font-semibold text-white">
              {ASSIGNED_USER.name.charAt(0)}
            </div>

            <div className="text-sm">
              <p className="text-slate-200 font-medium">
                {ASSIGNED_USER.name}
              </p>
              <p className="text-slate-400 text-xs">
                {ASSIGNED_USER.role}
              </p>
            </div>
          </div>

          {/* DATE NAV */}
          <div className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2">
            <button
              onClick={() => changeDate(-1)}
              className="text-slate-300 hover:text-white"
            >
              ⬅
            </button>

            <span className="text-sm text-slate-200">
              {selectedDate.toDateString()}
            </span>

            <button
              onClick={() => changeDate(1)}
              className="text-slate-300 hover:text-white"
            >
              ➡
            </button>
          </div>

          {/* TIMEZONE */}
          <div className="flex items-center gap-2 text-sm text-slate-300">
            🌍
            <select
              value={timezone.value}
              onChange={(e) =>
                setTimezone(
                  TIMEZONES.find(
                    (t) => t.value === e.target.value
                  )
                )
              }
              className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200"
            >
              {TIMEZONES.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>

          {/* ACTIONS */}
          <details className="relative">
            <summary className="cursor-pointer bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-700">
              ⚙ Actions
            </summary>

            <div className="absolute right-0 mt-2 w-56 bg-slate-900 border border-slate-700 rounded-lg shadow-lg z-20">
              <button
                className="w-full text-left px-4 py-2 hover:bg-slate-800 text-sm"
                onClick={() => window.location.reload()}
              >
                🔄 Refresh
              </button>

              <button
                className="w-full text-left px-4 py-2 hover:bg-slate-800 text-sm"
                onClick={() => setShowInactive((p) => !p)}
              >
                {showInactive
                  ? "🙈 Hide Inactive Slots"
                  : "👁 Show Inactive Slots"}
              </button>
            </div>
          </details>
        </div>
      )}

      {/* CONTENT */}
      {mode === "daily" ? (
        <DailyTracking
          showInactive={showInactive}
          timezone={timezone}
          selectedDate={selectedDate}
        />
      ) : (
        <WeeklyTracking />
      )}
    </div>
  );
}
