//ESTO ES UNA ESTRUCTURA RTK QUERY PARA REALIZAR PETICIONES HTTP

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todos', // Esto seria el nombre de mi "reducer"

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com', // Esta propiedad almacena el host de la api
  }),

  endpoints: (builder) => ({
    // La propiedad getTodos es un nombre que me invento y es una propiedad que luego llamare en algun sitio para que realice la peticion https con el endpoint concatenado
    getTodos: builder.query({
      query: () => '/todos', //Lo que hace esta linea es concatenar el /todos al final del baseURL
    }),
    getTodo: builder.query({
      query: (todoId) => `/todos/${todoId}`, // Aqui estoy recibiendo un parametro que se enviaria a al custom hook useGetTodoQuery y concatenandolo en el endpoint
    }),
  }),
});

// Extraigo los customhooks que la libreria RTK Query crea automaticamente por nosotros, en este caso nos crea un customhook llamado useGetTodosQuery, el "use" es el estandar para comenzar el nombre de un hook, el "GetTodos" es el nombre que le dimos a la propiedad del enpoint en la linea 14, y el 'Query' es porque detecta que estoy haciendo una pericion GET, pero si fuera una peticion POST, PUT, DELETE, etc, la palabra seria 'Mutation' y quedaria algo asi useGetTodosMutation
export const { useGetTodosQuery, useGetTodoQuery } = todosApi;

// NOTA: Las peticiones se guardan en caches, es decir la respuesta de la peticion se guarda en la cache del navegador por si realizamos nuevamente una peticion y esos datos ya estan en el cache se cancela la peticion y devuelve lo que tenga almacenado en cache, esto funciona asi para no realizar peticiones sobre un dato que acabamos de consultar, por defecto las respuestas almacenadas en la cache se eliminan automaticamente despues de 1 miniSerializeError, este tiempo se puede configurar