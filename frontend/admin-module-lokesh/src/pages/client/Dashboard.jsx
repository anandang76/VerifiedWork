import React from "react";
import {
  Clock,
  Activity,
  CheckCircle,
  DollarSign,
  Hourglass,
  Timer,
} from "lucide-react";

import KPICard from "../../components/common/KPICard";
import { KPI_SUMMARY, MOCK_TASKS } from "../../services/reportMockData";

const Dashboard = () => {
  const totalEstimatedHours = MOCK_TASKS.reduce(
    (sum, task) => sum + task.estimatedHours,
    0
  );

  const totalActualHours = MOCK_TASKS.reduce(
    (sum, task) => sum + task.actualHours,
    0
  );

  const totalSubtasks = MOCK_TASKS.reduce(
    (sum, task) => sum + task.subtasks.length,
    0
  );

  const avgTaskCompletionTime =
    totalSubtasks > 0 ? totalActualHours / totalSubtasks : 0;

  const remainingHours = totalEstimatedHours - totalActualHours;

  return (
    <div className="text-slate-200">
      <h1 className="text-2xl font-bold text-white mb-2">
        Project Analytics
      </h1>
      <p className="text-slate-400 mb-8">
        High level overview
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <KPICard title="Total Hours" value={KPI_SUMMARY.totalHours} icon={Clock} colorClass="bg-blue-500/20 text-blue-400" />
        <KPICard title="Avg. Activity" value={KPI_SUMMARY.avgActivity} icon={Activity} colorClass="bg-purple-500/20 text-purple-400" />
        <KPICard title="Tasks Completed" value={KPI_SUMMARY.tasksCompleted} icon={CheckCircle} colorClass="bg-green-500/20 text-green-400" />
        <KPICard title="Est. Earnings" value={KPI_SUMMARY.earnings} icon={DollarSign} colorClass="bg-amber-500/20 text-amber-400" />
        <KPICard title="Estimated Project Hours" value={`${totalEstimatedHours} hrs`} icon={Hourglass} colorClass="bg-indigo-500/20 text-indigo-400" />
        <KPICard title="Avg Task Completion" value={`${avgTaskCompletionTime.toFixed(1)} hrs`} icon={Timer} colorClass="bg-cyan-500/20 text-cyan-400" />
        <KPICard title="Est. Time Remaining" value={`${remainingHours} hrs`} icon={Clock} colorClass="bg-orange-500/20 text-orange-400" />
      </div>
    </div>
  );
};

export default Dashboard;
