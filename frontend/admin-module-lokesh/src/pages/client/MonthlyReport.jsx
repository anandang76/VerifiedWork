import React from "react";

const MonthlyReport = () => {
  return (
    <div className="text-slate-200">
      <h1 className="text-2xl font-bold text-white mb-4">
        Monthly Report
      </h1>

      <p className="text-slate-400 mb-6">
        Select a date range to view activity summary.
      </p>

      {/* Placeholder for calendar */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <p className="text-slate-300">
          📅 Calendar view will be implemented here.
        </p>
      </div>
    </div>
  );
};

export default MonthlyReport;
