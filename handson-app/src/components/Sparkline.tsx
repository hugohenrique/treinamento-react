export function Sparkline({ data, width=160, height=40 }: { data:number[]; width?:number; height?:number }){
  const max = Math.max(1, ...data)
  const pts = data.map((v,i)=>{
    const x = (i/(data.length-1||1))*width
    const y = height - (v/max)*height
    return `${x},${y}`
  }).join(' ')
  return (
    <svg width={width} height={height} className="text-gray-400 dark:text-gray-300">
      <polyline fill="none" stroke="currentColor" strokeWidth="2" points={pts} />
    </svg>
  )
}
