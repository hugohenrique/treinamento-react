import { StatCard } from '../components/StatCard';
import { useGetProductsQuery } from '../features/products/api';
import last7daysCounts from '../last7daysCounts';

export default function DashboardPage() {
  const { data: products, isLoading: productsLoading } = useGetProductsQuery({})
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-header">
          <h2 className="text-lg font-semibold">Resumo</h2>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <StatCard
              title="Produtos" 
              value={productsLoading ? '...' : (products?.length ?? 0)} 
              trend={last7daysCounts(products)} 
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-semibold">Atividade Recente</h2>
          </div>
          <div className="card-body text-sm space-y-2">
            <p>Últimos produtos criados: {products?.slice(0, 3).map(p => p.name).join(', ') || 'Nenhum'}</p>
            {/* <p>Últimos clientes cadastrados: {customers?.slice(0, 3).map(c => c.name).join(', ') || 'Nenhum'}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}