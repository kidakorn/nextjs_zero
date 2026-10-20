import { statsData } from './_data/dashboard';
import StatCard from './_components/StatCard';

export default function DashboardPage() {
  return (
    <div className="p-6 w-full max-w-7xl mx-auto space-y-6">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-base-content">Dashboard Overview</h1>
          <p className="text-sm text-base-content/60">Welcome back! Here&apos;s your daily stock summary.</p>
        </div>
        <button className="btn btn-primary btn-sm">Export Report</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div>
        <h3 className="grid grid-cols-1 lg:grid-cols-2 gap-6">Charts Area</h3>
        <p className="text-sm text-base-content/60">Charts and graphs representing stock trends and data.</p>
      </div>

    </div>
  );
}
