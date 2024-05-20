import apiSlice from './api'

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => ({
        url: '/api/category',
        method: 'GET',
      }),
      transformResponse: (response, meta, arg) => {
        if (!response.docs) {
          throw new Error('Invalid response format')
        }
        return response
      },
      providesTags: (result, error, arg) =>
        result
          ? result.docs.map(({ id }) => ({
              type: 'Category',
              id,
            }))
          : [],
    }),
  }),
})

//     result.docs.map(({ id, name }) => {
//       id: id
//       name: name
//       console.log(id, name)
//     })
//   },
// }),

//     result
//     ? //the following will get the id of each category:
//       [
//         ...result?.docs?.map(({ id }) => ({
//           type: 'Category',
//           id: id,
//         })),
//         'Category',
//       ]
//     : ['Category']
//   console.log(result.docs.map(({ id }) => {

//   }  ))
// },
// }),

// getSingleCategory: builder.query({
//   query: ({ id }) => ({
//     url: `/api/category/${id}`,
//     method: 'GET',
//     //credentials: 'omit',
//   }),
//   providesTags: (result, error, arg) => [
//     {
//       type: 'Category',
//       id: arg.id,
//     },
//   ],
// }),

// updateCategory: builder.mutation({
//   query: ({ id, body }) => ({
//     url: `/api/category/${id}`,
//     method: 'PUT',
//     body,
//   }),
//   invalidatesTags: (result, error, arg) => [{ type: 'Category', id: arg.id }],
// }),

// createCategory: builder.mutation({
//   query: ({ body }) => ({
//     url: '/api/category',
//     method: 'POST',
//     body,
//   }),
//   invalidatesTags: ['Category'],
// }),
//   }),
// })

export const {
  //useCreateCategoryMutation,
  useGetCategoriesQuery,
  // useGetSingleCategoryQuery,
  //useUpdateCategoryMutation,
} = categoryApiSlice
