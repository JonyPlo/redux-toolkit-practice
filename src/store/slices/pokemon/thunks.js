import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

// Un Thunk es una action asyncrona que llama a otra action
export const getPokemons = (nextPage = 0) => {
  // Retorno una funcion flecha anonima
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
