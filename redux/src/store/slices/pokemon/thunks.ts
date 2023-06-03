import { AnyAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../store";

import { loading } from "./pokemonSlice"


export const getPokemons = ( page = 0) => {
    
    return async ( dispatch: AppDispatch, getState: RootState ) => {
        
        dispatch( loading() );


    }
}