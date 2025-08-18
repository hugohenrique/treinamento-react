import { baseApi } from '../../api/base';

export type Product = {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
};

export type ProductCreate = {
  name: string;
  sku: string;
  price: number;
  stock: number;
};

export const productsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Product[], {q?: string}>({
      query: ({ q }) => q ? `/api/products?q=${encodeURIComponent(q)}` : '/api/products',
      /*
      providesTags(result, error, arg, meta) {
          return [
            ...result?.map(p => { type: 'Products' as const, id: p.id })
          ];
      },
      */
    }),
    getProduct: build.query<Product, number>({
      query: (id) => `/api/products/${id}`,
      /*
      providesTags(result, error, id) {
          return [{ type: 'Products', id }];
      },
      */
    })
  })
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;