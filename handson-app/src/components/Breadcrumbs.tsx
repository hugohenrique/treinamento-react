import { useMatches } from 'react-router-dom'

export function Breadcrumbs() {
  const matches = useMatches()
  const crumbs = matches
    .filter(m => (m.handle as any)?.crumb)
    .map(m => (m.handle as any).crumb(m))

  if (crumbs.length < 2) {
    return null;
  }

  return (
    <nav className="text-sm text-gray-600" aria-label="breadcrumbs">
      <ol className="flex items-center flex-wrap">
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center">
            {i > 0 && <span className="px-2">/</span>}
            {crumb}
          </li>
        ))}
      </ol>
    </nav>
  )
}
