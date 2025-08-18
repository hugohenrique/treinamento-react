import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:8080';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
      return headers;
    }
  }),
  tagTypes: ['Products', 'Customers', 'Orders'],
  endpoints: () => ({})
});
