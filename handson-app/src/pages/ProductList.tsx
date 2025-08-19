import React from 'react'
import { DataTable } from '../components/DataTable'
import type { Product } from '../features/products/api'
import formatMoney from '../formatMoney'

export type SortState = { key: keyof Product | 'price' | 'stock' | 'name' | 'sku'; dir: 'asc' | 'desc' }

type Props = {
  data: Product[]
  page: number
  totalPages: number
  totalItems: number
  selected: Set<number>
  toggleSelection: (id: number) => void
  onPageChange: (page: number) => void
  onEdit: (p: Product) => void
  onDelete: (p: Product) => void
  onShow: (p: Product) => void
  onStockChange: (id: number, stock: number) => Promise<void>
  sort: SortState
  onSort: (s: SortState) => void
}

export function ProductList({ data, page, totalPages, totalItems, selected, toggleSelection, onPageChange, onEdit, onDelete, onShow, onStockChange, sort, onSort }: Props) {
  function header(label: string, key: SortState['key']) {
    const is = sort.key === key
    return (
      <button className="btn-ghost" onClick={() => onSort({ key, dir: is && sort.dir === 'asc' ? 'desc' : 'asc' })}>
        {label} {is ? (sort.dir === 'asc' ? '↑' : '↓') : ''}
      </button>
    )
  }

  return (
    <>
      <DataTable
        selection={{ selected, toggle: toggleSelection, getId: (r: Product) => r.id }}
        columns={[
          { header: header('ID', 'id'), accessor: (r: Product) => r.id, className: 'w-16' },
          { header: header('Nome', 'name'), accessor: (r: Product) => <button className="underline decoration-dotted" onClick={() => onShow(r)}>{r.name}</button> },
          { header: header('SKU', 'sku'), accessor: (r: Product) => <span className="badge">{r.sku}</span>, className: 'w-40' },
          { header: header('Preço', 'price'), accessor: (r: Product) => formatMoney(r.price), className: 'w-32' },
          { header: header('Estoque', 'stock'), accessor: (r: Product) => (
            <input
              className="input w-20"
              defaultValue={r.stock}
              onBlur={async (e) => {
                const v = parseInt(e.currentTarget.value || '0')
                if (v !== r.stock) {
                  await onStockChange(r.id, v)
                }
              }}
            />
          ), className: 'w-32' },
          { header: 'Ações', accessor: (r: Product) => (
            <div className="flex gap-2">
              <button className="btn" onClick={() => onEdit(r)}>Editar</button>
              <button className="btn" onClick={() => onDelete(r)}>Remover</button>
            </div>
          ), className: 'w-40' },
        ]}
        data={data}
      />
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-500">Página {page} de {totalPages} • {totalItems} itens • Selecionados: {selected.size}</p>
        <div className="flex gap-2">
          <button className="btn" disabled={page <= 1} onClick={() => onPageChange(page - 1)}>Anterior</button>
          <button className="btn" disabled={page >= totalPages} onClick={() => onPageChange(page + 1)}>Próxima</button>
        </div>
      </div>
    </>
  )
}
