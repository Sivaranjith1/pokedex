import {combineReducers} from 'redux';
import pokemonNames from './pokemonNames';

let allReducers = combineReducers({
  name: pokemonNames,
})

export default allReducers;
