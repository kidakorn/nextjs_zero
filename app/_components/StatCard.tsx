import React from 'react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
};

function StatCard({ title, value, change, isPositive }: StatCardProps) {
  const isNeutral = change === "0%";

  return (
    <div className="card bg-base-100 border border-base-300 shadow-none p-5">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-base-content/70 font-medium">{title}</p>
        <div className="flex items-end justify-between">
          <h3 className="text-3xl font-bold text-base-content">{value}</h3>

          <span className={`badge badge-sm gap-1 font-semibold border-none ${isNeutral ? "badge-ghost text-base-content/70" :
              isPositive ? "badge-success bg-success/10 text-success" :
                "badge-error bg-error/10 text-error"
            }`}>
            {isNeutral ? <Minus size={14} /> :
              isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {change}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StatCard