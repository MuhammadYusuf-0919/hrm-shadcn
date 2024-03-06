// import { FormData } from '@/types';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const crudApi = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
//   tagTypes: ['Crud'],
//   endpoints: (builder) => ({
//     fetchEntity: builder.query<FormData[], string>({
//       query: (entity) => `/${entity}`,
//       providesTags: (result, error, entity) => [{ type: 'Crud', entity }],
//     }),
//     addEntity: builder.mutation<FormData, { entity: string; data: FormData }>({
//       query: ({ entity, data }) => ({
//         url: `/${entity}`,
//         method: 'POST',
//         body: data,
//       }),
//       invalidatesTags: (result, error, { entity }) => [{ type: 'Crud', entity }],
//     }),
//     updateEntity: builder.mutation<FormData, { entity: string; id: string; data: FormData }>({
//       query: ({ entity, id, data }) => ({
//         url: `/${entity}/${id}`,
//         method: 'PATCH',
//         body: data,
//       }),
//       invalidatesTags: (result, error, { entity }) => [{ type: 'Crud', entity }],
//     }),
//     deleteEntity: builder.mutation<string, { entity: string; id: string }>({
//       query: ({ entity, id }) => ({
//         url: `/${entity}/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: (result, error, { entity }) => [{ type: 'Crud', entity }],
//     }),
//   }),
// });

// export const {
//   useFetchEntityQuery,
//   useAddEntityMutation,
//   useUpdateEntityMutation,
//   useDeleteEntityMutation,
// } = crudApi;

import { FormData } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const crudApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['Crud'],
  endpoints: (builder) => ({
    fetchEntity: builder.query<FormData[], string>({
      query: (entity) => `/${entity}`,
      providesTags: (_, __, entity) => [{ type: 'Crud', entity }],
    }),
    addEntity: builder.mutation<FormData, { entity: string; data: FormData }>({
      query: ({ entity, data }) => ({
        url: `/${entity}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: (_, __, { entity }) => [{ type: 'Crud', entity }],
    }),
    updateEntity: builder.mutation<FormData, { entity: string; id: string; data: FormData }>({
      query: ({ entity, id, data }) => ({
        url: `/${entity}/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (_, __, { entity }) => [{ type: 'Crud', entity }],
    }),
    deleteEntity: builder.mutation<string, { entity: string; id: string }>({
      query: ({ entity, id }) => ({
        url: `/${entity}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_, __, { entity }) => [{ type: 'Crud', entity }],
    }),
  }),
});

export const {
  useFetchEntityQuery,
  useAddEntityMutation,
  useUpdateEntityMutation,
  useDeleteEntityMutation,
} = crudApi;
