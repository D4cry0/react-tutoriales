import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PokemonState {
  page: number;
  pokemon: [];
  isLoading: boolean;
}

const initialState: PokemonState = {
  page: 0,
  pokemon: [],
  isLoading: false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    loading: ( state ) => {
      // state.value += action.payload
      state.isLoading = true;
    },
    setPokemon: ( state, action: PayloadAction<number> ) => {

    }
  },
})

export const { loading, setPokemon } = pokemonSlice.actions

export default pokemonSlice.reducer