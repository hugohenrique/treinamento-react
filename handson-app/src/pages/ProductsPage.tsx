import { useMemo, useState } from "react";
import { useGetProductsQuery, Product } from '../features/products/api';
import { ProductList } from "./ProductList";

export type SortState = { key: keyof Product | 'price' | 'stock' | 'name' | 'sku'; dir: 'asc' | 'desc' };

export default function ProductsPage() {
  const [query, setQuery] = useState('');
  const { data = [], isLoading, isFetching, error } = useGetProductsQuery({ q: query || undefined });
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sort, setSort] = useState<SortState>({ key: 'name', dir: 'asc' });
  const [editing, setEditing] = useState<Product|null>(null);
  const [deleting, setDeleting] = useState<Product|null>(null);
  const [drawer, setDrawer] = useState<Product|null>(null);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [page, setPage] = useState(1);
  const pageSize = 10;

  function toggleSelection(id: number) {
    setSelected(s => { const n=new Set(s); if(n.has(id)) n.delete(id); else n.add(id); return n })
  }

  // codigo portado de outro projeto
  const filtered = useMemo(() => {
    let f = data
    const q = query.trim().toLowerCase()
    if (q) f = f.filter(p => [p.name, p.sku].some(v => v.toLowerCase().includes(q)))
    if (minPrice) f = f.filter(p => p.price >= parseFloat(minPrice))
    if (maxPrice) f = f.filter(p => p.price <= parseFloat(maxPrice))
    if (inStockOnly) f = f.filter(p => p.stock > 0)
    f = [...f].sort((a,b)=>{
      const av = (a as any)[sort.key]; const bv = (b as any)[sort.key]
      if (av < bv) return sort.dir==='asc' ? -1 : 1
      if (av > bv) return sort.dir==='asc' ? 1 : -1
      return 0
    })
    return f
  }, [data, query, minPrice, maxPrice, inStockOnly, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageData = filtered.slice((page-1) * pageSize, page * pageSize);

  return (
    <div className="card">
      <div className="card-header">
        <div className="toolbar"></div>
      </div>
      <div className="card-body">
        {(isLoading || isFetching) && <div className="w-40 h-8 skeleton mb-3"/>}
        {!isLoading && !pageData.length && <p className="text-sm text-gray-500">Nenhum produto encontrado.</p>}
        {!!pageData.length && (
          <ProductList
            data={pageData}
            page={page}
            totalPages={totalPages}
            totalItems={filtered.length}
            selected={selected}
            toggleSelection={toggleSelection}
            onPageChange={setPage}
            onEdit={(p) => setEditing(p)}
            onDelete={(p) => setDeleting(p)}
            onShow={(p) => setDrawer(p)}
            onStockChange={async (id, stock) => {
              // await patchProduct({ id, patch: { stock } }).unwrap()
              // toast.show('Estoque atualizado')
            }}
            sort={sort}
            onSort={setSort}
          />
        )}
      </div>
    </div>
  );
}