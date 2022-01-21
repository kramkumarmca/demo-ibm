import { createReducer, on } from '@ngrx/store';
import { addCoffee, removeCoffee, loadCoffeeSuccess } from './coffee-demo-IBM-Action';
import { Coffee } from './coffee-demo-IBM-model'; 

export const initialState: ReadonlyArray<Coffee> = [];
 
export const collectionReducer = createReducer(
  initialState,
  on(removeCoffee, (state, coffee) => state.filter((c) => c.id !== coffee.id)),
  on(addCoffee, (state, coffee) => {
    if (state.indexOf(coffee.id) > -1) return state;
 
    return [coffee, ...state];
  }),
  on(loadCoffeeSuccess, (state, {coffee}) => 
    {
      return [...state, ...coffee];
    }
  )
  

);