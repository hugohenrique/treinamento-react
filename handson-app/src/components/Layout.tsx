import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Boxes, Users, Home, Sun, Moon, Search, Code, Shield, Zap, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'
// import { useTheme } from '../contexts/ThemeContext'
import { useAuth } from '../contexts/AuthContext'
import { Breadcrumbs } from './Breadcrumbs'

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // const { theme, toggleTheme } = useTheme()
  const [q, setQ] = useState('')
  const navigate = useNavigate()
  
  // Try-catch para evitar erros se o contexto não estiver disponível
  let user = null
  let logout = () => {}
  try {
    const auth = useAuth()
    user = auth.user
    logout = auth.logout
  } catch (error) {
    console.log('Auth context not available')
  }

  // Fallback para quando não há usuário autenticado
  const userName = user?.name || 'Visitante'
  return (
    <div className="min-h-screen grid grid-rows-[var(--header-height)_1fr] bg-gray-50 dark:bg-gray-900">
      <header className="h-[var(--header-height)] border-b bg-white/95 dark:bg-gray-700/95 backdrop-blur border-gray-200 dark:border-gray-500">
        <div className="container-narrow h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold">T</span>
            <Link to="/" className="font-semibold text-gray-900 dark:text-white">Training App</Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-2 top-3 text-gray-500 dark:text-gray-400" />
              <input
                className="input pl-24 w-11/12"
                placeholder="Busca"
                value={q}
                onChange={e=>setQ(e.target.value)}
                style={{ colorScheme: 'auto' }}
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>{userName}</span>
              {user ? (
                <button
                  className="btn"
                  onClick={() => {
                    logout()
                    navigate('/login')
                  }}
                >
                  Sair
                </button>
              ) : (
                <Link to="/login" className="btn">Login</Link>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 container-narrow w-full py-6">
        <aside className="card p-4 h-fit lg:sticky lg:top-4 order-last lg:order-first">
          <ul className="space-y-2">
            <li><NavLink to="/" end className={({isActive}) => 'btn w-full justify-start text-gray-700 dark:text-gray-300 ' + (isActive ? 'btn-primary' : '')}><Home className="h-4 w-4" /> Dashboard</NavLink></li>
            <li><NavLink to="/store" className={({isActive}) => 'btn w-full justify-start text-gray-700 dark:text-gray-300 ' + (isActive ? 'btn-primary' : '')}><ShoppingCart className="h-4 w-4" /> Loja</NavLink></li>
            <li><NavLink to="/products" className={({isActive}) => 'btn w-full justify-start text-gray-700 dark:text-gray-300 ' + (isActive ? 'btn-primary' : '')}><Boxes className="h-4 w-4" /> Produtos</NavLink></li>
            <li><NavLink to="/customers" className={({isActive}) => 'btn w-full justify-start text-gray-700 dark:text-gray-300 ' + (isActive ? 'btn-primary' : '')}><Users className="h-4 w-4" /> Clientes</NavLink></li>
            {user?.role === 'admin' && (
              <li><NavLink to="/admin" className={({isActive}) => 'btn w-full justify-start text-gray-700 dark:text-gray-300 ' + (isActive ? 'btn-primary' : '')}><Shield className="h-4 w-4" /> Admin</NavLink></li>
            )}
          </ul>
        </aside>
        <main className="space-y-6">
          <Breadcrumbs />
          {children}
        </main>
      </div>
    </div>
  )
}
