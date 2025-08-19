export default function last7daysCounts<T extends {createdAt:string}>(list:T[]|undefined){
  const days = Array.from({length:7}, (_,i)=>{ const d=new Date(); d.setDate(d.getDate()-(6-i)); d.setHours(0,0,0,0); return d })
  const counts = days.map(d=> (list||[]).filter(x=>{ const t=new Date(x.createdAt); t.setHours(0,0,0,0); return t.getTime()===d.getTime() }).length )
  return counts
}