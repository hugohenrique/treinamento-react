import { Sparkline } from './Sparkline'
export function StatCard({ title, value, trend }:{ title:string; value:string|number; trend:number[] }){
  return (
    <div className="stat-card">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
          <div className="text-3xl font-bold mt-1 text-gray-900 dark:text-gray-100">{value}</div>
        </div>
        <Sparkline data={trend} />
      </div>
    </div>
  )
}
