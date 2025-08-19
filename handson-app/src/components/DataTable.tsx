import React from 'react'
type Column<T> = { header: string; accessor: (row: T) => React.ReactNode; className?: string }
type Props<T> = { columns: Column<T>[]; data: T[]; selection?: { selected: Set<number>; toggle:(id:number)=>void; getId:(row:T)=>number } }
export function DataTable<T>({ columns, data, selection }: Props<T>) {
  return (
    <div className="overflow-auto rounded-xl border border-gray-200">
      <table className="table">
        <thead className="bg-gray-50">
          <tr>
            {selection && <th className="w-10"></th>}
            {columns.map((c, i) => (<th key={i} className={c.className}>{c.header}</th>))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50">
              {selection && (
                <td className="w-10"><input type="checkbox" checked={selection.selected.has(selection.getId(row) as any)} onChange={()=>selection.toggle(selection.getId(row) as any)} /></td>
              )}
              {columns.map((c, j) => (<td key={j} className={c.className}>{c.accessor(row)}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
