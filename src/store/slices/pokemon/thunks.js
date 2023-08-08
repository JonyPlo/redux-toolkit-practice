import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

// Un Thunk es una action asyncrona que llama a otra action
export const getPokemons = (nextPage = 0) => {
  // Retorno una funcion flecha anonima
  // Esta funcion flecha recibe 2 parametros, el primer parametro es un dispatch, que es para disparar las acciones, y el segundo parametro es el route state, en otras palabras, es la funcion que contiene los estados del store, por ejemplo en este caso podriamos extraer los estados de los pokemons de la siguiente forma: const { pokemons } = getState()
  return async (dispatch, getState) => {
    // Pongo el store de los pokemons en un estado de carga
    dispatch(startLoadingPokemons());

    //Realizar peticion https
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${nextPage * 10}`
    );

    // Seteo el nuevo estado de los pokemons
    dispatch(setPokemons({ pokemons: data.results, nextPage: nextPage + 1 }));
  };
};
