import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nextPage: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state /* action */) => {
      state.isLoading = true;
    },

    setPokemons: (state, action) => {
      state.isLoading = false
      state.pokemons = action.payload.pokemons
      state.nextPage = action.payload.nextPage
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
